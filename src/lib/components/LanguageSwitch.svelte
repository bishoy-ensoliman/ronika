<script lang="ts">
	import { locale, t } from '$lib/i18n';
</script>

<button class="lang-switch" onclick={() => locale.toggle()} aria-label="Switch language">
	{t('lang.switch')}
</button>
