<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { extractItems } from '$lib/data/item';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';
	import { onMount } from 'svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let data;
	let bookmark = data.bookmark;
	let itemList = extractItems(bookmark);
	console.log(data.param);

	let isLoading = false;

	let updatedList: string[] = [];
	const handleUpdatedList = (event) => {
		updatedList = event.detail.items.map((item) => item.id);
		console.log(updatedList);
	};
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;

		formData.set('listId', data.listId);
		formData.set('userId', data.userId);
		formData.set('itemList', updatedList);

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};

	let searchToggled: boolean = false;
	$: searchToggled;

	let searchTerm = '';
	let searchResults: any; // Store search results

	async function fetchData() {
		try {
			const response = await fetch(`/list/bookmark/edit-items?q=${searchTerm}`);
			searchResults = await response.json(); // Store fetched search results
			itemList = searchResults.items.filter((item) => data.bookmark.items.includes(item.id));
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
		searchToggled = Boolean(searchTerm);
	};
</script>

<form
	action="?/edit"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}
>
	<div class="flex justify-center items-center flex-col gap-6">
		{#if !searchToggled}
			<Button class="w-full" icon="faSearch" on:click={handleToggleSearch}>Find list</Button>
		{:else}
			<TextField
				bind:value={searchTerm}
				id="search"
				name="search"
				placeholder="Search for list"
				on:blur={handleBlur}
				on:input={fetchData}
			></TextField>
		{/if}
		{#await itemList}
			<DragList placeholder={3} class="w-full" type="edit"></DragList>
		{:then items}
			{#if items.length !== 0}
				<DragList on:finalize={handleUpdatedList} class="w-full gap-4" {items} type="edit"
				></DragList>
			{:else}
				<div class="mt-12 flex flex-col items-center w-full">
					<Body>No result found</Body>
				</div>
			{/if}
		{/await}
		<LoadingOverlay bind:isLoading></LoadingOverlay>

		<Button class="mb-10" disabled={isLoading} sticky type="submit">
			{isLoading ? 'Loading...' : 'Save'}
		</Button>
	</div>
</form>
