<script lang="ts">
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { cart } from '$lib/cart.svelte';
	import { cartUi } from '$lib/cartUi.svelte';
	import { locale, t } from '$lib/i18n';
	import { products } from '$lib/data/products';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
</script>

<div class="site-wrapper">
	<nav class="fixed z-50 flex w-full items-center justify-between p-8">
		<div class="logo">RONIKA</div>
		<div class="nav-right">
			<div class="nav-links">
				<a href="#collections">{t('nav.collections')}</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href="/origin">{t('nav.origin')}</a>
			</div>
			<div class="flex items-center gap-6">
				<button
					onclick={() => cartUi.open()}
					class="group relative p-2 outline-none"
					aria-label={t('nav.cartAria')}
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
							class="absolute -top-1 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] ring-1 ring-[#0d0d0d] ltr:-right-1 ltr:translate-x-1/2 rtl:-left-1 rtl:-translate-x-1/2"
						>
							{cart.count}
						</div>
					{/if}
				</button>
			</div>
			<LanguageSwitch />
		</div>
	</nav>

	<section class="hero">
		{#key locale.current}
			<h1 class="hero-title">{t('hero.title')}</h1>
			<p class="hero-subtitle max-w-2xl">{t('hero.subtitle')}</p>
			<p class="hero-subtitle max-w-2xl">{t('hero.subtitle2')}</p>
			<a href="#collections" class="btn-gold hero-btn">{t('hero.cta')}</a>
		{/key}
	</section>

	<section class="section" id="collections">
		<div class="section-header">
			<h2>{t('section.title')}</h2>
			<p class="section-desc">{t('section.subtitle')}</p>
		</div>

		<div class="grid">
			{#each products as product (product.id)}
				<div class="product-card">
					<div class="product-image" style="background-image: url({product.image})"></div>
					<h3>{product.name[locale.current]}</h3>
					<br />
					<!-- Trusted authored HTML — not user input -->
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					<p>{@html product.description[locale.current]}</p>
					<br />
					<p class="price">{t('product.price')} {product.price}</p>

					<button
						class="btn-gold border border-[#c5a059] px-8 py-3 text-[#c5a059] transition-all hover:bg-[#c5a059] hover:text-black"
						onclick={() => cart.add(product)}
					>
						{t('product.add')}
					</button>
				</div>
			{/each}
		</div>
	</section>

	<footer>{t('footer.copyright')}</footer>
</div>
