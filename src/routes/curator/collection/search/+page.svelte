<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import { onMount } from 'svelte';
	import type { Collection } from '$lib/data/dataModels';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	let searchTerm = '';
	let searchResults: any; // Store search results
	let collections: Collection[];

	async function fetchData() {
		try {
			const response = await fetch(`/browse/search?q=${searchTerm}`);
			searchResults = await response.json(); // Store fetched search results
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

{#if collections && collections.length > 0}
	<CollectionList class="gap-4 mt-9" {collections} rowType />
{:else}
	<div class="mt-12 flex flex-col items-center w-full">
		<Body>No result found</Body>
	</div>
{/if}
