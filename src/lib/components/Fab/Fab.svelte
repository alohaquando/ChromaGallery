<script>
	import Icon from '../iconography/Icon.svelte';
	import Body from '../typography/Body.svelte';
	export let icon;
	export let size;
	export let buttonSize = 'md';
	const Size = {
		Medium: 'md',
		Large: 'lg'
	};
</script>

<div
	class="flex-col cursor-pointer hover:text-black rounded-[99px] border border-white border-opacity-30 backdrop-blur-sm justify-center items-center gap-2 inline-flex hover:bg-white hover:bg-opacity-30 hover:rounded-[99px] overflow-visible hover:before:opacity-70 hover:after:opacity-70 duration-300
    after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
    before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/20 via-white/40 to-white/80 before:rounded-full before:blur-lg before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
    {buttonSize === Size.Medium ? 'w-14 h-14' : 'w-28 h-28'}
    "
>
	<Icon {icon} {size}></Icon>
	{#if buttonSize === Size.Large}
		<Body>
			<slot />
		</Body>
	{/if}
</div>
