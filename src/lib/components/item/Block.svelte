<script lang="ts">
	import Icon from '../iconography/Icon.svelte';
	import type { Item } from '$lib/data/dataModels';

	export let item: Item | null | undefined;
	export let bookmark: boolean = false;
	export let icon: boolean = false;
	export let link: boolean = true;
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
			sizeClass = 'w-full h-full';
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
				'bg-gradient-to-b from-indigo-600 to-fuchsia-700 rounded-2xl inline-flex justify-center items-center';
			break;
	}

	let customClass = '';
	export { customClass as class };
</script>

<svelte:element
	class="{!icon
		? sizeClass
		: 'h-14 w-14'} {typeClass}  {customClass} rounded-2xl relative overflow-hidden mx-auto"
	href={item || bookmark ? path : null}
	this={link || bookmark ? 'a' : 'div'}
>

	{#if bookmark}
		<div class="absolute h-auto w-full bg-black/10 rounded-full blur-2xl"></div>
		<div
			class="absolute opacity-30 h-60 w-60 bg-gradient-to-b from-zinc-400 to-fuchsia-600 rounded-full blur-xl"></div>
		<div
			class="absolute opacity-60 h-60 w-60 bg-gradient-to-b from-white/20 via-white/60 to-white/30 rounded-full blur-2xl"></div>
		<Icon icon="faStar" type="solid" class="absolute z-20" size={iconSize}></Icon>
		{#if !icon}
			<div class="absolute h-16 w-16 blur-xl bg-white rounded-full"></div>
		{/if}
	{:else }
		{#if (item?.image)}
			<div
				class="flex max-h-[70vh] {stretch ? 'w-full h-full' : 'h-auto w-full'} {icon ? 'absolute' : ''}">
				<img
					alt='{item.title}'
					class="object-contain w-auto h-full"
					src='{item.image}'
				/>
			</div>
		{/if}
	{/if}
</svelte:element>