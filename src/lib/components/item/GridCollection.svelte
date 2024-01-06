<script lang="ts">
	import type { Collection } from '$lib/data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';

	export let collections: Collection[] | undefined;
	let customClass = '';
	export { customClass as class };
</script>

<div class="{customClass} w-full flex gap-8 flex-wrap justify-start">
	{#each collections as collection}
		<CollectionBlock width="full" {collection} class=""></CollectionBlock>
	{/each}
</div>