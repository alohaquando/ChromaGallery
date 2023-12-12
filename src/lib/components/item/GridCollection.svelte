<script lang="ts">
	import type { Collection } from '$lib/../model';
	import { collection2, allCollection } from '../../../data';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';

	export let data: Collection[] | undefined = allCollection;
	let customClass = '';
	export { customClass as class };
</script>


<div class="{customClass} w-full flex gap-8 flex-wrap justify-start">
	{#each data as collection}
		<CollectionBlock data={collection}></CollectionBlock>
	{/each}
</div>