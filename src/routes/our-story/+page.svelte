<script lang="ts">
	import { t } from '$lib/i18n';
	import royalcrown from '$lib/assets/royalcrown.jpeg';
</script>

<section class="mx-auto max-w-3xl px-6 py-16 md:px-10">
	<header class="text-center">
		<h1 class="font-serif text-3xl tracking-[0.2rem] text-[--brown] uppercase md:text-4xl">
			{t('story.title')}
		</h1>
	</header>

	<div
		class="mt-10 aspect-[16/9] w-full rounded-2xl bg-cover bg-center"
		style="background-image: url({royalcrown})"
	></div>

	<div class="mt-10 space-y-6 text-base leading-relaxed text-[--brown-dark]">
		<p>{t('story.body1')}</p>
		<p>{t('story.body2')}</p>
		<p>{t('story.body3')}</p>
	</div>
</section>
