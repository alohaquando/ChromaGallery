<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { itemList1 } from '$lib/stores/data';
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" icon="faSearch">Find list</Button>
	<DragList class="w-full gap-4 " items={itemList1}></DragList>
</div>

