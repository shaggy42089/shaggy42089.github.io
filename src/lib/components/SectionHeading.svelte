<script lang="ts">
	import { reveal } from '$lib/reveal';

	let { kicker, title, subtitle }: { kicker: string; title: string; subtitle: string } =
		$props();
</script>

<div class="mx-auto max-w-2xl text-center" use:reveal>
	<span class="text-primary font-mono text-xs font-semibold tracking-[0.3em] uppercase">
		{kicker}
	</span>
	<h2 class="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
	<p class="mt-3 opacity-70">{subtitle}</p>
</div>
