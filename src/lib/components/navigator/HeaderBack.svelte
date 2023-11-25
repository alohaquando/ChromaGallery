<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Fab from '$lib/components/Fab/Fab.svelte';

	export let scrollY: number;
	export let actionDisabled: boolean = false;
	let prevY: number;
	let showNav: boolean = true;
	let scrolled: boolean = true;
	let designClass = '';
	let customClass = '';
	export { customClass as class };
	export let hasButton: boolean = false;
	let buttonClass: string;
	export const handleShowNav = () => {
		showNav = scrollY <= 0 || scrollY - prevY < 0;
		scrolled = scrollY <= 64;
		prevY = scrollY;

		if (showNav === true) {
			designClass = '';
		} else if (showNav === false) {
			designClass += 'bg-black/50 translate-y-[-150%]';
			buttonClass = '';
		}

		if (scrolled === true) {
			buttonClass = '!border-transparent';
		} else if (scrolled === false) {
			buttonClass = '!bg-white/20';
		}
	};

	$: scrollY, handleShowNav();
</script>

<div
	class="{designClass} sticky top-0 left-0 z-50 h-16 w-full backdrop-blur-3xl justify-between items-center inline-flex duration-500 ease-in-out">

	<div class="flex container mx-auto px-6 justify-between items-center">
		<Fab class="{buttonClass}" icon="faAngleLeft" size="sm"></Fab>
		{#if hasButton}
			<Button disabled={actionDisabled} buttonStyle="DEFAULT">
				<slot />
			</Button>
		{/if}
	</div>
</div>