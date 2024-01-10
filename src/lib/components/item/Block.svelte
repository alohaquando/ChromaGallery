<script lang="ts">
	import Icon from '../iconography/Icon.svelte';
	import type { Item } from '$lib/data/dataModels';

	export let item: Item | null | undefined;
	export let bookmark: boolean = false;
	export let icon: boolean = false;
	export let link: boolean = true;
	export let display: 'full' | 'contain' | 'fill' = 'contain';
	let displayClass = '';
	switch (display) {
		case 'full':
			displayClass = 'object-contain';
			break;
		case 'contain':
			displayClass = 'object-cover w-auto h-auto';
			break;
		case 'fill':
			displayClass = 'object-cover w-full h-full';
			break;
	}
	if (!item) {
		link = false;
	}
	export let bgTransparent: boolean = false;
	export let curator: boolean = false;
	let path: string;
	if (bookmark) {
		path = '/list/bookmark';
	} else {
		path = (curator ? '/curator' : '') + '/items/' + item?.id;
	}

	let iconSize = '';
	iconSize = !icon ? '6xl' : 'base';

	export let stretch: boolean = true;

	let sizeClass = '';
	switch (stretch) {
		case false:
			sizeClass = '';
			break;
		case true:
			sizeClass = 'grow shrink basis-0 self-stretch w-full';
			break;
	}

	let typeClass = '';
	$: switch (bookmark) {
		case false:
			typeClass = bgTransparent ? 'bg-transparent' : 'bg-white/20';
			break;
		case true:
			typeClass =
				'bg-gradient-to-b from-indigo-600 to-fuchsia-700 rounded-xl inline-flex justify-center items-center';
			break;
	}

	let customClass = '';
	export { customClass as class };
</script>

<svelte:element
	class="{!icon
		? sizeClass
		: 'h-14 w-14'} {typeClass} {customClass} relative overflow-hidden mx-auto"
	href={item || bookmark && link ? path : null}
	on:click
	role="button"
	tabindex=0
	this={link || bookmark ? 'a' : 'div'}
>

	{#if bookmark}
		<Icon icon="faStar" type="solid" class="absolute z-20" size={iconSize}></Icon>
		{#if !icon}
			<div class="absolute h-auto w-full bg-black/10 rounded-full blur-2xl"></div>
			<div
				class="absolute opacity-30 h-60 w-60 bg-gradient-to-b from-zinc-400 to-fuchsia-600 rounded-full blur-xl"></div>
			<div
				class="absolute opacity-60 h-60 w-60 bg-gradient-to-b from-white/20 via-white/60 to-white/30 rounded-full blur-2xl"></div>
			<div class="absolute h-16 w-16 blur-xl bg-white rounded-full"></div>
		{/if}
	{:else }
		{#if (item?.image)}
			<div
				class="flex justify-center max-h-[70vh] w-full h-full {icon ? 'absolute' : ''}">
				<img
					alt='{item.title}'
					class="{displayClass}"
					src='{item.image}'
				/>
			</div>
		{/if}
	{/if}
</svelte:element>