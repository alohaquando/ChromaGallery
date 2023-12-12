<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import type { List, Collection } from '../../../model.js';
	import { createEventDispatcher } from 'svelte';
	import { count } from '$lib/utils/countItem.js';
	import { findItem } from '$lib/utils/filter';
	import { item1 } from '../../../data';

	export let data: List | Collection;

	let customClass = '';
	export { customClass as class };

	export let button: 'add' | 'destructive' | 'link' | undefined;
	export let icon: string | undefined;

	let buttonStyle = '';
	switch (button) {
		case 'add':
			icon = 'faPlus';
			break;
		case 'destructive':
			icon = 'faMinus';
			buttonStyle = '!border-red-500 text-red-500';
			break;
		case 'link':
			icon = 'faChevronRight';
			buttonStyle = '!border-none';
			break;
	}

	let str = count(data.items);
	let listItems = findItem(data.items);
</script>

<div class="{customClass} w-full h-auto flex items-center gap-4 overflow-hidden">
	<Block class="rounded-lg shrink-0 !h-16 !w-16" data={listItems[0]} icon link={false}></Block>
	<div class="w-full gap-y-3 flex flex-col">
		<Body>{data.name}</Body>
		<Body class="opacity-50 line-clamp-1">{str}</Body>
	</div>
	{#if button}
		<Fab {icon} href={button === 'link' ? data.id : undefined} class="{buttonStyle}" size="mini" hover={false}></Fab>
	{:else}
		<Checkbox id={data.id} class="shrink-0" name=""></Checkbox>
	{/if}
</div>