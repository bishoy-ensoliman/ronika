<script lang="ts">
	import { scale } from 'svelte/transition';
	import { cart } from '$lib/cart.svelte';
	import { elasticOut } from 'svelte/easing';
	import CartDrawer from '$lib/components/CartDrawer.svelte';
	import royalcrown from '$lib/assets/royalcrown.jpeg';
	import elite from '$lib/assets/elite.jpeg';
	import symphony from '$lib/assets/symphony.jpeg';
	import velvet from '$lib/assets/velvet.jpeg';

	let isCartOpen = $state(false);

	// State management using Svelte 5 Runes
	let currentLang = $state('ar');

	const translations = {
		ar: {
			'nav-collections': 'إصداراتنا',
			'nav-origin': 'حكايتنا',
			'hero-title': 'فخامة تذوب.. وقرمشة تأسر الحواس!',
			'hero-subtitle':
				'في Ronika Chocolate، لا نصنع مجرد شوكولاتة، بل نصمم لحظات من السعادة الخالصة. تخيل قطعة من الشوكولاتة البلجيكية الغنية، تخفي في قلبها حبة كاملة من (عين الجمل الملكي، أو الكاجو المحمص، أو اللوز المقرمش) ',
			'hero-subtitle-1':
				'كل قطعة هي حكاية من التوازن المثالي بين نُعومة الشوكولاتة وقوة المكسرات الفاخرة.',
			'btn-explore': 'اكتشف المجموعة',
			'section-title': 'إصدارات خاصة',
			'section-subtitle': 'قطع مشغولة يدوياً بدقة متناهية',
			'btn-purchase': 'اقتنيها الآن',
			'quote-title': 'إبداع',
			'quote-text': '"نحن لا نصنع مجرد شوكولاتة.. نحن نصيغ المشاعر في قوالب فنية."',
			switch: 'English'
		},
		en: {
			'nav-collections': 'Collections',
			'nav-origin': 'Our Story',
			'hero-title': 'A luxurious taste that melts away... and a crunch that captivates the senses!',
			'hero-subtitle':
				"At Ronika Chocolate, we don't just make chocolate; we design moments of pure joy. Imagine a piece of rich Belgian chocolate, concealing a whole nut (such as a royal walnut, roasted cashew, or crunchy almond) at its heart.",
			'hero-subtitle-1':
				'Each piece is a tale of the perfect balance between the smoothness of chocolate and the strength of sumptuous nuts.',
			'btn-explore': 'Explore Collection',
			'section-title': 'Limited Editions',
			'section-subtitle': 'Hand-crafted pieces with absolute precision',
			'btn-purchase': 'Purchase Now',
			'quote-title': "The Chef 's Touch",
			'quote-text': '"We do not make simple chocolate.. We mold emotions into artistic forms."',
			switch: 'العربية'
		}
	};

	// Derived translation object
	let t = $derived(translations[currentLang]);

	const toggleLanguage = () => {
		currentLang = currentLang === 'ar' ? 'en' : 'ar';
	};

	// Example product data
	const products = [
		{
			id: 'royalcrown',
			name: 'The Royal Crown Collection 👑',
			price: 899,
			description:
				"لعشاق الفخامة والطعم اللي ملوش مثيل.. نقدم لكم كوليكشن 'التاج الملكي' من Ronika Chocolate ✨<br/>57 قطعة من الفخامة.. في علبة واحدة! 👑✨<br/>مزيج ساحر بياخدك في رحلة تذوق استثنائية؛ نعومة الشوكولاتة الغنية اللي بتدوب من أول قطمة، متحضنة بقرمشة أربع أنواع من المكسرات الفاخرة المحمصة بعناية (عين جمل، لوز، كاجو، وبندق). كل قطعة معمولة بحب عشان تعدل مزاجك وتليق بمناسباتك الغالية. 🍫🌰",
			image: royalcrown
		},
		{
			id: 'velvet',
			name: 'Velvet Harmony Collection ✨🤍🖤',
			price: 750,
			description:
				"عالم من التناغم.. يجمع بين سحر الشوكولاتة وقوة المكسرات! 🍫🥜<br/><br/>استمتع بتجربة فريدة مع مجموعة 'التناغم المخملي' الجديدة من Ronika Chocolate. علبة غنية تضم 64 قطعة صُممت لتأخذك في رحلة بين عالمين:<br/><br/>⚪ عالم الشوكولاتة البيضاء: بطعمها الكريمي الغني الذي يذوب بلطف، مع ميكس مكسرات (لوز، كاجو، بندق، وعين جمل) يضيف لمسة من القرمشة الساحرة.<br/>⚫ عالم الشوكولاتة الداكنة: لعشاق الطعم الأصلي والقوي، بتركيزها الغني وفوائدها التي تجتمع مع أجود حبات المكسرات المحمصة بعناية.<br/><br/>64 لحظة من السعادة الخالصة في علبة واحدة، مثالية لتجمعاتكم العائلية، هداياكم الراقية، أو لتدلل بها نفسك بعد يوم طويل. توازن مثالي بين حلاوة الوايت شوكلت وفخامة الدارك شوكلت مع قرمشة المكسرات التي لا تُقاوم.<br/><br/>🎁 Ronika Chocolate.. المزيج الذي يرضي جميع الحواس.",
			image: velvet
		},
		{
			id: 'elite',
			name: 'Elite Edition Collection ✨🍫',
			price: 450,
			description:
				"12 قطعة من السعادة المكثفة.. حيث يلتقي الدلال بالفخامة! 👑<br/><br/>نقدم لكم 'إصدار النخبة' من Ronika Chocolate. علبة صُممت خصيصاً لمن يبحثون عن التميز في كل قطمة.<br/><br/>تخيل مزيجاً أسطورياً يجمع بين نعومة كريمة الكيندر الغنية التي تذوب في الفم، مع قرمشة أفخر أنواع المكسرات المحمصة. 12 قطعة من الشوكولاتة الفاخرة، كل واحدة منها هي تحفة فنية مغطاة بلمسات ذهبية تعكس رقي اختيارك.<br/><br/>سواء كانت مكافأة لنفسك بعد يوم طويل، أو هدية تعبر بها عن تقديرك لشخص غالي، 'إصدار النخبة' هو العنوان المثالي للذوق الرفيع.<br/><br/><br/>Ronika Chocolate..<br/> لأنك تستحق النخبة ✨",
			image: elite
		},
		{
			id: 'symphony-01',
			name: 'The Flavor Symphony (Lotus) 🎶🍫',
			price: 750,
			description:
				'64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.',
			image: symphony
		},
		{
			id: 'symphony-02',
			name: 'The Flavor Symphony (Kinder) 🎶🍫',
			price: 850,
			description:
				'64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.',
			image: symphony
		},
		{
			id: 'symphony-03',
			name: 'The Flavor Symphony (Pistachio) 🎶🍫',
			price: 999,
			description:
				'64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.',
			image: symphony
		},
		{
			id: 'symphony-04',
			name: 'The Flavor Symphony (Mix) 🎶🍫',
			price: 950,
			description:
				'64 قطعة من السعادة.. نكهات تأسر الحواس! ✨<br/><br/>لأنك تستحق تجربة تذوق غير عادية، جمعنا لك في Ronika Chocolate أشهر ثلاث نكهات عالمية في كوليكشن واحد ضخم. 64 قطعة من الشوكولاتة الفاخرة المحشوة بأغنى المكونات:<br/><br/>زبدة اللوتس الأصلية: لعشاق الطعم المكرمل مع قرمشة البسكويت الشهيرة.<br/><br/>البيستاشيو (الفستق) الفاخر: طعم غني وكريمي يأخذك إلى عالم آخر من الفخامة.<br/><br/>كريمة الكيندر الساحرة: الدلال الذي يذوب ببطء ليمنحك سعادة لا تُوصف.<br/><br/>كل قطعة مغلفة بعناية لتناسب تجمعاتكم السعيدة أو لتكون الهدية الأرقى لمن تحبون.<br/>Ronika Chocolate.. المذاق الذي لا يُنسى.',
			image: symphony
		}
	];
</script>

<div class="site-wrapper" dir={currentLang === 'ar' ? 'rtl' : 'ltr'} lang={currentLang}>
	<CartDrawer bind:isOpen={isCartOpen} />
	<nav class="fixed z-50 flex w-full items-center justify-between p-8">
		<div class="logo">RONIKA</div>
		<div class="nav-right">
			<div class="nav-links">
				<a href="#collections">{t['nav-collections']}</a>
				<a href="/origin">{t['nav-origin']}</a>
			</div>
			<div class="flex items-center gap-6">
				<button
					onclick={() => (isCartOpen = true)}
					class="group relative p-2 outline-none"
					aria-label="View Cart"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7 stroke-[#c5a059] transition-colors duration-300 group-hover:stroke-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
						/>
					</svg>

					{#if cart.count > 0}
						<div
							in:scale={{ duration: 600, delay: 50, opacity: 0, start: 0, easing: elasticOut }}
							class="absolute -top-1 -right-1 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] ring-1 ring-[#0d0d0d]"
						>
							{cart.count}
						</div>
					{/if}
				</button>
			</div>
			<button class="lang-switch" onclick={toggleLanguage}>{t.switch}</button>
		</div>
	</nav>

	<section class="hero">
		{#key currentLang}
			<h1 class="hero-title">{t['hero-title']}</h1>
			<p class="hero-subtitle max-w-2xl">{t['hero-subtitle']}</p>
			<p class="hero-subtitle max-w-2xl">{t['hero-subtitle-1']}</p>
			<a href="#collections" class="btn-gold hero-btn">{t['btn-explore']}</a>
		{/key}
	</section>

	<section class="section" id="collections">
		<div class="section-header">
			<h2>{t['section-title']}</h2>
			<p class="section-desc">{t['section-subtitle']}</p>
		</div>

		<div class="grid">
			{#each products as product}
				<div class="product-card">
					<div class="product-image" style="background-image: url({product.image})"></div>
					<h3>{product.name}</h3>
					<br />
					<p>{@html product.description}</p>
					<br />
					<p class="price">EGP {product.price}</p>

					<button
						class="btn-gold border border-[#c5a059] px-8 py-3 text-[#c5a059] transition-all hover:bg-[#c5a059] hover:text-black"
						onclick={() => cart.add(product)}
					>
						Add to Collection
					</button>
				</div>
			{/each}
		</div>
	</section>

	<footer>&copy; 2026 RONIKA CHOCOLATIER | PARIS - LONDON - CAIRO</footer>
</div>
