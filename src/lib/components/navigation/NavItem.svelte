<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	let customClasses = '';
	export { customClasses as class };
	export let icon: string | undefined = undefined;
	export let iconComponent: ComponentType | undefined = undefined;
	export let active: boolean = false;
	export let href: string | undefined = undefined;

	let activeClasses: string;
	$: active = active;
	$: switch (active) {
		case true: {
			activeClasses = '';
			break;
		}
		case false: {
			activeClasses = 'opacity-60 hover:opacity-100 after:hidden';
			break;
		}
	}
</script>

<a
	class="{customClasses} {activeClasses} px-3 py-2 w-20 flex-col justify-center items-center gap-1 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-white text-sm text-center relative space-y-0.5
        after:content-[''] after:h-16 after:w-16 after:rounded-full after:absolute after:bg-gradient-to-b from-white/20 to-white/40 after:duration-1000 after:ease-out after:-z-10 after:blur-lg
 "
	{href}
>
	{#if iconComponent}
		<svelte:component this={iconComponent} class="h-6 w-6" />
	{:else}
		<Icon {icon} size="xl" />
	{/if}
	<Body class="{active ? 'font-semibold' : ''} transition">
		<slot />
	</Body>

	<div
		class="rounded-full h-[2px] w-8 bg-white absolute bottom-1.5 transition {active
			? 'opacity-100'
			: 'opacity-0'}"
	></div>
</a>
