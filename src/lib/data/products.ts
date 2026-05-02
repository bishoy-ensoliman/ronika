import type { Product } from '$lib/types';
import royalcrown from '$lib/assets/royalcrown.jpeg';
import elite from '$lib/assets/elite.jpeg';
import symphony from '$lib/assets/symphony.jpeg';
import velvet from '$lib/assets/velvet.jpeg';

export const products: Product[] = [
	{
		id: 'royalcrown',
		name: {
			en: 'The Royal Crown Collection',
			ar: 'كوليكشن التاج الملكي'
		},
		price: 899,
		image: royalcrown,
		// Trusted authored HTML — not user input
		description: {
			en: '57 pieces in one box. <em>Royal Crown</em> layers silken chocolate over four roasted nuts — walnut, almond, cashew, hazelnut — for occasions that deserve a coronation.',
			ar: '57 قطعة في علبة واحدة. <em>التاج الملكي</em> يجمع نعومة الشوكولاتة مع قرمشة أربع مكسرات محمصة: عين جمل، لوز، كاجو، وبندق — لمناسبات تستحق التتويج.'
		}
	},
	{
		id: 'velvet',
		name: {
			en: 'The Velvet Harmony Collection',
			ar: 'مجموعة التناغم المخملي'
		},
		price: 750,
		image: velvet,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces, two worlds. <em>Velvet Harmony</em> pairs creamy white chocolate with deep dark — both wrapped around almond, cashew, hazelnut, and walnut. Half indulgence, half intensity. Perfectly balanced.',
			ar: '64 قطعة، عالمان. <em>التناغم المخملي</em> يجمع كريمية الشوكولاتة البيضاء مع عمق الداكنة، وفي قلب كل قطعة لوز وكاجو وبندق وعين جمل. نصف دلال، نصف قوة، توازن مثالي.'
		}
	},
	{
		id: 'elite',
		name: {
			en: 'The Elite Edition Collection',
			ar: 'إصدار النخبة'
		},
		price: 450,
		image: elite,
		// Trusted authored HTML — not user input
		description: {
			en: 'Twelve pieces of <em>Elite Edition</em>. Smooth Kinder cream meets the crunch of roasted nuts, finished in gold leaf. A reward, a gift, a quiet moment — refined either way.',
			ar: '12 قطعة من <em>إصدار النخبة</em>. كريمة كيندر الناعمة تلتقي بقرمشة المكسرات المحمصة، بلمسة من ورق الذهب. مكافأة، هدية، أو لحظة هدوء — رقي في كل الأحوال.'
		}
	},
	{
		id: 'symphony-01',
		name: {
			en: 'The Flavor Symphony — Lotus',
			ar: 'سيمفونية النكهات — لوتس'
		},
		price: 750,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces, one symphony. <em>Lotus</em> takes the lead — caramelized butter and the unmistakable biscuit crunch, set against three world flavors.',
			ar: '64 قطعة، سيمفونية واحدة. <em>لوتس</em> هو البطل — زبدة مكرملة وقرمشة البسكويت الشهيرة، على خلفية ثلاث نكهات عالمية.'
		}
	},
	{
		id: 'symphony-02',
		name: {
			en: 'The Flavor Symphony — Kinder',
			ar: 'سيمفونية النكهات — كيندر'
		},
		price: 850,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces, one symphony. <em>Kinder</em> takes the lead — slow-melting cream that turns each bite into something quiet and indulgent.',
			ar: '64 قطعة، سيمفونية واحدة. <em>كيندر</em> هو البطل — كريمة تذوب ببطء وتحوّل كل قطمة إلى دلال هادئ.'
		}
	},
	{
		id: 'symphony-03',
		name: {
			en: 'The Flavor Symphony — Pistachio',
			ar: 'سيمفونية النكهات — فستق'
		},
		price: 999,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces, one symphony. <em>Pistachio</em> takes the lead — rich, creamy, and unmistakably opulent in every piece.',
			ar: '64 قطعة، سيمفونية واحدة. <em>الفستق</em> هو البطل — غني، كريمي، وفخامته واضحة في كل قطعة.'
		}
	},
	{
		id: 'symphony-04',
		name: {
			en: 'The Flavor Symphony — Mix',
			ar: 'سيمفونية النكهات — ميكس'
		},
		price: 950,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces, one symphony. The full <em>Mix</em> — caramelized Lotus, rich pistachio, and slow-melting Kinder cream — together in a single box.',
			ar: '64 قطعة، سيمفونية واحدة. الـ<em>ميكس</em> الكامل — لوتس مكرمل، فستق غني، وكريمة كيندر تذوب ببطء — في علبة واحدة.'
		}
	}
];
