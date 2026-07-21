<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = $state<'dracula' | 'light'>('dracula');

	onMount(() => {
		theme = (document.documentElement.getAttribute('data-theme') as 'dracula' | 'light') ?? 'dracula';
	});

	function toggleTheme() {
		theme = theme === 'dracula' ? 'light' : 'dracula';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<div class="flex min-h-dvh flex-col">
	<div
		class="navbar bg-base-100/70 border-base-300/60 sticky top-0 z-50 border-b backdrop-blur-md"
	>
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<li><a class="link link-hover" href="/#technologies">Technologies</a></li>
					<li><a class="link link-hover" href="/#languages">Languages</a></li>
					<li><a class="link link-hover" href="/#career">Career</a></li>
					<li><a class="link link-hover" href="/#education">Education</a></li>
					<li><a class="link link-hover" href="/#skills">Skills</a></li>
				</ul>
			</div>
			<a
				class="navbar-center from-primary to-secondary hidden items-center bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:inline-flex"
				href="/#hero">Thibault</a
			>
		</div>
		<a
			class="from-primary to-secondary inline-flex items-center bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:hidden"
			href="/#hero">Thibault</a
		>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/#technologies" class="link link-hover">Technologies</a></li>
				<li><a href="/#languages" class="link link-hover">Languages</a></li>
				<li><a href="/#career" class="link link-hover">Career</a></li>
				<li><a href="/#education" class="link link-hover">Education</a></li>
				<li><a href="/#skills" class="link link-hover">Skills</a></li>
			</ul>
		</div>
		<div class="navbar-end gap-2">
			<label class="swap swap-rotate btn btn-ghost btn-circle" aria-label="Toggle theme">
				<input type="checkbox" checked={theme === 'light'} onchange={toggleTheme} />
				<svg
					class="swap-on h-5 w-5 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5.64 17l-.71.71a1 1 0 001.41 1.41l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm7-7a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm10 6a1 1 0 00-1-1h-1a1 1 0 000 2h1a1 1 0 001-1zm-3.36-6.36a1 1 0 001.41-1.41l-.71-.71a1 1 0 10-1.41 1.41zM12 6a6 6 0 106 6 6.006 6.006 0 00-6-6zm5.66 13.66l.71.71a1 1 0 001.41-1.41l-.71-.71a1 1 0 10-1.41 1.41zM12 19a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm-7.71-1.66a1 1 0 000 1.41 1 1 0 001.41 0l.71-.71A1 1 0 004.95 17z"
					/>
				</svg>
				<svg
					class="swap-off h-5 w-5 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05z"
					/>
				</svg>
			</label>
			<a
				href="/#contact"
				class="btn btn-primary shadow-[0_4px_20px_-4px_var(--color-primary)] hover:shadow-[0_4px_28px_-2px_var(--color-primary)]"
				>Hire Me</a
			>
		</div>
	</div>
	<div class="bg-dot-grid flex w-full flex-1 flex-col">
		{@render children()}
	</div>
	<footer class="border-base-300/60 bg-base-200 w-full border-t">
		<div class="footer sm:footer-horizontal mx-auto max-w-6xl px-4 py-16 sm:px-8">
			<aside>
				<p
					class="from-primary to-secondary bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
				>
					Thibault
				</p>
				<p class="opacity-70">Full-Stack Developer</p>
			</aside>
			<nav>
				<h6 class="footer-title text-primary">Content</h6>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/#technologies">Technologies</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/#languages">Languages</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/#career">Career</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/#education">Education</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/#skills">Skills</a>
			</nav>
			<nav>
				<h6 class="footer-title text-primary">Legal</h6>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/terms">Terms of use</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/privacy">Privacy policy</a>
				<a class="link link-hover opacity-80 hover:opacity-100" href="/cookies">Cookie policy</a>
			</nav>
		</div>
		<div class="border-base-300/60 border-t">
			<p class="mx-auto max-w-6xl px-4 py-6 text-sm opacity-60 sm:px-8">
				© {new Date().getFullYear()} Thibault. All rights reserved.
			</p>
		</div>
	</footer>
</div>
