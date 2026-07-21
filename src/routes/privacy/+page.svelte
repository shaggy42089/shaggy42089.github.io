<script lang="ts">
	const lastUpdated = 'July 21, 2026';
</script>

<svelte:head>
	<title>Privacy Policy — Thibault</title>
</svelte:head>

<section class="w-full">
	<div class="mx-auto max-w-3xl px-4 py-16 sm:px-8 md:py-24">
		<a href="/" class="link link-hover text-primary text-sm">&larr; Back to home</a>

		<h1 class="mt-6 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
		<p class="mt-2 text-sm opacity-60">Last updated: {lastUpdated}</p>

		<div class="mt-8 flex flex-col gap-6 text-sm leading-relaxed opacity-90 sm:text-base">
			<p>
				This site is a static personal portfolio. It does not run any server-side code, does
				not use analytics or tracking scripts, and does not store any personal data.
			</p>

			<div>
				<h2 class="mb-2 text-lg font-semibold">Contact form</h2>
				<p>
					The contact form on this site does not submit data to a server. Instead, it opens
					your own email client with a pre-filled message addressed to Thibault. The subject
					and message you type are only ever sent if you choose to send that email — nothing
					is collected or stored by this site.
				</p>
			</div>

			<div>
				<h2 class="mb-2 text-lg font-semibold">Cookies and local storage</h2>
				<p>
					This site does not use cookies. See the
					<a href="/cookies" class="link link-primary">Cookie Policy</a> for details.
				</p>
			</div>

			<div>
				<h2 class="mb-2 text-lg font-semibold">Third parties</h2>
				<p>
					This site is not connected to any third-party analytics, advertising, or tracking
					services.
				</p>
			</div>

			<div>
				<h2 class="mb-2 text-lg font-semibold">Contact</h2>
				<p>Questions about this policy can be sent via the contact form on the homepage.</p>
			</div>
		</div>
	</div>
</section>
