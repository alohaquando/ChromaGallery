<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import type { Item } from '$lib/data/dataModels';
	import { createEventDispatcher } from 'svelte';
	import { createNewItem } from '$lib/data/dataModels';
	// import firebase from 'firebase/compat';
	// import functions = firebase.functions;

	export let item: Item;

	const dispatch = createEventDispatcher();

	const onDelete = () => {
		dispatch('delete');
	};

	const onTransfer = () => {
		dispatch('transfer');
	};

	let customClass = '';
	export { customClass as class };

	let animationClass = '';
	export let type: 'checkbox' | 'action' | 'edit' | 'delete' | 'view' = 'view';
	export let button: 'add' | 'destructive' | 'remove' | 'link' | undefined;
	export let icon: string | undefined;
	export let curator: boolean = false;
	let path = (curator ? '/curator' : '') + '/items/' + item?.id;
	export let buttonClass = '';
	switch (button) {
		case 'add':
			icon = 'faPlus';
			break;
		case 'remove':
		case 'destructive':
			icon = 'faMinus';
			buttonClass = '!border-red-500 text-red-500';
			break;
		case 'link':
			icon = 'faChevronRight';
			buttonClass = '!border-none';
			break;
	}

	const functionList = [
		{
			type: 'add',
			function: onTransfer
		},
		{
			type: 'destructive',
			function: onDelete
		},
		{
			type: 'remove',
			function: onTransfer
		}
	];

	let buttonFunction: (() => void) | undefined;
	$: button, (buttonFunction = functionList.find((option) => option.type === button)?.function);

	export let id: string;
	export let checked: boolean = false;

	const onSelect = () => {
		dispatch('select', { currentTarget: { id } });
	};
</script>

<svelte:element class="{customClass} w-full h-auto flex items-center gap-4 overflow-hidden"
								href="{path}"
								{id}
								on:click={()=>{checked = !checked; onSelect()}}
								role="button"
								tabindex="0"
								this={type === 'action' ? 'a' : 'div'}>
	{#if type === 'edit' || type === 'delete'}
		<Fab
			{id}
			on:click={onDelete}
			icon="faMinus"
			size="mini"
			destructive
			class="{animationClass} shrink-0 text-red-500 !border-red-500"
		></Fab>
	{/if}
	<Block class="{animationClass} rounded-lg shrink-0 !h-16 !w-16" icon {item} link={false}></Block>
	<div class="{animationClass} w-full gap-y-3 flex flex-col">
		<Body>{item.title}</Body>
		<Body class="opacity-50 line-clamp-1">{item.author}</Body>
	</div>
	{#if type === 'checkbox' && item.id !== ''}
		{#if button}
			<Fab
				{icon}
				on:click={buttonFunction}
				href={button === 'link' ? item.id : undefined}
				class={buttonClass}
				size="mini"
				hover={false}
			></Fab>
		{:else}
			<Checkbox id={item.id} class="shrink-0" {item} name="" {checked}></Checkbox>
		{/if}
	{:else if (type === 'edit' || type === 'action')}
		<Icon icon="{type === 'edit' ? 'faEquals' : 'faChevronRight'}" class="shrink-0 w-6 h-6" />
	{/if}
</svelte:element>
