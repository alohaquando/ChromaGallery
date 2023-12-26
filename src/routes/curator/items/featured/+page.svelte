<script lang="ts">
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import { itemList2, itemList1, item5 } from '$lib/data/exampleData';

	let list1 = itemList1;
	let list2 = itemList2;
</script>

<div class="gap-6 flex flex-col">
	<DragList bind:items={list1} bind:output={list2} button="remove" itemLimit={3} placeholder={3}
	></DragList>

	<Divider></Divider>

	<Button class="w-full px-6" icon="faMagnifyingGlass">Find item</Button>

	<DragList bind:items={list2} bind:output={list1} button="add" outLimit={3}></DragList>
</div>
