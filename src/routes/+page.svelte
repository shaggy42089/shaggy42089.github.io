<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/reveal';

	// --- Edit the data below to update the site content ---
	// Sections render in this order: Technologies, Languages, Career, Education, Skills, Contact.

	const hero = {
		name: 'Thibault',
		title: 'Full-Stack Developer',
		tagline:
			'I build clean and reliable applications, fast.'
	};

	const linkedinUrl = 'https://www.linkedin.com/in/your-profile';

	type Level = 'expert' | 'advanced' | 'intermediate' | 'familiar' | 'beginner';

	const levelDot: Record<Level, string> = {
		expert: 'bg-[oklch(85%_0.17_95)]',
		advanced: 'bg-error',
		intermediate: 'bg-primary',
		familiar: 'bg-[oklch(65%_0.18_260)]',
		beginner: 'bg-info'
	};

	const levelLabel: Record<Level, string> = {
		expert: 'Expert',
		advanced: 'Advanced',
		intermediate: 'Intermediate',
		familiar: 'Familiar',
		beginner: 'Beginner'
	};

	const levelRank: Record<Level, number> = {
		expert: 0,
		advanced: 1,
		intermediate: 2,
		familiar: 3,
		beginner: 4
	};

	const technologies: { category: string; items: { name: string; level: Level }[] }[] = [
		{
			category: 'Frontend',
			items: [
                { name: 'VueJS', level: 'expert' },
                { name: 'Svelte / SvelteKit', level: 'advanced' },
				{ name: 'TypeScript', level: 'advanced' },
				{ name: 'Tailwind CSS', level: 'intermediate' },
                { name: 'Daisy UI', level: 'intermediate' },
                { name: 'NextJS', level: 'familiar' },
                { name: 'NuxtJS', level: 'intermediate' },
                { name: 'Express', level: 'intermediate' },
                { name: 'Bootstrap', level: 'advanced' },
				{ name: 'React', level: 'familiar' },
				{ name: 'Angular', level: 'familiar' }
			]
		},
		{
			category: 'Backend',
			items: [
				{ name: 'Laravel', level: 'expert' },
				{ name: 'Node.js', level: 'advanced' },
				{ name: 'PHP', level: 'advanced' },
				{ name: 'REST APIs', level: 'advanced' },
				{ name: 'GraphQL', level: 'beginner' }
			]
		},
		{
			category: 'Databases',
			items: [
				{ name: 'PostgreSQL', level: 'advanced' },
				{ name: 'MySQL', level: 'advanced' },
				{ name: 'MongoDB', level: 'intermediate' },
				{ name: 'Sequelize', level: 'intermediate' },
				{ name: 'SQLite', level: 'advanced' },
				{ name: 'SQL Server', level: 'intermediate' }
			]
		},
		{
			category: 'Tools & DevOps',
			items: [
				{ name: 'Git', level: 'expert' },
				{ name: 'Docker', level: 'advanced' },
				{ name: 'CI/CD', level: 'intermediate' },
				{ name: 'Kubernetes', level: 'intermediate' },
				{ name: 'Jenkins', level: 'familiar' },
				{ name: 'Linux', level: 'advanced' }
			]
		},
        {
			category: 'Scripting',
			items: [
				{ name: 'Bash', level: 'advanced' },
				{ name: 'Python', level: 'advanced' },
				{ name: 'Go', level: 'beginner' }
			]
		},
        {
			category: 'Software Development',
			items: [
				{ name: 'Java', level: 'advanced' },
				{ name: 'C', level: 'advanced' },
				{ name: 'LuaScript', level: 'intermediate' },
                { name: 'Rust', level: 'beginner' },
			]
		},
	];

	const languages = [
		{ flag: '🇫🇷', name: 'French', level: 'Native', value: 100 },
		{ flag: '🇬🇧', name: 'English', level: 'Fluent (C1)', value: 90 },
		{ flag: '🇪🇸', name: 'Spanish', level: 'Intermediate (B1)', value: 55 }
	];

	const trips = [
        { flag: '🇮🇪', place: 'Ireland', year: '2025', duration: '10 days' },
        { flag: '🇺🇸', place: 'Miami, USA', year: '2025', duration: '1 week' },
        { flag: '🇻🇳', place: 'Vietnam', year: '2022', duration: '2 months' },
		{ flag: '🇺🇸', place: 'California, USA', year: '2017', duration: '1 month' },
		{ flag: '🇨🇦', place: 'Québec, Canada', year: '2016', duration: '1 month' },
		{ flag: '🇳🇱', place: 'Amsterdam, NL', year: '2015', duration: '1 week' },
		{ flag: '🇮🇹', place: 'Rome, Italy', year: '2013', duration: '5 days' },
		{ flag: '🇬🇧', place: 'London, UK', year: '2013', duration: '1 week' }
	];

	const career = [
		{
			title: 'Software Engineer',
			company: 'Chapsvision Group',
			period: '2024 - Present',
			description:
				'Here, at Chapsvision, i work full time for a client in the luxury clothing industry',
			technologies: ['NodeJS', 'VueJS', 'Laravel', 'MySQL'] as string[],
			current: true
		},
		{
            title: 'Software Engineer Intern',
			company: 'Capgemini Lille',
			period: '2023 - 6 months',
			description: 'During this Internship, i worked full time for the LVMH group. I coded NodeJS cartridges for salesforce',
			technologies: ['Node.js', 'Salesforce'] as string[],
			current: false
		},
        {
            title: 'Engineering Internship',
			company: 'PTIT, Vietnam',
			period: '2022 - 4 months',
			description: 'During this Internship, i worked for the PTIT Institute in Vietnam. The goal of the internship was to create a vpn based alternative that allowed the upload of code to microprocessors from a distance using arduino-like boards.',
			technologies: ['PHP', 'C', 'Arduino'] as string[],
			current: false
		},
        {
            title: 'Internship at By the Way',
            company: 'By the Way',
            period: '2021 - 2 months',
            description: "During this internship, I created an alternative to limesurvey or google forms for the company to make customizable satisfaction surveys for their clients. I also learned about GDPR compliance.",
            technologies: ['VueJS', 'PHP', 'SQL Server', '3IS'] as string[],
            current: false
        },
	];

	const education = [
		{
			degree: "Engineering master degree",
			school: 'Polytech\'Lille',
			period: '2021-2023',
			description:
				'A diploma that focuses on computer science and the understanding of how machines work. The areas of study include microelectronics, automatics, physics and mathematics'
		},
		{
			degree: "Associate Degree in Computer Science (French DUT)",
			school: 'IUT of Fontainebleau',
			period: '2019 - 2020',
			description:
				'A diploma that really focuses on computer science and programming skills, including kernel programming, databases, web programming, software programming, testing, interface design, mobile app design, and global knowledge around programming.'
		},
		{
			degree: 'French Baccalauréat in science',
			school: 'Lycée Etienne Bezout',
			period: '2018',
			description: 'The general diploma of french students. The Major I took is Computer science and engineering.'
		}
	];

	const skills = [
		'Problem Solving',
		'Agile / Scrum',
		'Team Collaboration',
		'Communication',
		'Mentoring',
		'Adaptability',
		'Time Management'
	];

	const contactEmail = 'pro.tmeynier@gmail.com';
	let contactSubject = $state('');
	let contactMessage = $state('');

	function handleContactSubmit(e: SubmitEvent) {
		e.preventDefault();
		const params = new URLSearchParams({ subject: contactSubject, body: contactMessage });
		window.location.href = `mailto:${contactEmail}?${params.toString()}`;
	}

	const hobbies = [
		{ name: 'Rock climbing', emoji: '🧗' },
		{ name: 'Gaming', emoji: '🎮' },
        { name: 'Modding', emoji: '🖥️' },
		{ name: 'Reading', emoji: '📚' },
		{ name: 'Cooking', emoji: '🍳' }
	];
</script>

<section id="hero" class="hero relative min-h-[calc(100dvh-4rem)] w-full overflow-hidden">
	<div
		class="bg-primary/25 pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
	></div>
	<div
		class="bg-secondary/20 pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full blur-3xl"
	></div>

	<div class="hero-content relative px-4 text-center">
		<div class="max-w-2xl" use:reveal>
			<div class="badge badge-outline border-primary/40 gap-2 px-4 py-3">
				<span class="bg-success relative inline-flex h-2 w-2 rounded-full">
					<span class="bg-success absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75"
					></span>
				</span>
				Available for opportunities
			</div>

			<h1 class="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
				Hi, I'm
				<span
					class="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text text-transparent"
					>{hero.name}</span
				>
			</h1>
			<p class="text-primary mt-3 font-mono text-lg sm:text-xl">
				<span class="opacity-50">&gt;</span>
				{hero.title}
			</p>
			<p class="py-6 opacity-80">{hero.tagline}</p>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a
					href="#contact"
					class="btn btn-primary shadow-[0_8px_30px_-8px_var(--color-primary)] hover:shadow-[0_8px_36px_-4px_var(--color-primary)]"
					>Get in touch</a
				>
				<a href="#career" class="btn btn-outline">See my career</a>
			</div>
		</div>
	</div>
</section>

<section id="technologies" class="border-base-300/60 bg-base-200 w-full border-t">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<SectionHeading
			kicker="01 · Toolbox"
			title="Technologies"
			subtitle="Technologies I've worked with, grouped by area and skill level."
		/>

		<div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
			{#each Object.entries(levelLabel) as [level, label] (level)}
				<div class="flex items-center gap-2">
					<span class="h-2 w-2 rounded-full {levelDot[level as Level]}"></span>
					<span class="opacity-70">{label}</span>
				</div>
			{/each}
		</div>

		<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each technologies as group, i (group.category)}
				<div
					class="card bg-base-100 border-base-300/60 hover:border-primary/40 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
					use:reveal={{ delay: i * 90 }}
				>
					<div class="card-body">
						<h3 class="card-title text-base">{group.category}</h3>
						<div class="flex flex-col gap-2">
							{#each [...group.items].sort((a, b) => levelRank[a.level] - levelRank[b.level]) as item (item.name)}
								<span class="inline-flex items-center gap-2 text-sm">
									<span class="h-1.5 w-1.5 shrink-0 rounded-full {levelDot[item.level]}"></span>
									{item.name}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="languages" class="border-base-300/60 w-full border-t">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<SectionHeading
			kicker="02 · Beyond Code"
			title="Languages & Travel"
			subtitle="Languages I speak, and some of the places I've been lucky enough to visit."
		/>

		<div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			<div use:reveal={{ delay: 80 }}>
				<h3 class="mb-4 text-xl font-semibold">Languages</h3>
				<div class="flex flex-col gap-5">
					{#each languages as lang (lang.name)}
						<div>
							<div class="mb-1 flex items-center justify-between text-sm">
								<span>{lang.flag} {lang.name}</span>
								<span class="opacity-70">{lang.level}</span>
							</div>
							<progress class="progress progress-primary w-full" value={lang.value} max="100"
							></progress>
						</div>
					{/each}
				</div>
			</div>

			<div use:reveal={{ delay: 160 }}>
				<h3 class="mb-4 text-xl font-semibold">Places I've Traveled</h3>
				<div class="flex flex-col gap-2">
					{#each trips as trip (trip.place)}
						<div
							class="bg-base-100 border-base-300/60 hover:border-primary/40 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-box border p-3 transition-colors"
						>
							<span class="flex items-center gap-2">
								<span class="text-xl">{trip.flag}</span>
								<span class="text-sm">{trip.place}</span>
							</span>
							<span class="flex items-center gap-2 font-mono text-sm opacity-60">
								<span>{trip.duration}</span>
								<span class="opacity-50">·</span>
								<span>{trip.year}</span>
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="career" class="border-base-300/60 bg-base-200 w-full border-t">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<SectionHeading
			kicker="03 · Experience"
			title="Career"
			subtitle="My professional journey so far."
		/>

		<ul class="timeline timeline-vertical mt-12 timeline-compact">
			{#each career as job, i (job.title + job.period)}
				<li>
					{#if i !== 0}<hr class="bg-primary" />{/if}
					<div class="timeline-middle">
						<div
							class="from-primary to-secondary text-primary-content flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br font-mono text-sm font-bold shadow-md"
						>
							{i + 1}
						</div>
					</div>
					<div
						class="timeline-end timeline-box bg-base-100 border-base-300/60 hover:border-primary/40 mb-6 w-full border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-auto"
						use:reveal={{ delay: i * 100 }}
					>
						<time class="font-mono text-sm italic opacity-70">{job.period}</time>
						{#if job.current}<span class="badge badge-primary badge-sm ml-2">Current</span>{/if}
						<div class="text-lg font-bold">{job.title}</div>
						<div class="text-sm font-medium opacity-80">{job.company}</div>
						<p class="mt-2 text-sm opacity-70">{job.description}</p>
						{#if job.technologies.length}
							<div class="mt-3 flex flex-wrap gap-1.5">
								{#each job.technologies as tech (tech)}
									<span class="badge badge-outline badge-primary badge-sm">{tech}</span>
								{/each}
							</div>
						{/if}
					</div>
					{#if i !== career.length - 1}<hr class="bg-primary" />{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="education" class="border-base-300/60 w-full border-t">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<SectionHeading kicker="04 · Background" title="Education" subtitle="My academic journey." />

		<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each education as edu, i (edu.degree)}
				<div
					class="card bg-base-100 border-base-300/60 hover:border-primary/40 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
					use:reveal={{ delay: i * 90 }}
				>
					<div class="card-body">
						<span class="text-primary font-mono text-xs font-semibold tracking-wide">
							{edu.period}
						</span>
						<h3 class="card-title mt-1 text-lg">{edu.degree}</h3>
						<p class="text-sm font-medium opacity-80">{edu.school}</p>
						<p class="mt-2 text-sm opacity-70">{edu.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="skills" class="border-base-300/60 bg-base-200 w-full border-t">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<SectionHeading
			kicker="05 · About Me"
			title="Skills & Hobbies"
			subtitle="A quick look at what I bring to a team, and what I do outside of work."
		/>

		<div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			<div use:reveal={{ delay: 80 }}>
				<h3 class="mb-4 text-xl font-semibold">Skills</h3>
				<div class="flex flex-wrap gap-2">
					{#each skills as skill (skill)}
						<span
							class="border-base-300 bg-base-100 hover:border-primary/50 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors"
							>{skill}</span
						>
					{/each}
				</div>
			</div>

			<div use:reveal={{ delay: 160 }}>
				<h3 class="mb-4 text-xl font-semibold">Hobbies</h3>
				<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
					{#each hobbies as hobby (hobby.name)}
						<div
							class="bg-base-100 border-base-300/60 hover:border-primary/40 flex items-center gap-2 rounded-box border p-3 transition-colors"
						>
							<span class="text-xl">{hobby.emoji}</span>
							<span class="text-sm">{hobby.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="contact" class="border-base-300/60 w-full border-t">
	<div
		class="mx-auto flex max-w-6xl scroll-mt-20 flex-col items-center px-4 py-16 sm:px-8 md:py-24"
	>
		<SectionHeading
			kicker="06 · Let's Talk"
			title="Contact Me"
			subtitle="Have an opportunity in mind? Send me a message."
		/>

		<div
			class="card bg-base-100 border-base-300/60 mt-10 w-full max-w-lg border shadow-xl"
			use:reveal
		>
			<form class="card-body items-stretch gap-4" onsubmit={handleContactSubmit}>
				<label class="floating-label">
					<input
						type="text"
						placeholder="Subject"
						class="input input-md w-full"
						bind:value={contactSubject}
						required
					/>
					<span>Subject</span>
				</label>
				<label class="floating-label">
					<textarea
						placeholder="Message"
						class="textarea w-full"
						rows="4"
						bind:value={contactMessage}
						required
					></textarea>
					<span>Message</span>
				</label>
				<button
					type="submit"
					class="btn btn-primary mt-4 shadow-[0_8px_30px_-8px_var(--color-primary)] hover:shadow-[0_8px_36px_-4px_var(--color-primary)]"
					>Send</button
				>
			</form>
		</div>

		<p class="mt-6 text-sm opacity-70">
			Prefer social media? <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="link link-primary">Contact me on LinkedIn</a>.
		</p>
	</div>
</section>
