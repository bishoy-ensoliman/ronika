<script lang="ts">
	import { locale, t } from '$lib/i18n';
</script>

<button
	onclick={() => locale.toggle()}
	aria-label="Switch language"
	class="cursor-pointer border border-[--gold-soft] px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.18rem] text-[--brown] uppercase transition-colors hover:border-[--gold] hover:text-[--gold-dark]"
>
	{t('lang.switch')}
</button>
