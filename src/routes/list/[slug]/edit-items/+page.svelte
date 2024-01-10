<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { extractItems } from '$lib/data/item';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	export let data;
	let list = data.list;
	let itemList = extractItems(list);
	console.log(data.param);

	let isLoading = false;

	let updatedList: string[] = [];
	const handleUpdatedList = (event) => {
		updatedList = event.detail.items.map(item => item.id);
		console.log(updatedList);
	};
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;

		formData.set("listId",data.listId)
		formData.set("userId", data.userId)
		formData.set('itemList', updatedList)

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
<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" href="edit-items/search" icon="faSearch" >Find item</Button>
	{#await itemList}
		A
	{:then items}
		<DragList on:finalize={handleUpdatedList} class="w-full gap-4" items={items} type="edit"></DragList>
	{/await}
	<LoadingOverlay bind:isLoading={isLoading}></LoadingOverlay>


	<Button disabled={isLoading} sticky type="submit" class="mb-10">
		{isLoading ? 'Loading...' : 'Save'}
	</Button>
</div>
</form>