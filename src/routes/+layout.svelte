<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

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
			class="btn btn-ghost navbar-center from-primary to-secondary hidden bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:inline"
			href="/#hero">Thibault</a
		>
	</div>
	<a
		class="btn btn-ghost from-primary to-secondary bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:hidden"
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
	<div class="navbar-end">
		<a
			href="/#contact"
			class="btn btn-primary shadow-[0_4px_20px_-4px_var(--color-primary)] hover:shadow-[0_4px_28px_-2px_var(--color-primary)]"
			>Hire Me</a
		>
	</div>
</div>
<div class="bg-dot-grid flex w-full flex-col">
	{@render children()}
</div>
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
    <aside>
        <p class="text-xl font-bold">Thibault</p>
        <p class="opacity-70">Full-Stack Developer</p>
    </aside>
	<nav>
		<h6 class="footer-title">Content</h6>
		<a class="link link-hover" href="/#technologies">Technologies</a>
		<a class="link link-hover" href="/#languages">Languages</a>
		<a class="link link-hover" href="/#career">Career</a>
		<a class="link link-hover" href="/#education">Education</a>
		<a class="link link-hover" href="/#skills">Skills</a>
	</nav>
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a class="link link-hover" href="/terms">Terms of use</a>
		<a class="link link-hover" href="/privacy">Privacy policy</a>
		<a class="link link-hover" href="/cookies">Cookie policy</a>
	</nav>
</footer>
