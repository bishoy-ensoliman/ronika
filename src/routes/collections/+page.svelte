<script lang="ts">
	import { t } from '$lib/i18n';
	import { products } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<section class="mx-auto max-w-7xl px-6 py-16 md:px-10">
	<header class="text-center">
		<h1 class="font-serif text-3xl tracking-[0.2rem] text-[--brown] uppercase md:text-4xl">
			{t('collections.title')}
		</h1>
		<p class="mt-3 text-sm text-[--text-muted]">
			{t('collections.subtitle')}
		</p>
	</header>

	<div class="mt-12 grid gap-6 md:grid-cols-2">
		{#each products as product (product.id)}
			<ProductCard {product} variant="horizontal" />
		{/each}
	</div>
</section>
