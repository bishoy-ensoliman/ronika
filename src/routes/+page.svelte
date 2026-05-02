<script lang="ts">
	import { resolve } from '$app/paths';
	import { locale, t } from '$lib/i18n';
	import landing from '$lib/assets/landing.jpeg';
	import symphony from '$lib/assets/symphony.jpeg';
</script>

<!-- Full-bleed hero -->
<section
	class="relative w-full"
	style="min-height: 56vh; background-image: url({landing}); background-size: cover; background-position: center;"
>
	<div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
		{#key locale.current}
			<h1 class="max-w-xl font-serif text-4xl leading-snug text-[--brown] md:text-5xl lg:text-6xl">
				{t('hero.title')}
			</h1>
			<a
				href={resolve('/collections')}
				class="mt-8 inline-block bg-[--brown-dark] px-10 py-3 text-[0.65rem] font-medium tracking-[0.3rem] text-white uppercase transition-opacity hover:opacity-90"
			>
				{t('hero.shopNow')} →
			</a>
		{/key}
	</div>
</section>

<!-- Below-fold: Our Heritage (2-column on desktop) -->
<div class="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
	<!-- Our Heritage: text -->
	<div
		class="flex flex-col justify-center border-b border-[--bg-soft] px-8 py-8 md:border-r md:border-b-0 md:px-10 md:py-10"
	>
		{#key locale.current}
			<h2 class="mb-4 text-[0.6rem] font-bold tracking-[0.3rem] text-[--brown] uppercase">
				{t('home.heritageTitle')}
			</h2>
			<p class="text-xs leading-relaxed text-[--text-muted]">
				{t('home.heritageShort')}
			</p>
		{/key}
	</div>

	<!-- Our Heritage: image -->
	<div
		class="min-h-[220px]"
		style="background-image: url({symphony}); background-size: cover; background-position: center;"
	></div>
</div>
