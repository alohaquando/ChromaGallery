<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { extractItems } from '$lib/data/item';

	export let data;
	let list = data.list;
	let itemList = extractItems(list);
	console.log(data.param);
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" href="edit-items/search" icon="faSearch">Find item</Button>
	{#await itemList}
		A
	{:then items}
		<DragList class="w-full gap-4" items={items} type="edit"></DragList>
	{/await}
</div>
