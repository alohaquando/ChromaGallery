<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';

	export let data: PageData;
</script>

<Button class="mb-6" icon="faMagifyingGlass" width="full">Find item</Button>

{#await extractItems(data.collection)}
	<DragList class="gap-4" type="edit" placeholder={3} />
{:then items}
	<DragList class="gap-4" {items} type="edit"></DragList>
{/await}