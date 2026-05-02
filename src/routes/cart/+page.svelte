<script lang="ts">
	import { resolve } from '$app/paths';
	import { cart } from '$lib/cart.svelte';
	import { t } from '$lib/i18n';
	import CartLineItem from '$lib/components/CartLineItem.svelte';
	import OrderSummary from '$lib/components/OrderSummary.svelte';
</script>

<section class="mx-auto max-w-7xl px-6 py-16 md:px-10">
	<h1 class="font-serif text-3xl tracking-[0.2rem] text-[--brown] uppercase md:text-4xl">
		{t('cart.title')}
	</h1>

	{#if cart.items.length === 0}
		<div class="mt-16 rounded-xl border border-[--gold-soft] bg-[--bg-card] p-10 text-center">
			<p class="text-sm text-[--text-muted]">{t('cart.empty')}</p>
			<a
				href={resolve('/collections')}
				class="mt-6 inline-block rounded-md bg-[--gold] px-6 py-3 text-[0.7rem] font-bold tracking-[0.3rem] text-white uppercase transition-colors hover:bg-[--gold-dark]"
			>
				{t('cart.continueShopping')}
			</a>
		</div>
	{:else}
		<div class="mt-10 grid gap-8 md:grid-cols-3">
			<div class="space-y-4 md:col-span-2">
				{#each cart.items as item (item.id)}
					<CartLineItem {item} />
				{/each}
			</div>
			<div class="md:col-span-1">
				<OrderSummary mode="cart" />
			</div>
		</div>
	{/if}
</section>
