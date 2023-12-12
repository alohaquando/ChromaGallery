<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let leadingText: string | undefined;
	export let trailingText: string | undefined;
	export let href: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let clickable: boolean = false;

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
</script>

<svelte:element
	this={clickable ? 'button' : 'div'}
	class="{customClass} flex flex-row min-h-[3rem] py-4 justify-between space-x-4 relative items-center"
	on:click
	role={clickable ? 'button' : ''}
	tabindex="0"
>
	{#if leadingText}
		<div class="grow flex-1 flex items-center {textClasses}">
			<Body>
				{leadingText}
			</Body>
		</div>
	{/if}
	{#if trailingText}
		<div class="grow flex-1 flex items-center hyphens-auto {textClasses}">
			<svelte:component
				this={href ? Link : Body}
				{href}
				linkColor={design === 'destructive' ? 'from-red-500 to-red-300' : undefined}
			>
				{trailingText}
			</svelte:component>
		</div>
	{/if}
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
