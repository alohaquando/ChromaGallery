<script lang="ts">
	import RowItem from '$lib/components/item/RowItem.svelte';
	import type { Item } from '../../../model';
	import { flip } from 'svelte/animate';
	import type { DndEvent } from 'svelte-dnd-action';
	import { dndzone } from 'svelte-dnd-action';

	export let type: 'checkbox' | 'edit' | 'view' = 'checkbox';

	let dragDisabled: boolean = true;

	function typeCheck() {
		dragDisabled = type !== 'edit';
	}

	const flipDurationMs = 200;

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

	$:type, typeCheck();
</script>

<div on:consider="{handleConsider}"
		 on:finalize="{handleFinalize}"
		 use:dndzone="{{items, dragDisabled, flipDurationMs}}">
	{#each items as item (item.id)}
		<div animate:flip="{{ duration: flipDurationMs }}">
			<RowItem on:delete={() => onDelete(item)} {type} class="border border-[#222222] rounded-lg" data={item}></RowItem>
		</div>
	{/each}
</div>