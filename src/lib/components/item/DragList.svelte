<script lang="ts">
	import RowItem from '$lib/components/item/RowItem.svelte';
	import type { Item } from '../../../model';
	import { flip } from 'svelte/animate';
	import type { DndEvent } from 'svelte-dnd-action';
	import { dndzone } from 'svelte-dnd-action';

	export let type: 'action' | 'edit' | 'delete' | 'view' = 'action';
	export let button: 'add' | 'destructive' | 'link' | undefined;
	export let icon: string | undefined | null;

	let dragDisabled: boolean = true;

	function typeCheck() {
		dragDisabled = type !== 'edit';
	}

	$:type, typeCheck();

	const flipDurationMs = 100;

	let items: Item[];
	export { items as data };

	let dragged: boolean = false;
	const handleConsider = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
		dragged = true;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
		console.log(items);
		dragged = false;
	};

	function onDelete(item: Item) {
		items = items.filter((i: Item) => i.id != item.id);
	}

	let customClass = '';
	export { customClass as class };
</script>

<div class="{customClass} flex flex-col"
		 on:consider="{handleConsider}"
		 on:finalize="{handleFinalize}" use:dndzone="{{items, dragDisabled, flipDurationMs}}">
	{#each items as item (item.id)}
		<div animate:flip="{{ duration: flipDurationMs }}">
			<RowItem on:delete={() => onDelete(item)} {type} class="rounded-lg"
							 data={item} {button} {icon}></RowItem>
		</div>
	{/each}
</div>