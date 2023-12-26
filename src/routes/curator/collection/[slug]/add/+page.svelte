<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { allCollection } from '$lib/data/exampleData';
</script>

<Button class="mb-6" icon="faMagifyingGlass" width="full">Find item</Button>

<CollectionList class="gap-4" collections={allCollection} rowType></CollectionList>
