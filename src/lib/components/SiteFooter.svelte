<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<footer class="bg-white px-4 pb-8 md:px-8">
	<div class="mx-auto flex max-w-5xl items-center justify-between border-t border-[--bg-soft] py-5">
		<div
			class="flex gap-5 text-[0.65rem] font-medium tracking-[0.15rem] text-[--text-muted] uppercase"
		>
			<button type="button" class="cursor-pointer transition-colors hover:text-[--brown]"
				>{t('footer.contactUs')}</button
			>
			<button type="button" class="cursor-pointer transition-colors hover:text-[--brown]"
				>{t('footer.shipping')}</button
			>
			<button type="button" class="cursor-pointer transition-colors hover:text-[--brown]"
				>{t('footer.terms')}</button
			>
		</div>

		<div class="flex gap-4 text-[--text-muted]">
			<a
				href="https://www.facebook.com/profile.php?id=61577090160453"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook"
				class="transition-colors hover:text-[--brown]"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.93 8.44-9.93Z"
					/>
				</svg>
			</a>
			<a
				href="https://www.instagram.com/ronikachocolate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw="
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
				class="transition-colors hover:text-[--brown]"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.32 4.14.62c-.79.31-1.46.72-2.13 1.39C1.34 2.68.93 3.35.62 4.14c-.3.76-.49 1.64-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.25 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.25 2.91-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.49-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.25-2.15-.55-2.91-.31-.79-.72-1.46-1.39-2.13C21.32 1.34 20.65.93 19.86.62c-.76-.3-1.64-.49-2.91-.55C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"
					/>
				</svg>
			</a>
		</div>
	</div>
</footer>
