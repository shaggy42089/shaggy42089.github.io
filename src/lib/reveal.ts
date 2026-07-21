export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	node.classList.add('reveal');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('reveal-visible');
				observer.disconnect();
			}
		},
		{ threshold: 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
