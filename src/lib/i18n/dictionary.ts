import type { Locale } from '$lib/types';

export const dictionary = {
	'nav.collections': {
		en: 'Collections',
		ar: 'إصداراتنا'
	},
	'nav.origin': {
		en: 'Our Story',
		ar: 'حكايتنا'
	},
	'nav.cartAria': {
		en: 'View Cart',
		ar: 'عرض السلة'
	},
	'lang.switch': {
		en: 'العربية',
		ar: 'English'
	},
	'hero.title': {
		en: 'A taste that melts. A crunch that lingers.',
		ar: 'فخامة تذوب.. وقرمشة تأسر الحواس!'
	},
	'hero.subtitle': {
		en: "We don't make chocolate. We craft the moments around it.",
		ar: 'لا نصنع الشوكولاتة، بل نصنع اللحظة التي تحتضنها.'
	},
	'hero.subtitle2': {
		en: 'Every piece, a quiet study in balance.',
		ar: 'كل قطعة، حكاية هادئة في التوازن.'
	},
	'hero.cta': {
		en: 'Explore Collection',
		ar: 'اكتشف المجموعة'
	},
	'section.title': {
		en: 'Limited Editions',
		ar: 'إصدارات خاصة'
	},
	'section.subtitle': {
		en: 'Hand-crafted pieces with absolute precision',
		ar: 'قطع مشغولة يدوياً بدقة متناهية'
	},
	'product.add': {
		en: 'Add to Collection',
		ar: 'أضف إلى المجموعة'
	},
	'product.price': {
		en: 'EGP',
		ar: 'ج.م'
	},
	'cart.title': {
		en: 'Your Selection',
		ar: 'مختاراتك'
	},
	'cart.empty': {
		en: 'Your selection is empty',
		ar: 'لا توجد مختارات بعد'
	},
	'cart.close': {
		en: 'CLOSE',
		ar: 'إغلاق'
	},
	'cart.abandon': {
		en: 'Abandon Selection',
		ar: 'إفراغ المختارات'
	},
	'cart.total': {
		en: 'Total',
		ar: 'الإجمالي'
	},
	'cart.proceed': {
		en: 'Proceed to Delivery',
		ar: 'المتابعة للتوصيل'
	},
	'cart.qtyLabel': {
		en: 'Qty',
		ar: 'الكمية'
	},
	'checkout.title': {
		en: 'Delivery Details',
		ar: 'بيانات التوصيل'
	},
	'checkout.name': {
		en: 'Full Name',
		ar: 'الاسم بالكامل'
	},
	'checkout.mobile': {
		en: 'Mobile Number',
		ar: 'رقم الموبايل'
	},
	'checkout.address': {
		en: 'Delivery Address',
		ar: 'عنوان التوصيل'
	},
	'checkout.back': {
		en: 'Back',
		ar: 'رجوع'
	},
	'checkout.place': {
		en: 'Place Order',
		ar: 'إتمام الطلب'
	},
	'error.name': {
		en: 'Please enter your full name',
		ar: 'برجاء إدخال الاسم بالكامل'
	},
	'error.mobile': {
		en: 'Please enter a valid Egyptian mobile (e.g., 010...)',
		ar: 'برجاء إدخال رقم موبايل مصري صحيح (مثلاً 010...)'
	},
	'error.address': {
		en: 'Please provide a more detailed address',
		ar: 'برجاء إدخال عنوان أكثر تفصيلاً'
	},
	'order.success': {
		en: 'Order sent successfully to our concierge.',
		ar: 'تم إرسال طلبك بنجاح إلى خدمة العملاء.'
	},
	'order.fail': {
		en: 'Something went wrong. Please try again.',
		ar: 'حدث خطأ. برجاء المحاولة مرة أخرى.'
	},
	'footer.copyright': {
		en: '© 2026 RONIKA CHOCOLATIER | PARIS - LONDON - CAIRO',
		ar: '© 2026 رونيكا شوكلاتييه | باريس - لندن - القاهرة'
	}
} as const satisfies Record<string, Record<Locale, string>>;
