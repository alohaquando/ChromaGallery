<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/data/exampleData';
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" href="edit-items/search" icon="faSearch">Find item</Button>
	<DragList class="w-full gap-4" items={allItem} type="edit"></DragList>
</div>
