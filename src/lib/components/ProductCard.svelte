<script lang="ts">
	import type { Product } from '$lib/types';
	import { resolve } from '$app/paths';
	import { cart } from '$lib/cart.svelte';
	import { locale, t } from '$lib/i18n';

	interface Props {
		product: Product;
		variant?: 'horizontal' | 'compact';
	}

	let { product, variant = 'horizontal' }: Props = $props();

	let justAdded = $state(false);
	let cartItem = $derived(cart.items.find((i) => i.id === product.id));

	function addToCart() {
		cart.add(product);
		justAdded = true;
		setTimeout(() => {
			justAdded = false;
		}, 1500);
	}
</script>

{#if variant === 'compact'}
	<a
		href={resolve('/collections')}
		class="block w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-[--gold-soft] bg-[--bg-card] transition-shadow hover:shadow-lg"
	>
		<div
			class="aspect-[4/3] w-full bg-cover bg-center"
			style="background-image: url({product.image})"
		></div>
		<div class="px-4 py-3">
			<h3 class="font-serif text-sm tracking-wide text-[--brown]">
				{product.name[locale.current]}
			</h3>
			<p class="mt-1 text-xs font-medium tracking-wider text-[--gold-dark]">
				{t('product.price')}
				{product.price.toLocaleString()}
			</p>
		</div>
	</a>
{:else}
	<article
		class="grid grid-cols-[40%_1fr] gap-4 overflow-hidden rounded-xl border border-[--gold-soft] bg-[--bg-card] transition-shadow hover:shadow-md"
	>
		<div
			class="aspect-square w-full bg-cover bg-center"
			style="background-image: url({product.image})"
		></div>

		<div class="flex flex-col justify-between p-5 ltr:pr-6 rtl:pl-6">
			<div>
				<h3 class="font-serif text-lg leading-tight text-[--brown] md:text-xl">
					{product.name[locale.current]}
				</h3>
				<p class="mt-2 line-clamp-3 text-xs leading-relaxed text-[--text-muted]">
					<!-- Trusted authored HTML — not user input -->
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html product.description[locale.current]}
				</p>
				<p class="mt-3 font-medium tracking-wider text-[--gold-dark]">
					{t('product.price')}
					{product.price.toLocaleString()}
				</p>
			</div>

			<button
				onclick={addToCart}
				class="mt-4 w-fit cursor-pointer rounded-md px-5 py-2 text-[0.65rem] font-bold tracking-[0.2rem] text-white uppercase transition-colors {justAdded
					? 'bg-emerald-600'
					: 'bg-[--gold] hover:bg-[--gold-dark]'}"
			>
				{#if justAdded}
					{t('product.added')}
				{:else if cartItem}
					{t('product.add')} · {cartItem.quantity}
				{:else}
					{t('product.add')}
				{/if}
			</button>
		</div>
	</article>
{/if}
