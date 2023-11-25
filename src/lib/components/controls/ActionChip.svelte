<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let icon: string | undefined = undefined;
	export let width: 'fit' | 'full' = 'fit';
	export let active: boolean = false;
	'outlined';
	export let type: 'button' | 'submit' | 'reset' | undefined = 'button';
	export let disabled: boolean = false;
	export let href: string | undefined = undefined;
	let textClass = '';
	let customClasses = '';
	export { customClasses as class };

	let widthClasses: string;
	switch (width) {
		case 'fit': {
			widthClasses = 'w-fit';
			break;
		}
		case 'full': {
			widthClasses = 'w-full';
			break;
		}
	}

	const State = {
		Enabled: 'ENABLED',
		Active: 'ACTIVE'
	};

	export let state = State.Enabled;

	let activeClasses: string;
	switch (active) {
		case true: {
			activeClasses = 'bg-white/50 text-gray-900 active:bg-white/100';
			break;
		}
		case false: {
			activeClasses = 'border border-white border-opacity-30';
			break;
		}
	}
</script>

<svelte:element
	class="{customClasses} {activeClasses} {widthClasses} px-3 rounded-full backdrop-blur-sm justify-center items-center gap-1.5 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-sm text-center truncate h-8

      hover:bg-white/30 hover:text-gray-900 hover:before:opacity-100 hover:after:opacity-100 text-opacity-70

   after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-transparent to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-black/40 via-white/60 to-white before:rounded-full before:blur-sm before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
	{disabled}
	{href}
	on:click
	on:keydown
	role="button"
	tabindex="0"
	this={href ? "a" : "button"}
	{type}>
	{#if active}
		<Icon {icon} type="solid" size="sm"></Icon>
	{:else}
		<Icon {icon} size="sm"></Icon>
	{/if}
	<BodySmall class="{textClass}">
		<slot />
	</BodySmall>
</svelte:element>
