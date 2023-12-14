<!--suppress ALL -->

<script lang="ts">
	import type { Comment } from 'postcss';
	import type { Collection, List } from '../../../model';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import RowCollection from '$lib/components/item/RowCollection.svelte';

	export let data: Collection[] | List[];
	export let rowType: boolean = false;

	let customClass = '';
	export { customClass as class };

	export let hideSubtitle: boolean = false;

	let blockStyle: 'grid' | 'single' = 'grid';
	export { blockStyle as style };

	export let wrap: boolean = false;
	let wrapClass = '';
	if (wrap) {
		wrapClass = 'flex-wrap';
	}

	export let width: 'fixed' | 'full' = 'fixed';
</script>

{#if rowType}
	<div class="{customClass} flex flex-col">
		{#each data as collection}
			<RowCollection data={collection}></RowCollection>
		{/each}
	</div>
{:else}
	<div
		class="{customClass} flex items-center overflow-y-clip overflow-x-scroll gap-x-4 gap-y-10 scrollbar-none {wrapClass}">
		{#each data as collection}
			<CollectionBlock {width} {hideSubtitle} class="shrink-0" data={collection} style={blockStyle}></CollectionBlock>
		{/each}
		{#if (width === 'fixed')}
			<Fab class="mr-10 shrink-0 relative -mt-10" icon="" size="lg">View all</Fab>
		{/if}
	</div>
{/if}