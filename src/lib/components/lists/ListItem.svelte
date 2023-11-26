<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	export let leadingText: string | undefined = "";
	export let trailingText: string | undefined = "";
	export let href: string | undefined = undefined;
	export let icon: string | undefined = undefined
	export let clickable: boolean = false;
</script>

<svelte:element
	this={clickable ? "button" : "div" }
	on:click
	tabindex="0"
	role={clickable ? "button" : ""}
	class="flex flex-row min-h-[3rem] py-4 justify-between space-x-4 relative items-center">
	<div class="grow flex-1 flex items-center ">
		<Body>
		{leadingText}
		</Body>
	</div>
	<div class="grow flex-1 flex items-center hyphens-auto">
		<svelte:component
			this={href ? Link : Body} {href}>
			{trailingText}
		</svelte:component>
	</div>
	<Icon icon={icon} size="sm" />
	<div class=" h-px bg-[#222222] w-full absolute top-0 -left-4  "/>
	<div class=" h-px bg-[#222222] w-full absolute -bottom-px -left-4  "/>
</svelte:element>

<!--Example-->
<!--<ListItem leadingText="This" trailingText="That"/>-->
<!--<ListItem leadingText="This" icon="faArrowUpLeft" clickable on:click={() => window.alert("hi")}/>-->
<!--<ListItem leadingText="This" trailingText="This is a link" href="/"/>-->