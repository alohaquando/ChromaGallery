<!--suppress ALL -->

<script lang="ts">
	import type { Collection, List } from '../../data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import RowCollection from '$lib/components/item/RowCollection.svelte';

	export let rowType: boolean = false;
	export let type: 'checkbox' | 'action' | undefined;
	export let curator: boolean | undefined;
	export let button: 'add' | 'destructive' | 'link' | undefined;
	export let icon: string | undefined;
	export let collections: Collection[] | List[] | undefined;
	if (!collections) {
		collections = [];
	}
	let customClass = '';
	export { customClass as class };
	export let hideSubtitle: boolean = false;
	export let design: 'grid' | 'single' = 'grid';
	export let wrap: boolean = false;
	let wrapClass = '';
	if (wrap) {
		wrapClass = 'flex-wrap';
	}
	export let width: 'fixed' | 'full' = 'fixed';
	export let isCollection: boolean = false;
	export let hasLink: boolean = true;
	export let selected: string[] = [];
	const handleSelectList = (event: any) => {
		let itemId = event.detail.currentTarget.id;
		let listCheckbox = document.getElementById(itemId);
		if (selected.includes(itemId)) {
			selected = selected.filter((id) => id !== itemId);
		} else {
			selected = [...selected, itemId];
		}

		console.log(selected);
	};
</script>

<div class={customClass}>
	{#if collections}
		{#if rowType}
			<div class="flex flex-col gap-2">
				{#each collections as collection}
					<RowCollection on:select={handleSelectList} id="{collection.id}" {hasLink} {icon} {button} {curator} {type}
												 {collection}></RowCollection>
				{/each}
			</div>
		{:else}
			<div
				class="{customClass} flex items-center overflow-y-clip overflow-x-scroll gap-x-4 gap-y-10 scrollbar-none {wrapClass}"
			>
				{#each collections as collection}
					<CollectionBlock {isCollection} {curator} {width} {hideSubtitle} class="shrink-0" {collection}
													 {design}
					></CollectionBlock>
				{/each}
				{#if width === 'fixed'}
					<Fab class="mr-10 shrink-0 relative -mt-10" icon="" size="lg" href="/user/collection"
					>View all
					</Fab
					>
				{/if}
			</div>
		{/if}
	{/if}
</div>
