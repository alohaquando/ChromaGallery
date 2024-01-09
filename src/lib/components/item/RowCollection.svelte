<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import type { List, Collection } from '$lib/data/dataModels';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import { count } from '$lib/utils/countItem.js';
	import { extractItems } from '$lib/data/item';
	import { createEventDispatcher } from 'svelte';

	export let collection: List | Collection;
	let customClass = '';
	export { customClass as class };
	export let type: 'checkbox' | 'action' | 'view' = 'action';
	export let curator: boolean = false;
	export let isCollection: boolean = false;
	let path = (curator ? '/curator' : '') + (isCollection ? '/collection/' : '/list/') + collection?.id;
	export let button: 'add' | 'destructive' | 'link' | undefined;
	export let icon: string | undefined;
	export let hasLink: boolean = true;

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
	export let id: string = '';
	export let checked: boolean = false;

	const dispatch = createEventDispatcher();

	const onSelect = () => {
		dispatch('select', { currentTarget: { id } });
	};

	let listItems = extractItems(collection);

	export let bookmark: boolean = false;
</script>

<svelte:element class="{customClass} text-left w-full h-auto flex items-center gap-4 overflow-hidden" href="{path}"
								{id}
								on:click={()=>{checked = !checked; onSelect()}}
								role="button"
								tabindex="0"
								this={(type === 'action' && hasLink) ? 'a' : 'button'}>
	{#await listItems}
		<Block class="rounded-lg shrink-0 !h-16 !w-16" icon link={false}></Block>
	{:then items}
		<Block {bookmark} class="rounded-lg shrink-0 !h-16 !w-16" icon item={items[0]} link={false}></Block>
	{/await}
	<div class="w-full gap-y-3 flex flex-col">
		<Body>{collection.title}</Body>
		<Body class="opacity-50 line-clamp-1">{count(collection.items)}</Body>
	</div>
	{#if type === 'checkbox'}
		{#if button}
			<Fab
				{icon}
				href={button === 'link' ? collection.id : undefined}
				class={buttonStyle}
				size="mini"
				hover={false}
			></Fab>
		{:else}
			<Checkbox id={collection.id} class="shrink-0" name="" {checked}></Checkbox>
		{/if}
	{:else if type === 'action'}
		<Icon icon="faChevronRight" class="shrink-0 w-6 h-6" />
	{/if}
</svelte:element>
