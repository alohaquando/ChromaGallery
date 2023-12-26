<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/data/exampleData';
</script>

<Button class="mb-6" icon="faMagifyingGlass" width="full">Find item</Button>
<DragList class="gap-4" items={allItem} type="edit"></DragList>
