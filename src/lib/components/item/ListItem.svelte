<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let text: string | undefined;
	export let href: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let topDivider: boolean = true;
	export let bottomDivider: boolean = true;
	export let design: 'default' | 'destructive' = 'default';
	let textClasses: string;
	switch (design) {
		case 'default': {
			break;
		}
		case 'destructive': {
			textClasses = 'text-red-400';
			break;
		}
	}
	let customClass = '';
	export { customClass as class };

	let isHovered = false;
	const handleHover = () => {
		isHovered = !isHovered;
	};
</script>

<svelte:element
	class="{customClass} flex flex-row min-h-[3rem] py-4 justify-between space-x-4 relative items-center"
	{href}
	on:click
	on:keydown
	on:mouseenter={handleHover}
	on:mouseleave={handleHover}
	role="button"
	tabindex="0"
	this={href ? 'a' : 'button'}
>
	<div class="grow flex-1 flex items-center hyphens-auto {textClasses}">
		<Link
			bind:isHovered
			{design}
			{href}
		>
			{text}
		</Link>
	</div>
	<Icon {icon} size="sm" />
	{#if topDivider}
		<div class=" h-px bg-[#222222] w-full absolute top-0 -left-4" />
	{/if}
	{#if bottomDivider}
		<div class=" h-px bg-[#222222] w-full absolute -bottom-px -left-4" />
	{/if}
</svelte:element>

<!--Example-->
<!--<ListItem leadingText="This" trailingText="That"/>-->
<!--<ListItem leadingText="This" icon="faArrowUpLeft" clickable on:click={() => window.alert("hi")}/>-->
<!--<ListItem leadingText="This" trailingText="This is a link" href="/"/>-->
