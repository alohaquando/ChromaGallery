<script lang="ts">
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import { itemList2, itemList1, item5 } from '$lib/data/exampleData';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';
	import type { Item } from '$lib/data/dataModels';
	import { onMount } from 'svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	let list1 = itemList1;
	let list2 = itemList2;

	export let data: PageData;

	let items: Item[] = data.items;
	let searchTerm = '';
	let searchResults: any; // Store search results

	let searchToggled: boolean = false;
	$:searchToggled;

	let featured = items.filter((item) => item.isFeatured === true);
	let nonFeatured = items.filter((item) => item.isFeatured === false);
	let isLoading = false;
	$: nonFeatured, fetchData();

	async function fetchData() {
		try {
			const response = await fetch(`/curator/items/featured?q=${searchTerm}`);
			searchResults = await response.json(); // Store fetched search results
			nonFeatured = searchResults.items.filter((item: Item) => featured.includes(item));
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

	const handleEdit = ({ formData }) => {
		isLoading = true;
		formData.set(
			'isFeaturedItemList',
			featured.map((item) => item.id)
		);

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};
</script>

<form action="?/edit" enctype="multipart/form-data" method="POST" use:enhance={handleEdit}>
	<LoadingOverlay bind:isLoading></LoadingOverlay>
	<div class="gap-6 flex flex-col">
		<DragList
			bind:items={featured}
			bind:output={nonFeatured}
			button="remove"
			itemLimit={3}
			placeholder={3}
			type="checkbox"
		></DragList>

		<Divider></Divider>

		{#if !searchToggled}
			<Button type="button" class="w-full" icon="faSearch" on:click={handleToggleSearch}>Find list</Button>
		{:else}
			<TextField bind:value={searchTerm} id="search" name="search" placeholder="Search for list"
								 on:blur={handleBlur}
								 on:input={fetchData}
			></TextField>
		{/if}

		{#if nonFeatured.length !== 0}
			<DragList
				bind:items={nonFeatured}
				bind:output={featured}
				button="add"
				outLimit={3}
				type="checkbox"
			></DragList>
		{:else}
			<div class="mt-12 flex flex-col items-center w-full">
				<Body>No result found</Body>
			</div>
		{/if}

		<Button disabled={isLoading} sticky type="submit">
			{isLoading ? 'Loading...' : 'Save'}
		</Button>
	</div>
</form>
