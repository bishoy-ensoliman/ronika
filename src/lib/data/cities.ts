import type { BilingualString } from '$lib/types';

export interface City {
	code: string;
	name: BilingualString;
}

export const cities: City[] = [
	{ code: 'cairo', name: { en: 'Cairo', ar: 'القاهرة' } },
	{ code: 'giza', name: { en: 'Giza', ar: 'الجيزة' } },
	{ code: 'alexandria', name: { en: 'Alexandria', ar: 'الإسكندرية' } },
	{ code: 'qalyubia', name: { en: 'Qalyubia', ar: 'القليوبية' } },
	{ code: 'sharqia', name: { en: 'Sharqia', ar: 'الشرقية' } },
	{ code: 'dakahlia', name: { en: 'Dakahlia', ar: 'الدقهلية' } },
	{ code: 'gharbia', name: { en: 'Gharbia', ar: 'الغربية' } },
	{ code: 'menoufia', name: { en: 'Menoufia', ar: 'المنوفية' } },
	{ code: 'beheira', name: { en: 'Beheira', ar: 'البحيرة' } },
	{ code: 'kafr-el-sheikh', name: { en: 'Kafr El Sheikh', ar: 'كفر الشيخ' } },
	{ code: 'damietta', name: { en: 'Damietta', ar: 'دمياط' } },
	{ code: 'port-said', name: { en: 'Port Said', ar: 'بورسعيد' } },
	{ code: 'ismailia', name: { en: 'Ismailia', ar: 'الإسماعيلية' } },
	{ code: 'suez', name: { en: 'Suez', ar: 'السويس' } },
	{ code: 'north-sinai', name: { en: 'North Sinai', ar: 'شمال سيناء' } },
	{ code: 'south-sinai', name: { en: 'South Sinai', ar: 'جنوب سيناء' } },
	{ code: 'red-sea', name: { en: 'Red Sea', ar: 'البحر الأحمر' } },
	{ code: 'matruh', name: { en: 'Matruh', ar: 'مطروح' } },
	{ code: 'fayoum', name: { en: 'Fayoum', ar: 'الفيوم' } },
	{ code: 'beni-suef', name: { en: 'Beni Suef', ar: 'بني سويف' } },
	{ code: 'minya', name: { en: 'Minya', ar: 'المنيا' } },
	{ code: 'asyut', name: { en: 'Asyut', ar: 'أسيوط' } },
	{ code: 'sohag', name: { en: 'Sohag', ar: 'سوهاج' } },
	{ code: 'qena', name: { en: 'Qena', ar: 'قنا' } },
	{ code: 'luxor', name: { en: 'Luxor', ar: 'الأقصر' } },
	{ code: 'aswan', name: { en: 'Aswan', ar: 'أسوان' } },
	{ code: 'new-valley', name: { en: 'New Valley', ar: 'الوادي الجديد' } }
];

export const cityCodes: ReadonlySet<string> = new Set(cities.map((c) => c.code));
