<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';

	export let isRelative: boolean = false;
	let displayClass = 'sticky';
	if (isRelative) {
		displayClass = 'relative';
	}
	export let exit: boolean = false;
	export let scrollY: number;
	export let responsive: boolean = true;
	export let actionDisabled: boolean = false;
	export let hasButton: boolean = false;
	let buttonClass: string;
	export let buttonMessage = '';
	export let hasDestructive: boolean = false;
	export let destructiveMessage = 'Delete';

	let prevY: number;
	let showNav: boolean = true;
	let scrolled: boolean = true;
	let designClass = '';
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
	class="{responsive === true
		? { designClass }
		: ''} {displayClass} top-0 left-0 z-30 h-16 mb-2 w-full justify-between items-center inline-flex duration-500 ease-in-out"
>
	<div class="flex container mx-auto px-6 justify-between items-center">
		<Fab class={buttonClass} icon="{exit ? 'faTimes' : 'faAngleLeft'}" size="sm"></Fab>
		<div class="inline-flex gap-2">
			{#if hasButton}
				<Button disabled={actionDisabled} design="filled">
					{buttonMessage}
				</Button>
			{/if}
			{#if hasDestructive}
				<Button destructive>{destructiveMessage}</Button>
			{/if}
		</div>
	</div>

	<div
		class="pointer-events-none absolute top-0 -bottom-2 left-0 right-0 -z-20 touch-none transition-all"
	>
		<div
			class="opacity-100 blur-fix absolute h-full w-full backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black,black,black,transparent)]"
		/>
	</div>
</div>
