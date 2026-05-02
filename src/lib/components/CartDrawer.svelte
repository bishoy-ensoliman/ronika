<script lang="ts">
	import { cart } from '$lib/cart.svelte';
	import { locale, t } from '$lib/i18n';
	import { cartUi } from '$lib/cartUi.svelte';
	import { fly, fade } from 'svelte/transition';

	// State to toggle between cart list and checkout form
	let isCheckingOut = $state(false);

	// Inline order status banner state (replaces alert())
	let statusMessage = $state<string | null>(null);
	let statusIsSuccess = $state(false);

	// Form and Error state
	let formData = $state({ name: '', mobile: '', address: '' });
	let errors = $state({ name: '', mobile: '', address: '' });

	function closeDrawer() {
		cartUi.close();
		isCheckingOut = false;
	}

	function showStatus(message: string, success: boolean) {
		statusMessage = message;
		statusIsSuccess = success;
		setTimeout(() => {
			statusMessage = null;
		}, 3000);
	}

	function validate() {
		let isValid = true;
		const newErrors = { name: '', mobile: '', address: '' };

		// Name Check
		if (formData.name.trim().length < 3) {
			newErrors.name = t('error.name');
			isValid = false;
		}

		// Egyptian Mobile Check (Regex)
		// Starts with 01, then (0, 1, 2, or 5), then 8 more digits
		const mobileRegex = /^01[0125][0-9]{8}$/;
		if (!mobileRegex.test(formData.mobile)) {
			newErrors.mobile = t('error.mobile');
			isValid = false;
		}

		// Address Check
		if (formData.address.trim().length < 10) {
			newErrors.address = t('error.address');
			isValid = false;
		}

		errors = newErrors;
		return isValid;
	}

	async function handleCheckout(e: Event) {
		e.preventDefault();

		if (validate()) {
			const response = await fetch('/api/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					formData: formData,
					cartItems: cart.items,
					total: cart.total,
					locale: locale.current
				})
			});

			const result = (await response.json()) as { success: boolean; error?: string };

			if (result.success) {
				cart.clear();
				closeDrawer();
				formData = { name: '', mobile: '', address: '' };
				showStatus(t('order.success'), true);
			} else {
				showStatus(t('order.fail'), false);
			}
		}
	}
</script>

{#if statusMessage}
	<div class="fixed bottom-6 left-1/2 z-[1100] -translate-x-1/2" transition:fade>
		<div
			class="rounded px-6 py-3 text-sm font-medium tracking-wide shadow-lg"
			class:bg-green-900={statusIsSuccess}
			class:bg-red-900={!statusIsSuccess}
		>
			{statusMessage}
		</div>
	</div>
{/if}

{#if cartUi.isOpen}
	<button
		aria-label={t('cart.close')}
		class="fixed inset-0 z-[1000] h-full w-full border-none bg-black/60 backdrop-blur-sm"
		onclick={closeDrawer}
		transition:fade
	></button>

	<aside
		class="fixed top-0 z-[1001] flex h-full w-full max-w-md flex-col border-[#c5a059]/20 bg-[#0d0d0d] ltr:right-0 ltr:border-l rtl:left-0 rtl:border-r"
		transition:fly={{ x: locale.isRTL ? -400 : 400, duration: 500 }}
	>
		<div class="flex items-center justify-between border-b border-[#c5a059]/10 p-8">
			<h2 class="font-serif text-2xl tracking-[0.2rem] text-[#c5a059] uppercase">
				{isCheckingOut ? t('checkout.title') : t('cart.title')}
			</h2>
			<button onclick={closeDrawer} class="text-xs tracking-widest text-[#8e7341]"
				>{t('cart.close')}</button
			>
		</div>

		<div class="flex-1 overflow-y-auto p-8">
			{#if !isCheckingOut}
				<div class="space-y-6" in:fade>
					{#if cart.items.length === 0}
						<p class="text-center text-sm text-[#8e7341]">{t('cart.empty')}</p>
					{/if}
					{#each cart.items as item (item.id)}
						<div class="flex gap-4 border-b border-[#c5a059]/5 py-2 last:border-0">
							<div
								class="h-16 w-16 border border-[#c5a059]/10 bg-cover bg-center"
								style="background-image: url({item.image})"
							></div>
							<div class="flex-1">
								<h3 class="font-serif text-sm tracking-wider uppercase">
									{item.name[locale.current]}
								</h3>
								<p class="text-xs text-[#c5a059]">
									{t('product.price')}
									{item.price.toLocaleString()}
								</p>
								<p class="text-xs text-[#8e7341]">{t('cart.qtyLabel')}: {item.quantity}</p>
							</div>
						</div>
					{/each}
					{#if cart.items.length > 0}
						<button
							onclick={() => cart.clear()}
							class="mt-4 w-full text-center text-[9px] tracking-[0.2rem] text-[#8e7341] uppercase transition-colors hover:text-[#c5a059]"
						>
							{t('cart.abandon')}
						</button>
					{/if}
				</div>
			{:else}
				<form id="checkout-form" onsubmit={handleCheckout} class="space-y-8">
					<div class="space-y-1">
						<label
							for="name"
							class="block text-start text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>{t('checkout.name')}</label
						>
						<input
							bind:value={formData.name}
							type="text"
							id="name"
							class="w-full border-b bg-transparent {errors.name
								? 'border-red-900'
								: 'border-[#c5a059]/30'} py-2 transition-colors outline-none focus:border-[#c5a059]"
						/>
						{#if errors.name}
							<span class="text-start text-[9px] tracking-tighter text-red-800 uppercase"
								>{errors.name}</span
							>
						{/if}
					</div>

					<div class="space-y-1">
						<label
							for="mobile"
							class="block text-start text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>{t('checkout.mobile')}</label
						>
						<input
							bind:value={formData.mobile}
							type="tel"
							id="mobile"
							placeholder="01..."
							class="w-full border-b bg-transparent {errors.mobile
								? 'border-red-900'
								: 'border-[#c5a059]/30'} py-2 transition-colors outline-none focus:border-[#c5a059]"
						/>
						{#if errors.mobile}
							<span class="text-start text-[9px] tracking-tighter text-red-800 uppercase"
								>{errors.mobile}</span
							>
						{/if}
					</div>

					<div class="space-y-1">
						<label
							for="address"
							class="block text-start text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>{t('checkout.address')}</label
						>
						<textarea
							bind:value={formData.address}
							id="address"
							rows="2"
							class="w-full border-b bg-transparent {errors.address
								? 'border-red-900'
								: 'border-[#c5a059]/30'} resize-none py-2 transition-colors outline-none focus:border-[#c5a059]"
						></textarea>
						{#if errors.address}
							<span class="text-start text-[9px] tracking-tighter text-red-800 uppercase"
								>{errors.address}</span
							>
						{/if}
					</div>
				</form>
			{/if}
		</div>

		<div class="border-t border-[#c5a059]/10 bg-[#1a0f0a]/30 p-8">
			{#if !isCheckingOut}
				<div class="mb-6 flex items-center justify-between">
					<span class="text-xs tracking-widest text-[#8e7341] uppercase">{t('cart.total')}</span>
					<span class="font-serif text-xl text-[#c5a059]"
						>{t('product.price')} {cart.total.toLocaleString()}</span
					>
				</div>
				<button
					onclick={() => (isCheckingOut = true)}
					disabled={cart.items.length === 0}
					class="w-full bg-[#c5a059] py-4 text-[10px] font-bold tracking-[0.3rem] text-[#0d0d0d] uppercase transition-all hover:bg-white disabled:opacity-30"
				>
					{t('cart.proceed')}
				</button>
			{:else}
				<div class="grid grid-cols-2 gap-4">
					<button
						onclick={() => (isCheckingOut = false)}
						class="border border-[#c5a059]/30 py-4 text-[10px] tracking-[0.2rem] text-[#c5a059] uppercase transition-all hover:bg-[#c5a059]/10"
					>
						{t('checkout.back')}
					</button>
					<button
						form="checkout-form"
						type="submit"
						class="bg-[#c5a059] py-4 text-[10px] font-bold tracking-[0.2rem] text-[#0d0d0d] uppercase transition-all hover:bg-white"
					>
						{t('checkout.place')}
					</button>
				</div>
			{/if}
		</div>
	</aside>
{/if}
