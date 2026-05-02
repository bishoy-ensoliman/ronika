export type Locale = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface BilingualString {
	en: string;
	ar: string;
}

export interface Product {
	id: string;
	name: BilingualString;
	price: number;
	image: string;
	description: BilingualString;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface OrderFormData {
	name: string;
	mobile: string;
	address: string;
}

export interface OrderRequest {
	formData: OrderFormData;
	cartItems: CartItem[];
	total: number;
	locale: Locale;
}

export interface OrderResponse {
	success: boolean;
	data?: unknown;
	error?: string;
}
