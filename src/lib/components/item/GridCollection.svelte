<script lang="ts">
	import type { Collection } from '$lib/data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';

	export let collections: Collection[] | undefined;
	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} w-full sm:grid sm:grid-cols-2 sm:gap-x-4 gap-y-10 flex flex-col">
	{#each collections as collection}
		<CollectionBlock width="full" {collection} class=""></CollectionBlock>
	{/each}
</div>