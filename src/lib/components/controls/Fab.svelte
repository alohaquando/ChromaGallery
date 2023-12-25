<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Icon from '../iconography/Icon.svelte';
	import Body from '../typography/Body.svelte';

	export let toggled: boolean | undefined;
	export let noOutline: boolean = false;
	export let hover: boolean = true;
	export let disabled: boolean = false;

	hover = disabled ? false : hover;

	let hoverEffect = 'hover:bg-white/10' + hover ? (' ' + 'hover:before:opacity-100 hover:after:opacity-100 hover:text-gray-900') : '';
	let toggleClass = toggled ? 'before:opacity-70 after:opacity-20 text-gray-900 bg-white/20' : '';

	export let iconType: 'regular' | 'solid' | 'brands' | undefined = 'regular';
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	let customClasses = '';
	export { customClasses as class };
	export let icon: string | undefined = 'faInfoCircle';
	$:icon;
	export let size: 'mini' | 'sm' | 'md' | 'lg' = 'md';

	let sizeClasses: string;
	switch (size) {
		case 'mini':
			sizeClasses = 'w-6 h-6 after:w-6 after:h-6 before:w-6 before:h-6';
			break;
		case 'sm': {
			sizeClasses = 'w-9 h-9 after:w-8 after:h-8 before:w-9 before:h-9';
			break;
		}
		case 'md': {
			sizeClasses = 'w-14 h-14 after:w-12 after:h-12 before:w-14 before:h-14';
			break;
		}
		case 'lg': {
			sizeClasses = 'w-28 h-28 after:w-24 after:h-24 before:w-28 before:h-28 after:!blur-lg before:!blur-md hover:bg-white/10';
			break;
		}
	}
</script>

<svelte:element
	class="{customClasses} {sizeClasses} {hoverEffect} {toggleClass} shrink-0 text-center flex-col rounded-full {!noOutline? 'border border-white border-opacity-30' : ''} justify-center items-center gap-2 inline-flex overflow-visible duration-300 relative
	disabled:opacity-50 active:duration-0 active:opacity-70
   after:content-[''] after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
   before:content-[''] before:bg-gradient-to-b from-white/80 via-white/30 to-white before:rounded-full before:blur-sm before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
	{disabled}
	{href}
	on:click
	on:keydown
	role="button"
	tabindex="0"
	{target}
	this={href ? 'a' : 'button'}
>
	<Icon {icon} size="{size === 'mini' ? 'sm' : '2xl'}"
				type={iconType}></Icon>
	{#if $$slots.default}
		<Body class="pt-1 leading-tight">
		<slot />
		</Body>
	{/if}
</svelte:element>
