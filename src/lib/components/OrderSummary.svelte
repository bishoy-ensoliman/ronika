<script lang="ts">
	import { resolve } from '$app/paths';
	import { cart } from '$lib/cart.svelte';
	import { locale, t } from '$lib/i18n';

	interface Props {
		mode: 'cart' | 'checkout';
		formId?: string;
		disabled?: boolean;
	}

	let { mode, formId, disabled = false }: Props = $props();
</script>

<aside
	class="md:sticky md:top-24 md:self-start"
	class:rounded-xl={mode === 'cart'}
	class:border={mode === 'cart'}
	class:border-[--gold-soft]={mode === 'cart'}
	class:bg-[--bg-soft]={mode === 'cart'}
	class:p-6={mode === 'cart'}
>
	<h2
		class="font-serif text-[--brown]"
		class:text-xl={mode === 'cart'}
		class:tracking-[0.2rem]={mode === 'cart'}
		class:uppercase={mode === 'cart'}
		class:text-2xl={mode === 'checkout'}
		class:text-[--brown-dark]={mode === 'checkout'}
		class:md:text-3xl={mode === 'checkout'}
	>
		{mode === 'cart' ? t('cart.summaryTitle') : t('checkout.yourOrder')}
	</h2>

	<div class="mt-5 space-y-4">
		{#if mode === 'checkout'}
			{#each cart.items as item (item.id)}
				<div class="flex items-start gap-3 border-b border-[--gold-soft] pb-3 last:border-0">
					<div
						class="h-14 w-14 shrink-0 rounded-md bg-cover bg-center"
						style="background-image: url({item.image})"
					></div>
					<div class="flex-1 text-xs">
						<p class="font-serif text-sm text-[--brown]">{item.name[locale.current]}</p>
						<p class="text-[--text-muted]">
							{t('cart.qty')}: {item.quantity}
						</p>
					</div>
					<span class="ms-auto text-sm font-medium tracking-wider text-[--gold-dark]">
						{t('product.price')}
						{(item.price * item.quantity).toLocaleString()}
					</span>
				</div>
			{/each}

			<!-- Subtotal row -->
			<div class="flex items-center justify-between border-t border-[--gold-soft] pt-4">
				<span class="text-sm text-[--brown-dark]/70">
					{t('cart.subtotal')}
				</span>
				<span class="text-sm font-medium text-[--brown-dark]">
					{t('product.price')}
					{cart.total.toLocaleString()}
				</span>
			</div>

			<!-- Delivery row -->
			<div class="flex items-center justify-between">
				<span class="text-sm text-[--brown-dark]/70">
					{t('checkout.delivery')}
				</span>
				<span class="text-sm font-medium text-[--gold-dark]">
					{t('checkout.deliveryFree')}
				</span>
			</div>
		{/if}

		<!-- Total row -->
		<div
			class="flex items-center justify-between border-t border-[--gold-soft] pt-4"
			class:mt-4={mode === 'cart'}
		>
			<span class="font-serif text-base font-semibold tracking-[0.15rem] text-[--brown] uppercase">
				{t('cart.total')}
			</span>
			<span class="font-serif text-2xl text-[--gold-dark]">
				{t('product.price')}
				{cart.total.toLocaleString()}
			</span>
		</div>
	</div>

	{#if mode === 'cart'}
		<a
			href={resolve('/checkout')}
			class="mt-6 block w-full rounded-md bg-[--gold] py-3 text-center text-[0.7rem] font-bold tracking-[0.3rem] text-white uppercase transition-colors hover:bg-[--gold-dark] aria-disabled:pointer-events-none aria-disabled:opacity-40"
			aria-disabled={cart.items.length === 0}
			tabindex={cart.items.length === 0 ? -1 : 0}
		>
			{t('cart.proceedTo')}
		</a>
	{:else}
		<button
			type="submit"
			form={formId}
			{disabled}
			class="mt-6 w-full cursor-pointer rounded-md bg-[--gold] py-3 text-[0.7rem] font-bold tracking-[0.3rem] text-white uppercase transition-colors hover:bg-[--gold-dark] disabled:cursor-not-allowed disabled:opacity-40"
		>
			{t('checkout.placeOrder')}
		</button>

		<!-- Trust badges -->
		<div class="mt-6 grid grid-cols-3 gap-2 text-center">
			<!-- Medal / Quality -->
			<div class="flex flex-col items-center gap-1.5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-[--gold]"
					aria-hidden="true"
				>
					<circle cx="12" cy="8" r="6" />
					<path
						d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
					/>
				</svg>
				<span class="text-[10px] tracking-[0.15rem] text-[--text-muted] uppercase">
					{t('checkout.trust.quality')}
				</span>
			</div>

			<!-- Shield check / Trusted -->
			<div class="flex flex-col items-center gap-1.5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-[--gold]"
					aria-hidden="true"
				>
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
					<polyline points="9 12 11 14 15 10" />
				</svg>
				<span class="text-[10px] tracking-[0.15rem] text-[--text-muted] uppercase">
					{t('checkout.trust.trusted')}
				</span>
			</div>

			<!-- Lock / Secure Payment -->
			<div class="flex flex-col items-center gap-1.5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-[--gold]"
					aria-hidden="true"
				>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 10 0v4" />
					<circle cx="12" cy="16" r="1" />
				</svg>
				<span class="text-[10px] tracking-[0.15rem] text-[--text-muted] uppercase">
					{t('checkout.trust.secure')}
				</span>
			</div>
		</div>
	{/if}
</aside>
