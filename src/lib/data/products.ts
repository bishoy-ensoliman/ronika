import type { Product } from '$lib/types';
import royalcrown from '$lib/assets/royalcrown.jpeg';
import elite from '$lib/assets/elite.jpeg';
import symphony from '$lib/assets/symphony.jpeg';
import velvet from '$lib/assets/velvet.jpeg';

export const products: Product[] = [
	{
		id: 'royalcrown',
		name: {
			en: 'The Royal Crown Collection 👑',
			ar: 'كوليكشن التاج الملكي 👑'
		},
		price: 899,
		image: royalcrown,
		// Trusted authored HTML — not user input
		description: {
			en: 'For lovers of luxury and unparalleled taste, we present the <em>Royal Crown Collection</em> from Ronika Chocolate ✨<br/>57 pieces of luxury.. in one box! 👑✨<br/>A magical blend that takes you on an exceptional tasting journey; the richness of smooth chocolate that melts from the first bite, embracing the crunch of four types of carefully roasted premium nuts (walnuts, almonds, cashews, and hazelnuts). Every piece is crafted with love to elevate your mood and honor your precious occasions. 🍫🌰',
			ar: "لعشاق الفخامة والطعم اللي ملوش مثيل.. نقدم لكم كوليكشن 'التاج الملكي' من Ronika Chocolate ✨<br/>57 قطعة من الفخامة.. في علبة واحدة! 👑✨<br/>مزيج ساحر بياخدك في رحلة تذوق استثنائية؛ نعومة الشوكولاتة الغنية اللي بتدوب من أول قطمة، متحضنة بقرمشة أربع أنواع من المكسرات الفاخرة المحمصة بعناية (عين جمل، لوز، كاجو، وبندق). كل قطعة معمولة بحب عشان تعدل مزاجك وتليق بمناسباتك الغالية. 🍫🌰"
		}
	},
	{
		id: 'velvet',
		name: {
			en: 'Velvet Harmony Collection ✨🤍🖤',
			ar: 'مجموعة التناغم المخملي ✨🤍🖤'
		},
		price: 750,
		image: velvet,
		// Trusted authored HTML — not user input
		description: {
			en: "A world of harmony.. uniting the magic of chocolate and the power of nuts! 🍫🥜<br/><br/>Enjoy a unique experience with Ronika Chocolate's new <em>Velvet Harmony</em> collection. A rich box containing 64 pieces designed to take you on a journey between two worlds:<br/><br/>⚪ White Chocolate World: With its rich creamy taste that melts gently, with a nut mix (almonds, cashews, hazelnuts, and walnuts) that adds a touch of enchanting crunch.<br/>⚫ Dark Chocolate World: For lovers of authentic and bold taste, with its rich concentration and benefits combined with the finest carefully roasted nuts.<br/><br/>64 moments of pure happiness in one box, perfect for family gatherings, elegant gifts, or to treat yourself after a long day. A perfect balance between the sweetness of white chocolate and the luxury of dark chocolate with irresistible nutty crunch.<br/><br/>🎁 Ronika Chocolate.. the blend that satisfies all the senses.",
			ar: "عالم من التناغم.. يجمع بين سحر الشوكولاتة وقوة المكسرات! 🍫🥜<br/><br/>استمتع بتجربة فريدة مع مجموعة 'التناغم المخملي' الجديدة من Ronika Chocolate. علبة غنية تضم 64 قطعة صُممت لتأخذك في رحلة بين عالمين:<br/><br/>⚪ عالم الشوكولاتة البيضاء: بطعمها الكريمي الغني الذي يذوب بلطف، مع ميكس مكسرات (لوز، كاجو، بندق، وعين جمل) يضيف لمسة من القرمشة الساحرة.<br/>⚫ عالم الشوكولاتة الداكنة: لعشاق الطعم الأصلي والقوي، بتركيزها الغني وفوائدها التي تجتمع مع أجود حبات المكسرات المحمصة بعناية.<br/><br/>64 لحظة من السعادة الخالصة في علبة واحدة، مثالية لتجمعاتكم العائلية، هداياكم الراقية، أو لتدلل بها نفسك بعد يوم طويل. توازن مثالي بين حلاوة الوايت شوكلت وفخامة الدارك شوكلت مع قرمشة المكسرات التي لا تُقاوم.<br/><br/>🎁 Ronika Chocolate.. المزيج الذي يرضي جميع الحواس."
		}
	},
	{
		id: 'elite',
		name: {
			en: 'Elite Edition Collection ✨🍫',
			ar: 'إصدار النخبة ✨🍫'
		},
		price: 450,
		image: elite,
		// Trusted authored HTML — not user input
		description: {
			en: "12 pieces of intense happiness.. where indulgence meets luxury! 👑<br/><br/>We present the <em>Elite Edition</em> from Ronika Chocolate. A box designed especially for those who seek distinction in every bite.<br/><br/>Imagine a legendary blend combining the richness of smooth Kinder cream that melts in the mouth, with the crunch of the finest roasted nuts. 12 pieces of luxury chocolate, each one a masterpiece covered with golden touches that reflect the refinement of your choice.<br/><br/>Whether it's a reward for yourself after a long day, or a gift expressing your appreciation for someone dear, the <em>Elite Edition</em> is the perfect address for refined taste.<br/><br/>Ronika Chocolate..<br/> Because you deserve the elite ✨",
			ar: "12 قطعة من السعادة المكثفة.. حيث يلتقي الدلال بالفخامة! 👑<br/><br/>نقدم لكم 'إصدار النخبة' من Ronika Chocolate. علبة صُممت خصيصاً لمن يبحثون عن التميز في كل قطمة.<br/><br/>تخيل مزيجاً أسطورياً يجمع بين نعومة كريمة الكيندر الغنية التي تذوب في الفم، مع قرمشة أفخر أنواع المكسرات المحمصة. 12 قطعة من الشوكولاتة الفاخرة، كل واحدة منها هي تحفة فنية مغطاة بلمسات ذهبية تعكس رقي اختيارك.<br/><br/>سواء كانت مكافأة لنفسك بعد يوم طويل، أو هدية تعبر بها عن تقديرك لشخص غالي، 'إصدار النخبة' هو العنوان المثالي للذوق الرفيع.<br/><br/><br/>Ronika Chocolate..<br/> لأنك تستحق النخبة ✨"
		}
	},
	{
		id: 'symphony-01',
		name: {
			en: 'The Flavor Symphony (Lotus) 🎶🍫',
			ar: 'سيمفونية النكهات (لوتس) 🎶🍫'
		},
		price: 750,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces of happiness.. flavors that captivate the senses! ✨<br/><br/>Because you deserve an extraordinary tasting experience, we brought together at Ronika Chocolate the most famous three world flavors in one massive collection. 64 pieces of luxury chocolate filled with the richest ingredients:<br/><br/>Original Lotus Butter: For lovers of caramelized taste with the famous biscuit crunch.<br/><br/>Luxury Pistachio: A rich and creamy taste that takes you to another world of opulence.<br/><br/>Enchanting Kinder Cream: The indulgence that melts slowly to give you indescribable happiness.<br/><br/>Each piece is carefully wrapped to suit your happy gatherings or to be the finest gift for your loved ones.<br/>Ronika Chocolate.. the taste that is never forgotten.',
			ar: '64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.'
		}
	},
	{
		id: 'symphony-02',
		name: {
			en: 'The Flavor Symphony (Kinder) 🎶🍫',
			ar: 'سيمفونية النكهات (كيندر) 🎶🍫'
		},
		price: 850,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces of happiness.. flavors that captivate the senses! ✨<br/><br/>Because you deserve an extraordinary tasting experience, we brought together at Ronika Chocolate the most famous three world flavors in one massive collection. 64 pieces of luxury chocolate filled with the richest ingredients:<br/><br/>Original Lotus Butter: For lovers of caramelized taste with the famous biscuit crunch.<br/><br/>Luxury Pistachio: A rich and creamy taste that takes you to another world of opulence.<br/><br/>Enchanting Kinder Cream: The indulgence that melts slowly to give you indescribable happiness.<br/><br/>Each piece is carefully wrapped to suit your happy gatherings or to be the finest gift for your loved ones.<br/>Ronika Chocolate.. the taste that is never forgotten.',
			ar: '64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.'
		}
	},
	{
		id: 'symphony-03',
		name: {
			en: 'The Flavor Symphony (Pistachio) 🎶🍫',
			ar: 'سيمفونية النكهات (فستق) 🎶🍫'
		},
		price: 999,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces of happiness.. flavors that captivate the senses! ✨<br/><br/>Because you deserve an extraordinary tasting experience, we brought together at Ronika Chocolate the most famous three world flavors in one massive collection. 64 pieces of luxury chocolate filled with the richest ingredients:<br/><br/>Original Lotus Butter: For lovers of caramelized taste with the famous biscuit crunch.<br/><br/>Luxury Pistachio: A rich and creamy taste that takes you to another world of opulence.<br/><br/>Enchanting Kinder Cream: The indulgence that melts slowly to give you indescribable happiness.<br/><br/>Each piece is carefully wrapped to suit your happy gatherings or to be the finest gift for your loved ones.<br/>Ronika Chocolate.. the taste that is never forgotten.',
			ar: '64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.'
		}
	},
	{
		id: 'symphony-04',
		name: {
			en: 'The Flavor Symphony (Mix) 🎶🍫',
			ar: 'سيمفونية النكهات (مكس) 🎶🍫'
		},
		price: 950,
		image: symphony,
		// Trusted authored HTML — not user input
		description: {
			en: '64 pieces of happiness.. flavors that captivate the senses! ✨<br/><br/>Because you deserve an extraordinary tasting experience, we brought together at Ronika Chocolate the most famous three world flavors in one massive collection. 64 pieces of luxury chocolate filled with the richest ingredients:<br/><br/>Original Lotus Butter: For lovers of caramelized taste with the famous biscuit crunch.<br/><br/>Luxury Pistachio: A rich and creamy taste that takes you to another world of opulence.<br/><br/>Enchanting Kinder Cream: The indulgence that melts slowly to give you indescribable happiness.<br/><br/>Each piece is carefully wrapped to suit your happy gatherings or to be the finest gift for your loved ones.<br/>Ronika Chocolate.. the taste that is never forgotten.',
			ar: '64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.'
		}
	}
];
