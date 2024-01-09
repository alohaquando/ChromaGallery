<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import type { PageData } from './$types';
	import DragList from '$lib/components/item/DragList.svelte';

	export let data: PageData;
</script>

<Button class="mb-6" href="./add/search" icon="faMagifyingGlass" width="full">Find item</Button>

<DragList class="gap-4" items={data.items} type="checkbox"></DragList>
