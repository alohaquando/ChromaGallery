<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import type { Item } from '../../../model';
	import { createEventDispatcher } from 'svelte';

	export let data: Item;

	const dispatch = createEventDispatcher();

	function onDelete() {
		dispatch('delete');
	}

	let customClass = '';
	export { customClass as class };

	let animationClass = '';
	export let type: 'action' | 'edit' | 'view' = 'action';
	export let button: 'add' | 'destructive' | 'link' = 'add';
	export let icon: string | undefined | null;
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
			icon = 'faArrowRight';
			break;
	}

	// switch (type) {
	// 	case 'action':
	// 		break;
	// 	case 'edit':
	// 		animationClass = 'animate-flyRight40';
	// 		break;
	// 	case 'view':
	// 		break;
	// }

	// const transition = () => {
	// 	if (type === 'edit') {
	// 		animationClass = 'animate-flyRight40';
	// 	}
	//
	// };
	//
	// $: type, transition();
</script>

<div class="{customClass} w-full h-auto flex items-center gap-4 overflow-hidden">
	{#if type === 'edit'}
		<Fab on:click={onDelete} icon="faMinus" size="mini" hover={false}
				 class="{animationClass} shrink-0 text-red-500 !border-red-500"></Fab>
	{/if}
	<Block class="{animationClass} rounded-lg shrink-0 !h-16 !w-16" {data} icon link={false}></Block>
	<div class="{animationClass} w-full gap-y-3 flex flex-col">
		<Body>{data.name}</Body>
		<Body class="opacity-50 line-clamp-1">{data.author}</Body>
	</div>
	{#if type === 'action'}
		{#if button}
			<Fab {icon} class="{buttonStyle}" size="mini" hover={false}></Fab>
		{:else}
			<Checkbox class="shrink-0" {data} name=""></Checkbox>
		{/if}
	{:else if type === 'edit'}
		<Icon icon="faEquals" class="shrink-0 w-6 h-6" />
	{/if}
</div>