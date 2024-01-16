<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';

	let link: string | undefined;
	export { link as href };
	export let isRelative: boolean = false;
	let displayClass = 'sticky';
	if (isRelative) {
		displayClass = 'relative';
	}
	export let exit: boolean = false;
	export let icon: undefined | string;
	$: icon = exit === true ? 'faTimes' : 'faAngleLeft';
	export let scrollY: number | undefined;
	export let responsive: boolean = true;
	export let actionDisabled: boolean = false;
	export let noBackdrop: boolean = false;
	export let button: string | undefined;
	export let buttonFunction = () => {};
	export let destructive: string | undefined;
	export let destructiveFunction = () => {};

	let prevY: number;
	let showNav: boolean = true;
	let scrolled: boolean = true;
	let designClass = '';
	export let buttonClass: string;
	export const handleShowNav = () => {
		if (scrollY !== undefined) {
			showNav = scrollY <= 0 || scrollY - prevY < 0;
			scrolled = scrollY <= 64;
			prevY = scrollY;

			if (showNav === true) {
				designClass = '';
			} else if (showNav === false) {
				designClass = 'bg-black/50 translate-y-[-150%]';
				buttonClass = '';
			}

			if (scrolled === true) {
				buttonClass = '!border-transparent';
			} else if (scrolled === false) {
				buttonClass = '!bg-white/20';
			}
		}
	};

	let customClass = '';
	export { customClass as class };

	export let exitButton: (() => any) | undefined = undefined;

	const handleExit =
		!link && !exitButton
			? () => {
					window.history.back();
			  }
			: exitButton;

	$: scrollY, handleShowNav();
</script>

<div
	class="{responsive === true
		? { designClass }
		: ''} {displayClass} {customClass} top-0 left-0 z-30 h-16 mb-2 w-full justify-between items-center inline-flex duration-500 ease-in-out"
>
	<div class="flex container mx-auto px-6 justify-between items-center">
		<Fab
			class="{buttonClass} {responsive ? '' : '!border-transparent'}"
			href={link}
			{icon}
			on:click={handleExit}
			size="sm"
		></Fab>
		<div class="inline-flex gap-2">
			{#if button}
				<Button on:click={buttonFunction} disabled={actionDisabled} design="filled">
					{button}
				</Button>
			{/if}
			{#if destructive}
				<Button destructive on:click={destructiveFunction}>{destructive}</Button>
			{/if}
		</div>
	</div>

	<div
		class="pointer-events-none absolute top-0 -bottom-2 left-0 right-0 -z-20 touch-none transition-all"
	>
		<div
			class="opacity-100 blur-fix absolute h-full w-full {noBackdrop
				? ''
				: 'backdrop-blur-lg'} [mask-image:linear-gradient(to_bottom,black,black,black,transparent)]"
		/>
	</div>
</div>
