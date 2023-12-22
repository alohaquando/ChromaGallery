<script lang="ts">
	import RowItem from '$lib/components/item/RowItem.svelte';
	import type { Item } from '$lib/stores/model';
	import { flip } from 'svelte/animate';
	import type { DndEvent } from 'svelte-dnd-action';
	import { dndzone } from 'svelte-dnd-action';
	import { data } from 'autoprefixer';
	import { createNewItem } from '$lib/stores/model';


	export let type: 'action' | 'edit' | 'delete' | 'view' = 'action';
	export let button: 'add' | 'destructive' | 'link' | undefined;
	export let icon: string | undefined;
	export let placeholder: number | undefined;
	export let displayLimit: number | undefined;

	let dragDisabled: boolean = true;

	function typeCheck() {
		dragDisabled = type !== 'edit';
	}

	$:type, typeCheck();

	const flipDurationMs = 100;

	let items: Item[] | undefined;
	export { items as data };

	let empty: boolean = false;
	$:if (!items) {
		empty = true;
		items = [];
	}

	const handleConsider = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
	};

	const handleFinalize = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
	};

	function onDelete(item: Item) {
		items = items.filter((i: Item) => i.id != item.id);
	}

	let customClass = '';
	export { customClass as class };

	$: if (displayLimit && items) {
		items = items.slice(0, displayLimit);
	}

	const fillItems = () => {
		const currentLength = items.length;

		if (currentLength < placeholder) {
			const itemsToAdd = placeholder - currentLength;
			items = [...items, ...Array(itemsToAdd).fill(createNewItem())];
		}
	};

	$: if (placeholder && empty) {
		fillItems();
	}

	$: fillItems(), items;
</script>

<div class="{customClass} flex flex-col"
		 on:consider="{handleConsider}"
		 on:finalize="{handleFinalize}" use:dndzone="{{items, dragDisabled, flipDurationMs}}">
	{#each items as item (item.id)}
		<div animate:flip="{{ duration: flipDurationMs }}">
			<RowItem on:delete={() => onDelete(item)} {type} class="rounded-lg"
							 item={item} {button} {icon}></RowItem>
		</div>
	{/each}
</div>