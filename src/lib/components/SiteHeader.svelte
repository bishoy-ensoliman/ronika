<script lang="ts">
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { resolve } from '$app/paths';
	import { cart } from '$lib/cart.svelte';
	import { t } from '$lib/i18n';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
</script>

<header
	class="sticky top-0 z-50 border-b border-[--gold-soft] bg-[--bg-card]/95 backdrop-blur supports-[backdrop-filter]:bg-[--bg-card]/85"
>
	<nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 md:px-8">
		<a
			href={resolve('/')}
			class="font-serif text-2xl font-medium tracking-[0.4rem] text-[--brown] uppercase md:text-3xl"
		>
			Ronika
		</a>

		<div class="flex items-center gap-4 md:gap-6">
			<a
				href={resolve('/collections')}
				class="hidden text-[0.7rem] font-medium tracking-[0.18rem] text-[--brown] uppercase transition-colors hover:text-[--gold-dark] md:inline"
			>
				{t('nav.collections')}
			</a>
			<a
				href={resolve('/our-story')}
				class="hidden text-[0.7rem] font-medium tracking-[0.18rem] text-[--brown] uppercase transition-colors hover:text-[--gold-dark] md:inline"
			>
				{t('nav.story')}
			</a>

			<a
				href={resolve('/cart')}
				aria-label={t('nav.cartAria')}
				class="group relative inline-flex p-2 outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 stroke-[--brown] transition-colors duration-300 group-hover:stroke-[--gold-dark]"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>

				{#if cart.count > 0}
					<span
						in:scale={{ duration: 600, delay: 50, opacity: 0, start: 0, easing: elasticOut }}
						class="absolute -top-1 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[--gold] text-[10px] font-bold text-white shadow ring-1 ring-[--gold-soft] ltr:-right-1 ltr:translate-x-1/2 rtl:-left-1 rtl:-translate-x-1/2"
					>
						{cart.count}
					</span>
				{/if}
			</a>

			<LanguageSwitch />
		</div>
	</nav>
</header>
