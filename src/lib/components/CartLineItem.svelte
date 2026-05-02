<script lang="ts">
	import type { CartItem } from '$lib/types';
	import { cart } from '$lib/cart.svelte';
	import { locale, t } from '$lib/i18n';

	interface Props {
		item: CartItem;
	}

	let { item }: Props = $props();
</script>

<article
	class="grid grid-cols-[120px_1fr_auto] gap-4 rounded-xl border border-[--gold-soft] bg-[--bg-card] p-4 md:grid-cols-[140px_1fr_auto] md:gap-6 md:p-5"
>
	<div
		class="aspect-square w-full rounded-lg bg-cover bg-center"
		style="background-image: url({item.image})"
	></div>

	<div class="flex flex-col justify-between">
		<div>
			<h3 class="font-serif text-base text-[--brown] md:text-lg">
				{item.name[locale.current]}
			</h3>
			<p class="mt-1 line-clamp-2 text-xs text-[--text-muted]">
				<!-- Trusted authored HTML — not user input -->
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html item.description[locale.current]}
			</p>
		</div>

		<div class="mt-3 flex items-center gap-4">
			<div class="inline-flex items-center rounded-md border border-[--gold-soft]">
				<button
					type="button"
					onclick={() => cart.reduce(item.id)}
					aria-label="Decrease quantity"
					class="cursor-pointer px-3 py-1 text-[--brown] transition-colors hover:bg-[--bg-soft]"
				>
					−
				</button>
				<span class="min-w-[2rem] text-center text-sm tabular-nums">{item.quantity}</span>
				<button
					type="button"
					onclick={() => cart.add(item)}
					aria-label="Increase quantity"
					class="cursor-pointer px-3 py-1 text-[--brown] transition-colors hover:bg-[--bg-soft]"
				>
					+
				</button>
			</div>

			<button
				type="button"
				onclick={() => cart.remove(item.id)}
				class="cursor-pointer text-[0.7rem] tracking-wider text-[--text-muted] underline-offset-2 transition-colors hover:text-[--gold-dark] hover:underline"
			>
				{t('cart.remove')}
			</button>
		</div>
	</div>

	<div class="flex flex-col items-end justify-start">
		<span class="font-medium tracking-wider text-[--gold-dark]">
			{t('product.price')}
			{(item.price * item.quantity).toLocaleString()}
		</span>
		{#if item.quantity > 1}
			<span class="mt-1 text-[0.65rem] text-[--text-muted]">
				{t('product.price')}
				{item.price.toLocaleString()} × {item.quantity}
			</span>
		{/if}
	</div>
</article>
