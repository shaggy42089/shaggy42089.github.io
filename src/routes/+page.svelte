<script lang="ts">
	// --- Edit the data below to update the site content ---

	const hero = {
		name: 'Thibault',
		title: 'Full-Stack Developer',
		tagline:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. I build clean, reliable web applications and enjoy turning ideas into working products.'
	};

	const skills = [
		'Problem Solving',
		'Team Collaboration',
		'Agile / Scrum',
		'Communication',
		'Mentoring',
		'Adaptability',
		'Time Management',
		'Public Speaking'
	];

	const hobbies = [
		{ name: 'Photography', emoji: '📷' },
		{ name: 'Hiking', emoji: '🥾' },
		{ name: 'Chess', emoji: '♟️' },
		{ name: 'Gaming', emoji: '🎮' },
		{ name: 'Reading', emoji: '📚' },
		{ name: 'Cooking', emoji: '🍳' }
	];

	type Level = 'advanced' | 'intermediate' | 'familiar';

	const levelBadge: Record<Level, string> = {
		advanced: 'badge-primary',
		intermediate: 'badge-secondary',
		familiar: 'badge-outline'
	};

	const levelLabel: Record<Level, string> = {
		advanced: 'Advanced',
		intermediate: 'Intermediate',
		familiar: 'Familiar'
	};

	const technologies: { category: string; items: { name: string; level: Level }[] }[] = [
		{
			category: 'Frontend',
			items: [
				{ name: 'Svelte / SvelteKit', level: 'advanced' },
				{ name: 'TypeScript', level: 'advanced' },
				{ name: 'Tailwind CSS', level: 'advanced' },
				{ name: 'React', level: 'intermediate' }
			]
		},
		{
			category: 'Backend',
			items: [
				{ name: 'Node.js', level: 'advanced' },
				{ name: 'PHP', level: 'intermediate' },
				{ name: 'REST APIs', level: 'advanced' },
				{ name: 'GraphQL', level: 'familiar' }
			]
		},
		{
			category: 'Databases',
			items: [
				{ name: 'PostgreSQL', level: 'advanced' },
				{ name: 'MySQL', level: 'intermediate' },
				{ name: 'MongoDB', level: 'familiar' }
			]
		},
		{
			category: 'Tools & DevOps',
			items: [
				{ name: 'Git', level: 'advanced' },
				{ name: 'Docker', level: 'intermediate' },
				{ name: 'CI/CD', level: 'intermediate' },
				{ name: 'Linux', level: 'intermediate' }
			]
		}
	];

	const languages = [
		{ flag: '🇫🇷', name: 'French', level: 'Native', value: 100 },
		{ flag: '🇬🇧', name: 'English', level: 'Fluent (C1)', value: 90 },
		{ flag: '🇪🇸', name: 'Spanish', level: 'Intermediate (B1)', value: 55 }
	];

	const trips = [
		{ flag: '🇯🇵', place: 'Tokyo, Japan', year: '2024' },
		{ flag: '🇵🇹', place: 'Lisbon, Portugal', year: '2023' },
		{ flag: '🇮🇸', place: 'Reykjavik, Iceland', year: '2023' },
		{ flag: '🇺🇸', place: 'New York, USA', year: '2022' },
		{ flag: '🇮🇹', place: 'Rome, Italy', year: '2021' }
	];

	const education = [
		{
			degree: "Master's Degree in Software Engineering",
			school: 'Placeholder University',
			period: '2022 - 2024',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specialized in web architecture and distributed systems.'
		},
		{
			degree: "Bachelor's Degree in Computer Science",
			school: 'Placeholder Institute of Technology',
			period: '2019 - 2022',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focused on algorithms, databases and software design.'
		},
		{
			degree: 'High School Diploma, Science Track',
			school: 'Placeholder High School',
			period: '2016 - 2019',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.'
		}
	];

	const career = [
		{
			title: 'Placeholder Job Title',
			company: 'Placeholder Company',
			period: '2024 - Present',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Working on placeholder projects with a placeholder tech stack.',
			current: true
		},
		{
			title: 'Internship at By the Way',
			company: 'By the Way',
			period: '2023',
			description:
				"During this internship, I created a project from scratch to fit the company's needs for customized satisfaction surveys, automatic and GDPR compliant customer emailing.",
			current: false
		},
		{
			title: 'Placeholder Earlier Role',
			company: 'Placeholder Company',
			period: '2022',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
			current: false
		}
	];
</script>

<section id="hero" class="hero min-h-[70vh] w-full bg-base-100">
	<div class="hero-content px-4 text-center">
		<div class="max-w-2xl">
			<h1 class="text-4xl font-bold sm:text-5xl md:text-6xl">
				Hi, I'm {hero.name}
			</h1>
			<p class="text-primary mt-2 text-xl font-semibold sm:text-2xl">{hero.title}</p>
			<p class="py-6 opacity-80">{hero.tagline}</p>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a href="#contact" class="btn btn-primary">Get in touch</a>
				<a href="#career" class="btn btn-outline">See my career</a>
			</div>
		</div>
	</div>
</section>

<section id="skills" class="w-full bg-base-200">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Skills & Hobbies</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">
			A quick look at what I bring to a team, and what I do outside of work.
		</p>

		<div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			<div>
				<h3 class="mb-4 text-xl font-semibold">Skills</h3>
				<div class="flex flex-wrap gap-2">
					{#each skills as skill (skill)}
						<span class="badge badge-lg badge-primary badge-outline">{skill}</span>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="mb-4 text-xl font-semibold">Hobbies</h3>
				<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
					{#each hobbies as hobby (hobby.name)}
						<div class="bg-base-100 flex items-center gap-2 rounded-box p-3 shadow-sm">
							<span class="text-xl">{hobby.emoji}</span>
							<span class="text-sm">{hobby.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="technologies" class="w-full bg-base-100">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Technologies</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">
			Technologies I've worked with, grouped by area and skill level.
		</p>

		<div class="mt-6 flex flex-wrap justify-center gap-4 text-sm">
			{#each Object.entries(levelLabel) as [level, label] (level)}
				<div class="flex items-center gap-2">
					<span class="badge {levelBadge[level as Level]} badge-sm"></span>
					<span class="opacity-70">{label}</span>
				</div>
			{/each}
		</div>

		<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each technologies as group (group.category)}
				<div class="card bg-base-200 shadow-sm">
					<div class="card-body">
						<h3 class="card-title text-base">{group.category}</h3>
						<div class="flex flex-wrap gap-2">
							{#each group.items as item (item.name)}
								<span class="badge {levelBadge[item.level]}">{item.name}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="languages" class="w-full bg-base-200">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Languages & Travel</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">
			Languages I speak, and some of the places I've been lucky enough to visit.
		</p>

		<div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
			<div>
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

			<div>
				<h3 class="mb-4 text-xl font-semibold">Places I've Traveled</h3>
				<div class="flex flex-col gap-2">
					{#each trips as trip (trip.place)}
						<div class="bg-base-100 flex items-center justify-between rounded-box p-3 shadow-sm">
							<span class="flex items-center gap-2">
								<span class="text-xl">{trip.flag}</span>
								<span class="text-sm">{trip.place}</span>
							</span>
							<span class="text-sm opacity-60">{trip.year}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="education" class="w-full bg-base-100">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Education</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">My academic background.</p>

		<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each education as edu (edu.degree)}
				<div class="card bg-base-200 shadow-sm">
					<div class="card-body">
						<span class="badge badge-primary badge-outline w-fit">{edu.period}</span>
						<h3 class="card-title mt-2 text-lg">{edu.degree}</h3>
						<p class="text-sm font-medium opacity-80">{edu.school}</p>
						<p class="mt-2 text-sm opacity-70">{edu.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="career" class="w-full bg-base-200">
	<div class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Career</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">My professional journey so far.</p>

		<ul class="timeline timeline-vertical mt-12 timeline-compact">
			{#each career as job, i (job.title + job.period)}
				<li>
					{#if i !== 0}<hr class="bg-primary" />{/if}
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="text-primary h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end timeline-box mb-6 w-full text-left md:w-auto">
						<time class="font-mono text-sm italic opacity-70">{job.period}</time>
						{#if job.current}<span class="badge badge-primary badge-sm ml-2">Current</span>{/if}
						<div class="text-lg font-bold">{job.title}</div>
						<div class="text-sm font-medium opacity-80">{job.company}</div>
						<p class="mt-2 text-sm opacity-70">{job.description}</p>
					</div>
					{#if i !== career.length - 1}<hr class="bg-primary" />{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="contact" class="w-full bg-base-100">
	<div
		class="mx-auto flex max-w-6xl scroll-mt-20 flex-col items-center px-4 py-16 sm:px-8 md:py-24"
	>
		<h2 class="text-center text-3xl font-bold sm:text-4xl">Contact Me</h2>
		<p class="mx-auto mt-2 max-w-2xl text-center opacity-70">
			Have an opportunity in mind? Send me a message.
		</p>

		<div class="card bg-base-200 mt-10 w-full max-w-lg shadow-xl">
			<div class="card-body items-stretch gap-4">
				<label class="floating-label">
					<input type="text" placeholder="Email" class="input input-md w-full" />
					<span>Email</span>
				</label>
				<label class="floating-label">
					<input type="text" placeholder="Subject" class="input input-md w-full" />
					<span>Subject</span>
				</label>
				<label class="floating-label">
					<textarea placeholder="Message" class="textarea w-full" rows="4"></textarea>
					<span>Message</span>
				</label>
				<button class="btn btn-primary mt-4">Send</button>
			</div>
		</div>
	</div>
</section>
