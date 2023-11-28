<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Icon from '../iconography/Icon.svelte';
	import Body from '../typography/Body.svelte';

	export let iconType: 'regular' | 'solid' | 'brands' | undefined = "regular";
	export let textClass = '';
	export let href: string | undefined = undefined;
	let customClasses = '';
	export { customClasses as class };
	export let icon: string | undefined = 'faInfoCircle';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	let sizeClasses: string;
	switch (size) {
		case 'sm': {
			sizeClasses = 'w-9 h-9';
			break;
		}
		case 'md': {
			sizeClasses = 'w-14 h-14';
			break;
		}
		case 'lg': {
			sizeClasses = 'w-28 h-28 after:!blur-lg before:!blur-md';
			break;
		}
	}
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="{customClasses} {sizeClasses} flex-col hover:text-black rounded-full border border-white border-opacity-30 backdrop-blur-sm justify-center items-center gap-2 inline-flex hover:bg-white/30 hover:rounded-[99px] overflow-visible hover:before:opacity-100 hover:after:opacity-100 duration-300
   after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-transparent to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-black/40 via-white/40 to-white before:rounded-full before:blur-sm before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
	on:click
	on:keydown
	role="button"
	tabindex="0"
>
	<Icon {icon} size="2xl" type={iconType}></Icon>
	{#if $$slots.default}
		<Body class="{textClass} pt-1 leading-tight">
			<slot />
		</Body>
	{/if}
</svelte:element>
