<script lang="ts">
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
	class="{designClass} sticky top-0 left-0 z-50 h-16 w-full backdrop-blur-3xl justify-center items-center inline-flex duration-500 ease-in-out">
	<div>Logo {scrollY} {showNav}</div>
</div>