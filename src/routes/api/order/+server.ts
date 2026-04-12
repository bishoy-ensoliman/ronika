import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST({ request }) {
    const { formData, cartItems, total } = await request.json();

    const itemsHtml = cartItems.map((item: any) => 
        `<div style="margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
            <strong style="color: #1a0f0a;">${item.name}</strong><br>
            <span style="color: #8e7341; font-size: 12px;">Qty: ${item.quantity} — EGP ${(item.price * item.quantity).toLocaleString()}</span>
        </div>`
    ).join('');

    try {
        const { data, error } = await resend.emails.send({
            from: 'RONIKA Orders <onboarding@resend.dev>', // Update to your domain later (e.g. orders@ronika.com)
            to: [env.ORDER_DESTINATION],
            subject: `New Luxury Order: ${formData.name}`,
            html: `
                <div style="font-family: 'Georgia', serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #c5a059;">
                    <h1 style="text-align: center; color: #c5a059; letter-spacing: 4px;">RONIKA</h1>
                    <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 2px; color: #8e7341; text-align: center;">New Order Request</p>
                    
                    <div style="margin-top: 30px;">
                        <p><strong>Customer:</strong> ${formData.name}</p>
                        <p><strong>Mobile:</strong> ${formData.mobile}</p>
                        <p><strong>Address:</strong> ${formData.address}</p>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background-color: #fdfaf4;">
                        <h3 style="color: #1a0f0a; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">Selection</h3>
                        ${itemsHtml}
                        <p style="font-size: 18px; margin-top: 20px;"><strong>Total: EGP ${total.toLocaleString()}</strong></p>
                    </div>
                    
                    <footer style="margin-top: 40px; text-align: center; font-size: 10px; color: #999;">
                        RONIKA CHOCOLATIER | AUTOMATED ORDER SYSTEM
                    </footer>
                </div>
            `
        });

        if (error) {
            // This is the gold mine of info:
            console.error('RESEND ERROR DETAILS:', error); 
            return json({ success: false, error: error.message }, { status: 400 });
        }

        return json({ success: true, data });
    } catch (err) {
        console.error('SERVER CRASH:', err);
        return json({ success: false, error: err.message }, { status: 500 });
    }
}