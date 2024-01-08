<script lang="ts">
	import type { Collection } from '$lib/data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';

	export let collections: Collection[] | undefined;
	let customClass = '';
	export { customClass as class };

	export let bookmark: boolean = false;
</script>

<div
	class="{customClass} w-full sm:grid sm:grid-cols-2 sm:gap-x-4 gap-y-10 flex flex-col">
	{#each collections as collection, index}
		{#if index === 0 && bookmark}
			<div class="grid grid-cols-subgrid col-span-2">
				<CollectionBlock width="full" {collection} bookmark class=""></CollectionBlock>
			</div>
		{:else}
			<CollectionBlock width="full" {collection} class=""></CollectionBlock>
		{/if}
	{/each}
</div>