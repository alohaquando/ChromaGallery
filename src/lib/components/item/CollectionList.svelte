<!--suppress ALL -->

<script lang="ts">
	import type { Collection, List } from '../../data/dataModels';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import RowCollection from '$lib/components/item/RowCollection.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';


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

	let bookmark: List;
	$: if (!isCollection) {
		bookmark = collections.find(list => list.id === 'bookmark');
		collections = collections.filter(list => list.id !== 'bookmark');
	}

	//lazy loading
	const totalItems = collections?.length; // Total number of items
	const itemsPerPage = 4; // Number of items to display per page

	// Replace this with your actual array of items
	const loadedItems = writable([]);

	let currentPage = 0;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Load more items when user scrolls to the bottom
						loadMoreItems();
					}
				});
			},
			{ threshold: 0 } // Trigger when the entire target is in view
		);

		const target = document.querySelector('#loadMoreTrigger');
		// @ts-ignore
		observer.observe(target);

		return () => observer.disconnect(); // Cleanup when component is unmounted
	});

	function loadMoreItems() {
		const startIndex = currentPage * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		if (totalItems && startIndex < totalItems) {
			const nextItems = getNextItems(startIndex, endIndex);
			loadedItems.update((prevItems) => [...prevItems, ...nextItems]);
			currentPage++;
			console.log(nextItems);
		}
	}

	function getNextItems(startIndex: number, endIndex: number) {
		// Replace this with your logic to get the next chunk of items
		return collections?.slice(startIndex, endIndex);
	}
</script>

{#if collections}
	{#if rowType}
		<div class="{customClass} w-full flex flex-col gap-2">
			{#if (!isCollection) && bookmark}
				<RowCollection on:select={handleSelectList} id="bookmark" {hasLink} {icon} {button}
											 {curator} {type}
											 bookmark
											 collection={bookmark}></RowCollection>
			{/if}
			{#each $loadedItems as collection}
				<RowCollection {isCollection} on:select={handleSelectList} id="{collection.id}" {hasLink} {icon} {button}
											 {curator} {type}
											 {collection}></RowCollection>
			{/each}
		</div>

		<div class="relative -bottom-50 bg-black h-2" id="loadMoreTrigger"></div>
	{:else}
		<div
			class="{customClass} w-full flex items-center overflow-y-clip overflow-x-auto gap-x-4 gap-y-10 {wrapClass} pb-8"
		>
			{#each collections as collection}
				<CollectionBlock {isCollection} {curator} {width} {hideSubtitle} class="shrink-0" {collection}
												 {design}
				></CollectionBlock>
			{/each}
			{#if width === 'fixed'}
				<Fab class="mr-10 shrink-0 relative -mt-10" icon="" size="lg" href="/collection"
				>View all
				</Fab
				>
			{/if}
		</div>
	{/if}
{/if}
