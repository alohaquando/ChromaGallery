<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import type { PageData } from './$types';
	import DragList from '$lib/components/item/DragList.svelte';
	import { handleAddMultipleToList } from '$lib/data/list';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import { onMount } from 'svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { goto } from '$app/navigation';
	import { handleAddMultipleItemToCollection } from '$lib/data/collection';

	export let data: PageData;

	let items = [];

	let selectedItems: string[] = [];

	let searchToggled: boolean = false;
	$:searchToggled;

	let searchTerm = '';
	let searchResults: any; // Store search results

	async function fetchData() {
		try {
			const response = await fetch(`/list/${data.slug}/add-items?q=${searchTerm}`);
			searchResults = await response.json(); // Store fetched search results
			items = searchResults.items.filter(item => !data.collection.items.includes(item.id));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		fetchData();
	});

	const handleToggleSearch = () => {
		searchToggled = true;
	};

	const handleBlur = () => {
		searchToggled = Boolean((searchTerm));
	};
</script>

<div class="flex justify-center items-center flex-col gap-6">
	{#if !searchToggled}
		<Button class="w-full" icon="faSearch" on:click={handleToggleSearch}>Find list</Button>
	{:else}
		<TextField bind:value={searchTerm} id="search" name="search" placeholder="Search for list"
							 on:blur={handleBlur}
							 on:input={fetchData}
		></TextField>
	{/if}

	{#if items.length !== 0}
		<DragList bind:selected={selectedItems} class="w-full gap-4" {items} type="checkbox"></DragList>
	{:else}
		<div class="mt-12 flex flex-col items-center w-full">
			<Body>No result found</Body>
		</div>
	{/if}

	<Button
		on:click={async() => { await handleAddMultipleItemToCollection(data.slug, selectedItems); await goto(`/items/${data.slug}`)}}
		sticky>Add to list
	</Button>
</div>
