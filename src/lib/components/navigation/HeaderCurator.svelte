<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import LogoCurator from '$lib/components/logo/LogoCurator.svelte';

	export let scrollY: number;
	let prevY: number;
	let showNav: boolean = true;
	let designClass = '';

	const handleShowNav = () => {
		showNav = scrollY <= 0 || scrollY - prevY < 0;
		prevY = scrollY;

		if (showNav === true) {
			designClass = '';
		} else if (showNav === false) {
			designClass = 'translate-y-[-150%] bg-black/50';
		}
	};

	$: scrollY, handleShowNav();
</script>

<div
	class="{designClass} sticky top-0 left-0 z-30 h-16 mb-2 w-full justify-center items-center inline-flex duration-500 ease-in-out"
>
	<a class="px-4 py-4" href="/curator/items">
		<LogoCurator class="h-6 !fill-white" />
	</a>

	<div
		class="pointer-events-none absolute top-0 -bottom-2 left-0 right-0 -z-20 touch-none transition-all"
	>
		<div
			class="opacity-100 blur-fix absolute h-full w-full backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black,black,black,transparent)]"
		/>
	</div>
</div>
