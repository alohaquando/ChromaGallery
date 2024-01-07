<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { itemList1 } from '$lib/data/exampleData';
	import type { PageData } from './$types';

	export let data: PageData;
	let items = data.items;
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" icon="faSearch">Find list</Button>
	{#if !items}
		<DragList class="w-full gap-4" placeholder={3} type="checkbox"></DragList>
	{:else}
		<DragList class="w-full gap-4" {items} type="checkbox"></DragList>
	{/if}
</div>
