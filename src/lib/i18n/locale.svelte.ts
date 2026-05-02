import type { Locale, Direction } from '$lib/types';
import { dictionary } from '$lib/i18n/dictionary';

// SSR renders 'en' by default; client hydrates from localStorage. Acceptable flash for v1.
let current = $state<Locale>('en');

if (typeof window !== 'undefined') {
	const stored = localStorage.getItem('ronika_locale');
	if (stored === 'en' || stored === 'ar') {
		current = stored;
	}
}

export const locale = {
	get current(): Locale {
		return current;
	},
	set(l: Locale) {
		current = l;
		localStorage.setItem('ronika_locale', l);
	},
	toggle() {
		locale.set(current === 'ar' ? 'en' : 'ar');
	},
	get dir(): Direction {
		return current === 'ar' ? 'rtl' : 'ltr';
	},
	get isRTL(): boolean {
		return current === 'ar';
	}
};

export function t(key: keyof typeof dictionary): string {
	return dictionary[key][locale.current];
}
