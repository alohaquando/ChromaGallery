<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { onMount } from 'svelte';
	import type { Collection } from '$lib/data/dataModels';
	import CollectionList from '$lib/components/item/CollectionList.svelte';

	let searchTerm = '';
	let searchResults: any; // Store search results
	let items: Item[];
	let collections: Collection[];

	async function fetchData() {
		try {
			const response = await fetch(`/browse/search?q=${searchTerm}`);
			searchResults = await response.json(); // Store fetched search results
			items = searchResults.items;
			collections = searchResults.collections;
			console.log('Search results:', searchResults);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		fetchData();
	});
</script>

<TextField
	bind:value={searchTerm}
	id="search"
	name="search"
	on:input={fetchData}
	placeholder="Search..."
/>

<!--<div class="mt-6">-->
<!--	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 1" topDivider={false} />-->
<!--	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 2" topDivider={false} />-->
<!--	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 3" topDivider={false} />-->
<!--</div>-->

{#if items && collections}
	<div class="mt-9 flex flex-col gap-9">
		<div class="flex flex-col gap-5">
			<Title>Collections</Title>
			{#if collections.length > 0}
				<CollectionList rowType class="gap-2" {collections} type="action" />
			{:else}
				<Body><i>No collections found</i></Body>
			{/if}
		</div>

		<div class="flex flex-col gap-5">
			<Title>Items</Title>
			{#if items.length > 0}
				<DragList class="gap-2" {items} type="action"></DragList>
			{:else}
				<Body><i>No items found</i></Body>
			{/if}
		</div>
	</div>
{:else}
	<div class="mt-12 flex flex-col items-center w-full">
		<Body>No result found</Body>
	</div>
{/if}
