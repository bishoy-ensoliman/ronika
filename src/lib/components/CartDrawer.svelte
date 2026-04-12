<script lang="ts">
	import { cart } from '$lib/cart.svelte';
	import { fly, fade } from 'svelte/transition';

	// Props to control visibility
	let { isOpen = $bindable(false) } = $props();

	// State to toggle between cart list and checkout form
	let isCheckingOut = $state(false);

	// Form and Error state
	let formData = $state({ name: '', mobile: '', address: '' });
	let errors = $state({ name: '', mobile: '', address: '' });

	function validate() {
		let isValid = true;
		const newErrors = { name: '', mobile: '', address: '' };

		// Name Check
		if (formData.name.trim().length < 3) {
			newErrors.name = 'Please enter your full name';
			isValid = false;
		}

		// Egyptian Mobile Check (Regex)
		// Starts with 01, then (0, 1, 2, or 5), then 8 more digits
		const mobileRegex = /^01[0125][0-9]{8}$/;
		if (!mobileRegex.test(formData.mobile)) {
			newErrors.mobile = 'Please enter a valid Egyptian mobile (e.g., 010...)';
			isValid = false;
		}

		// Address Check
		if (formData.address.trim().length < 10) {
			newErrors.address = 'Please provide a more detailed address';
			isValid = false;
		}

		errors = newErrors;
		return isValid;
	}

	async function handleCheckout(e: Event) {
		e.preventDefault();

		if (validate()) {
			// Show a "Processing..." state if you like
			const response = await fetch('/api/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					formData: formData,
					cartItems: cart.items,
					total: cart.total
				})
			});

			const result = await response.json();

			if (result.success) {
				cart.clear();
				alert('Order sent successfully to our concierge.');
				isOpen = false;
				isCheckingOut = false;
				formData = { name: '', mobile: '', address: '' };
			} else {
				alert('Something went wrong. Please try again.');
			}
		}
	}
</script>

{#if isOpen}
	<button
		class="fixed inset-0 z-[1000] h-full w-full border-none bg-black/60 backdrop-blur-sm"
		onclick={() => {
			isOpen = false;
			isCheckingOut = false;
		}}
		transition:fade
	>x</button>

	<aside
		class="fixed top-0 right-0 z-[1001] flex h-full w-full max-w-md flex-col border-l border-[#c5a059]/20 bg-[#0d0d0d]"
		transition:fly={{ x: 400, duration: 500 }}
	>
		<div class="flex items-center justify-between border-b border-[#c5a059]/10 p-8">
			<h2 class="font-serif text-2xl tracking-[0.2rem] text-[#c5a059] uppercase">
				{isCheckingOut ? 'Delivery Details' : 'Your Selection'}
			</h2>
			<button
				onclick={() => {
					isOpen = false;
					isCheckingOut = false;
				}}
				class="text-xs tracking-widest text-[#8e7341]">CLOSE</button
			>
		</div>

		<div class="flex-1 overflow-y-auto p-8">
			{#if !isCheckingOut}
				<div class="space-y-6" in:fade>
					{#each cart.items as item (item.id)}
						<div class="flex gap-4 border-b border-[#c5a059]/5 py-2 last:border-0">
							<div
								class="h-16 w-16 border border-[#c5a059]/10 bg-cover bg-center"
								style="background-image: url({item.image})"
							></div>
							<div class="flex-1">
								<h3 class="font-serif text-sm tracking-wider uppercase">{item.name}</h3>
								<p class="text-xs text-[#c5a059]">EGP {item.price.toLocaleString()}</p>
							</div>
						</div>
					{/each}
					{#if cart.items.length > 0 && !isCheckingOut}
						<button
							onclick={() => cart.clear()}
							class="mt-4 w-full text-center text-[9px] tracking-[0.2rem] text-[#8e7341] uppercase transition-colors hover:text-[#c5a059]"
						>
							Abandon Selection
						</button>
					{/if}
				</div>
			{:else}
				<form id="checkout-form" onsubmit={handleCheckout} class="space-y-8">
					<div class="space-y-1">
						<label for="name" class="block text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>Full Name</label
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
							<span class="text-[9px] tracking-tighter text-red-800 uppercase">{errors.name}</span>
						{/if}
					</div>

					<div class="space-y-1">
						<label for="mobile" class="block text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>Mobile Number</label
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
							<span class="text-[9px] tracking-tighter text-red-800 uppercase">{errors.mobile}</span
							>
						{/if}
					</div>

					<div class="space-y-1">
						<label
							for="address"
							class="block text-[10px] tracking-[0.2rem] text-[#8e7341] uppercase"
							>Delivery Address</label
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
							<span class="text-[9px] tracking-tighter text-red-800 uppercase"
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
					<span class="text-xs tracking-widest text-[#8e7341] uppercase">Total</span>
					<span class="font-serif text-xl text-[#c5a059]">EGP {cart.total.toLocaleString()}</span>
				</div>
				<button
					onclick={() => (isCheckingOut = true)}
					disabled={cart.items.length === 0}
					class="w-full bg-[#c5a059] py-4 text-[10px] font-bold tracking-[0.3rem] text-[#0d0d0d] uppercase transition-all hover:bg-white disabled:opacity-30"
				>
					Proceed to Delivery
				</button>
			{:else}
				<div class="grid grid-cols-2 gap-4">
					<button
						onclick={() => (isCheckingOut = false)}
						class="border border-[#c5a059]/30 py-4 text-[10px] tracking-[0.2rem] text-[#c5a059] uppercase transition-all hover:bg-[#c5a059]/10"
					>
						Back
					</button>
					<button
						form="checkout-form"
						type="submit"
						class="bg-[#c5a059] py-4 text-[10px] font-bold tracking-[0.2rem] text-[#0d0d0d] uppercase transition-all hover:bg-white"
					>
						Place Order
					</button>
				</div>
			{/if}
		</div>
	</aside>
{/if}
