<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	export let data: PageData;

	let isLoading = false;

	let updatedList: string[] = [];
	const handleUpdatedList = (event) => {
		updatedList = event.detail.items.map((item) => item.id);
		console.log(updatedList);
	};
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;

		formData.set('collectionId', data.collectionId);

		formData.set('itemList', updatedList);

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};
</script>

<form
	action="?/edit"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}
>
	<Button disabled={isLoading} sticky type="submit" class="mb-10">
		{isLoading ? 'Loading...' : 'Save'}
	</Button>

	<!--<Button class="mb-6" icon="faMagifyingGlass" width="full">Find item</Button>-->
	<LoadingOverlay bind:isLoading></LoadingOverlay>
	{#await extractItems(data.collection)}
		<DragList class="gap-4" type="edit" placeholder={3} />
	{:then items}
		<DragList on:finalize={handleUpdatedList} class="gap-4" {items} type="edit"></DragList>
	{/await}
</form>
