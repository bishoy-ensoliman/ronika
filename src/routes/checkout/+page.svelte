<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { cart } from '$lib/cart.svelte';
	import { locale, t } from '$lib/i18n';
	import { cities } from '$lib/data/cities';
	import OrderSummary from '$lib/components/OrderSummary.svelte';
	import type { CheckoutFormData } from '$lib/types';

	let formData = $state<CheckoutFormData>({
		name: '',
		email: '',
		mobile: '',
		city: '',
		area: '',
		street: '',
		buildingApt: '',
		instructions: ''
	});

	let errors = $state<Record<keyof CheckoutFormData, string>>({
		name: '',
		email: '',
		mobile: '',
		city: '',
		area: '',
		street: '',
		buildingApt: '',
		instructions: ''
	});

	let submitting = $state(false);
	let statusMessage = $state<string | null>(null);
	let statusIsSuccess = $state(false);

	function showStatus(message: string, success: boolean) {
		statusMessage = message;
		statusIsSuccess = success;
		setTimeout(() => {
			statusMessage = null;
		}, 3000);
	}

	function validate(): boolean {
		const next: Record<keyof CheckoutFormData, string> = {
			name: '',
			email: '',
			mobile: '',
			city: '',
			area: '',
			street: '',
			buildingApt: '',
			instructions: ''
		};
		let valid = true;

		if (formData.name.trim().length < 3) {
			next.name = t('error.name');
			valid = false;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
			next.email = t('error.email');
			valid = false;
		}

		if (!/^01[0125][0-9]{8}$/.test(formData.mobile.trim())) {
			next.mobile = t('error.mobile');
			valid = false;
		}

		if (!formData.city) {
			next.city = t('error.city');
			valid = false;
		}

		if (formData.area.trim().length < 2) {
			next.area = t('error.area');
			valid = false;
		}

		if (formData.street.trim().length < 2) {
			next.street = t('error.street');
			valid = false;
		}

		if (formData.buildingApt.trim().length < 2) {
			next.buildingApt = t('error.buildingApt');
			valid = false;
		}

		errors = next;
		return valid;
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (cart.items.length === 0) return;
		if (!validate()) return;

		submitting = true;
		try {
			const response = await fetch('/api/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					formData,
					cartItems: cart.items,
					total: cart.total,
					locale: locale.current
				})
			});

			const result = (await response.json()) as { success: boolean; error?: string };

			if (result.success) {
				cart.clear();
				showStatus(t('order.success'), true);
				setTimeout(() => goto(resolve('/')), 1200);
			} else {
				showStatus(t('order.fail'), false);
			}
		} catch {
			showStatus(t('order.fail'), false);
		} finally {
			submitting = false;
		}
	}

	const inputClass =
		'w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-[--brown-dark] placeholder:text-[--text-muted]/60 outline-none transition-colors focus:border-[--gold] focus:ring-2 focus:ring-[--gold]/20';
	const labelClass = 'mb-1.5 block text-[12px] font-medium tracking-[0.06em] text-[--brown-dark]/70 uppercase';
</script>

{#if statusMessage}
	<div class="fixed bottom-6 left-1/2 z-[1100] -translate-x-1/2" transition:fade>
		<div
			class="rounded-md px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg"
			class:bg-emerald-700={statusIsSuccess}
			class:bg-red-700={!statusIsSuccess}
		>
			{statusMessage}
		</div>
	</div>
{/if}

<div class="relative isolate min-h-screen px-5 py-14 md:px-10">
	<!-- Ornamental SVG flourish background -->
	<svg
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.07]"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<pattern id="flourish" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
				<circle cx="40" cy="40" r="1.5" fill="currentColor" class="text-[--gold-dark]" />
				<path
					d="M40 20 C30 28 28 36 40 40 C52 44 50 52 40 60 C30 52 28 44 40 40 C52 36 50 28 40 20Z"
					fill="none"
					stroke="currentColor"
					stroke-width="0.8"
					class="text-[--gold-dark]"
				/>
				<circle cx="40" cy="20" r="1" fill="currentColor" class="text-[--gold-dark]" />
				<circle cx="40" cy="60" r="1" fill="currentColor" class="text-[--gold-dark]" />
				<circle cx="20" cy="40" r="1" fill="currentColor" class="text-[--gold-dark]" />
				<circle cx="60" cy="40" r="1" fill="currentColor" class="text-[--gold-dark]" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#flourish)" />
	</svg>

	<h1 class="sr-only">{t('checkout.title')}</h1>

	{#if cart.items.length === 0}
		<div
			class="mx-auto max-w-lg rounded-2xl bg-white p-10 text-center shadow-[0_8px_32px_-8px_rgba(61,40,18,0.14)] ring-1 ring-[--gold-soft]/50"
		>
			<p class="text-sm text-[--text-muted]">{t('cart.empty')}</p>
			<a
				href={resolve('/collections')}
				class="mt-6 inline-block rounded-md bg-[--gold] px-6 py-3 text-[0.7rem] font-bold tracking-[0.3rem] text-white uppercase transition-colors hover:bg-[--gold-dark]"
			>
				{t('cart.continueShopping')}
			</a>
		</div>
	{:else}
		<div class="mx-auto max-w-6xl">
			<div class="grid items-start gap-5 md:grid-cols-[1.7fr_1fr]">
				<!-- Delivery form card -->
				<div
					class="rounded-2xl bg-white p-7 shadow-[0_8px_32px_-8px_rgba(61,40,18,0.14)] ring-1 ring-[--gold-soft]/50 md:p-9"
				>
					<form id="checkout-form" onsubmit={handleSubmit} novalidate>
						<h2 class="font-serif text-2xl text-[--brown-dark] md:text-3xl">
							{t('checkout.deliveryDetails')}
						</h2>

						<div class="mt-7 grid gap-4 md:grid-cols-2">
							<!-- Full Name — col-span-2 -->
							<div class="md:col-span-2">
								<label for="name" class={labelClass}>
									{t('checkout.fullName')}
								</label>
								<input
									id="name"
									type="text"
									bind:value={formData.name}
									class="{inputClass} {errors.name ? 'border-red-400' : 'border-[--gold-soft]/80'}"
								/>
								{#if errors.name}
									<p class="mt-1 text-xs text-red-600">{errors.name}</p>
								{/if}
							</div>

							<!-- Mobile -->
							<div>
								<label for="mobile" class={labelClass}>
									{t('checkout.mobileNumber')}
								</label>
								<div
									class="flex w-full overflow-hidden rounded-md border bg-white {errors.mobile
										? 'border-red-400'
										: 'border-[--gold-soft]/80'} focus-within:border-[--gold] focus-within:ring-2 focus-within:ring-[--gold]/20"
								>
									<span
										class="flex shrink-0 items-center gap-1.5 border-[--gold-soft]/80 bg-[--bg-soft] px-3 text-sm text-[--brown] ltr:border-r rtl:border-l"
									>
										<span aria-hidden="true">🇪🇬</span>
										<span class="tabular-nums text-xs">+20</span>
									</span>
									<input
										id="mobile"
										type="tel"
										inputmode="numeric"
										placeholder="01XXXXXXXXX"
										bind:value={formData.mobile}
										class="w-full bg-transparent px-3.5 py-2.5 text-sm text-[--brown-dark] outline-none placeholder:text-[--text-muted]/60"
									/>
								</div>
								{#if errors.mobile}
									<p class="mt-1 text-xs text-red-600">{errors.mobile}</p>
								{/if}
							</div>

							<!-- Email -->
							<div>
								<label for="email" class={labelClass}>
									{t('checkout.email')}
								</label>
								<input
									id="email"
									type="email"
									bind:value={formData.email}
									class="{inputClass} {errors.email ? 'border-red-400' : 'border-[--gold-soft]/80'}"
								/>
								{#if errors.email}
									<p class="mt-1 text-xs text-red-600">{errors.email}</p>
								{/if}
							</div>

							<!-- City -->
							<div>
								<label for="city" class={labelClass}>
									{t('checkout.city')}
								</label>
								<select
									id="city"
									bind:value={formData.city}
									class="{inputClass} {errors.city ? 'border-red-400' : 'border-[--gold-soft]/80'}"
								>
									<option value="">{t('checkout.cityPlaceholder')}</option>
									{#each cities as city (city.code)}
										<option value={city.code}>{city.name[locale.current]}</option>
									{/each}
								</select>
								{#if errors.city}
									<p class="mt-1 text-xs text-red-600">{errors.city}</p>
								{/if}
							</div>

							<!-- Area -->
							<div>
								<label for="area" class={labelClass}>
									{t('checkout.area')}
								</label>
								<input
									id="area"
									type="text"
									bind:value={formData.area}
									class="{inputClass} {errors.area ? 'border-red-400' : 'border-[--gold-soft]/80'}"
								/>
								{#if errors.area}
									<p class="mt-1 text-xs text-red-600">{errors.area}</p>
								{/if}
							</div>

							<!-- Street -->
							<div>
								<label for="street" class={labelClass}>
									{t('checkout.street')}
								</label>
								<input
									id="street"
									type="text"
									bind:value={formData.street}
									class="{inputClass} {errors.street ? 'border-red-400' : 'border-[--gold-soft]/80'}"
								/>
								{#if errors.street}
									<p class="mt-1 text-xs text-red-600">{errors.street}</p>
								{/if}
							</div>

							<!-- Building / Apt — col-span-2 -->
							<div class="md:col-span-2">
								<label for="buildingApt" class={labelClass}>
									{t('checkout.buildingApt')}
								</label>
								<input
									id="buildingApt"
									type="text"
									bind:value={formData.buildingApt}
									class="{inputClass} {errors.buildingApt
										? 'border-red-400'
										: 'border-[--gold-soft]/80'}"
								/>
								{#if errors.buildingApt}
									<p class="mt-1 text-xs text-red-600">{errors.buildingApt}</p>
								{/if}
							</div>

							<!-- Instructions — col-span-2 -->
							<div class="md:col-span-2">
								<label for="instructions" class={labelClass}>
									{t('checkout.instructions')}
								</label>
								<textarea
									id="instructions"
									rows="3"
									placeholder={t('checkout.instructionsPlaceholder')}
									bind:value={formData.instructions}
									class="{inputClass} resize-none border-[--gold-soft]/80"
								></textarea>
							</div>
						</div>
					</form>
				</div>

				<!-- Order summary card -->
				<div
					class="rounded-2xl bg-white p-7 shadow-[0_8px_32px_-8px_rgba(61,40,18,0.14)] ring-1 ring-[--gold-soft]/50 md:p-8"
				>
					<OrderSummary mode="checkout" formId="checkout-form" disabled={submitting} />
				</div>
			</div>
		</div>
	{/if}
</div>
