import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locale, OrderRequest } from '$lib/types';
import { cities, cityCodes } from '$lib/data/cities';

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

const emailCopy: Record<
	Locale,
	{
		subject: string;
		customer: string;
		email: string;
		mobile: string;
		city: string;
		area: string;
		street: string;
		buildingApt: string;
		instructions: string;
		delivery: string;
		selection: string;
		total: string;
		qty: string;
		currency: string;
		footer: string;
	}
> = {
	ar: {
		subject: 'طلب جديد',
		customer: 'العميل',
		email: 'البريد الإلكتروني',
		mobile: 'الموبايل',
		city: 'المدينة',
		area: 'المنطقة',
		street: 'الشارع',
		buildingApt: 'المبنى / الشقة',
		instructions: 'تعليمات التوصيل',
		delivery: 'تفاصيل التوصيل',
		selection: 'المختارات',
		total: 'الإجمالي',
		qty: 'الكمية',
		currency: 'ج.م',
		footer: 'رونيكا شوكلاتييه | نظام الطلبات الآلي'
	},
	en: {
		subject: 'New Order',
		customer: 'Customer',
		email: 'Email',
		mobile: 'Mobile',
		city: 'City',
		area: 'Area',
		street: 'Street',
		buildingApt: 'Building / Apt',
		instructions: 'Delivery Instructions',
		delivery: 'Delivery Details',
		selection: 'Selection',
		total: 'Total',
		qty: 'Qty',
		currency: 'EGP',
		footer: 'RONIKA CHOCOLATIER | AUTOMATED ORDER SYSTEM'
	}
};

export const POST: RequestHandler = async ({ request }) => {
	if (!env.RESEND_API_KEY || !env.ORDER_DESTINATION) {
		return json({ success: false, error: 'Server misconfiguration' }, { status: 500 });
	}

	const resend = new Resend(env.RESEND_API_KEY);
	const body = (await request.json()) as Partial<OrderRequest>;

	const { formData, cartItems } = body;
	const rawLocale = body.locale;
	const locale: Locale = rawLocale === 'en' || rawLocale === 'ar' ? rawLocale : 'en';
	const copy = emailCopy[locale];

	const mobileRegex = /^01[0125][0-9]{8}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (
		!formData ||
		typeof formData.name !== 'string' ||
		formData.name.trim().length < 3 ||
		formData.name.length > 200 ||
		typeof formData.email !== 'string' ||
		!emailRegex.test(formData.email.trim()) ||
		formData.email.length > 200 ||
		typeof formData.mobile !== 'string' ||
		!mobileRegex.test(formData.mobile.trim()) ||
		typeof formData.city !== 'string' ||
		!cityCodes.has(formData.city) ||
		typeof formData.area !== 'string' ||
		formData.area.trim().length < 2 ||
		formData.area.length > 200 ||
		typeof formData.street !== 'string' ||
		formData.street.trim().length < 2 ||
		formData.street.length > 200 ||
		typeof formData.buildingApt !== 'string' ||
		formData.buildingApt.trim().length < 2 ||
		formData.buildingApt.length > 100 ||
		typeof formData.instructions !== 'string' ||
		formData.instructions.length > 500
	) {
		return json({ success: false, error: 'Invalid form data' }, { status: 400 });
	}

	const validItems = (cartItems ?? []).filter(
		(item) =>
			item &&
			typeof item.id === 'string' &&
			item.name &&
			typeof item.name.en === 'string' &&
			typeof item.name.ar === 'string' &&
			typeof item.price === 'number' &&
			item.price > 0 &&
			typeof item.quantity === 'number' &&
			item.quantity > 0
	);

	if (validItems.length === 0) {
		return json({ success: false, error: 'Cart is empty or invalid' }, { status: 400 });
	}

	const computedTotal = validItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const cityLabel = cities.find((c) => c.code === formData.city)?.name[locale] ?? formData.city;

	const itemsHtml = validItems
		.map(
			(item) =>
				`<div style="margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
            <strong style="color: #1a0f0a;">${escapeHtml(item.name[locale])}</strong><br>
            <span style="color: #8e7341; font-size: 12px;">${escapeHtml(copy.qty)}: ${item.quantity} — ${escapeHtml(copy.currency)} ${(item.price * item.quantity).toLocaleString()}</span>
        </div>`
		)
		.join('');

	const instructionsHtml = formData.instructions.trim()
		? `<p><strong>${escapeHtml(copy.instructions)}:</strong> ${escapeHtml(formData.instructions)}</p>`
		: '';

	try {
		const { data, error } = await resend.emails.send({
			from: 'RONIKA Orders <onboarding@resend.dev>',
			to: [env.ORDER_DESTINATION],
			subject: `${copy.subject}: ${escapeHtml(formData.name)}`,
			html: `
                <div dir="${locale === 'ar' ? 'rtl' : 'ltr'}" lang="${locale}" style="font-family: 'Georgia', serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #c5a059;">
                    <h1 style="text-align: center; color: #c5a059; letter-spacing: 4px;">RONIKA</h1>
                    <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 2px; color: #8e7341; text-align: center;">${escapeHtml(copy.subject)}</p>

                    <div style="margin-top: 30px;">
                        <h3 style="color: #1a0f0a; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">${escapeHtml(copy.delivery)}</h3>
                        <p><strong>${escapeHtml(copy.customer)}:</strong> ${escapeHtml(formData.name)}</p>
                        <p><strong>${escapeHtml(copy.email)}:</strong> ${escapeHtml(formData.email)}</p>
                        <p><strong>${escapeHtml(copy.mobile)}:</strong> +20 ${escapeHtml(formData.mobile)}</p>
                        <p><strong>${escapeHtml(copy.city)}:</strong> ${escapeHtml(cityLabel)}</p>
                        <p><strong>${escapeHtml(copy.area)}:</strong> ${escapeHtml(formData.area)}</p>
                        <p><strong>${escapeHtml(copy.street)}:</strong> ${escapeHtml(formData.street)}</p>
                        <p><strong>${escapeHtml(copy.buildingApt)}:</strong> ${escapeHtml(formData.buildingApt)}</p>
                        ${instructionsHtml}
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background-color: #fdfaf4;">
                        <h3 style="color: #1a0f0a; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">${escapeHtml(copy.selection)}</h3>
                        ${itemsHtml}
                        <p style="font-size: 18px; margin-top: 20px;"><strong>${escapeHtml(copy.total)}: ${escapeHtml(copy.currency)} ${computedTotal.toLocaleString()}</strong></p>
                    </div>

                    <footer style="margin-top: 40px; text-align: center; font-size: 10px; color: #999;">
                        ${escapeHtml(copy.footer)}
                    </footer>
                </div>
            `
		});

		if (error) {
			return json({ success: false, error: error.message }, { status: 400 });
		}

		return json({ success: true, data });
	} catch (err) {
		return json(
			{ success: false, error: err instanceof Error ? err.message : 'unknown error' },
			{ status: 500 }
		);
	}
};
