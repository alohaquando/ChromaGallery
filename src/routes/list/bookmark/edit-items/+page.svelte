<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/data/exampleData';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';

	export let data: PageData;
	let items = extractItems(data.bookmark);
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" href="edit-items/search" icon="faSearch">Find item</Button>
	{#await items}
		<DragList placeholder={3} type="edit"></DragList>
	{:then items}
		<DragList class="w-full gap-4" items={items} type="edit"></DragList>
	{/await}
</div>

<div class="sticky bottom-6 py-6">
	<Button design="filled" width="full">Save</Button>
</div>

