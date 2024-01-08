<script lang="ts">
	import type { Collection } from '$lib/data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';

	export let collections: Collection[] | undefined;
	let customClass = '';
	export { customClass as class };

	export let bookmark: boolean = false;
</script>

<div class="{customClass} w-full md:grid-cols-2 md:gap-2 [&>:first-child]:col-span-2 [&>:first-child]:row-span-2">
	{#each collections as collection, index}
		{#if index === 0 && bookmark}
			<CollectionBlock width="full" {collection} bookmark class=""></CollectionBlock>
		{:else}
			<CollectionBlock width="full" {collection} class=""></CollectionBlock>
		{/if}
	{/each}
</div>