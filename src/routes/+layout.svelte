<script lang="ts">
	import '../app.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { locale } from '$lib/i18n';
	import CartDrawer from '$lib/components/CartDrawer.svelte';

	let { children } = $props();

	$effect(() => {
		document.documentElement.lang = locale.current;
		document.documentElement.dir = locale.dir;
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<CartDrawer />
{@render children()}
