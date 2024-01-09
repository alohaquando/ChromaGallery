<script lang="ts">
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import { itemList2, itemList1, item5 } from '$lib/data/exampleData';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	let list1 = itemList1;
	let list2 = itemList2;

	export let data: PageData;

	let featured = (data.items).filter(item => item.isFeatured === true);
	let nonFeatured = (data.items).filter(item => item.isFeatured === false);
	$:featured, console.log(featured)
	let isLoading = false;

	let updatedList: string[] = [];

	const handleEdit= ({ formData })  => {
			isLoading = true
			formData.set("isFeaturedItemList",featured.map(item => item.id))

			return async ({ update }) => {
				await update();
				isLoading = false;
			};

	}
</script>
<form
	action="?/edit"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleEdit}
>
<LoadingOverlay bind:isLoading={isLoading}></LoadingOverlay>
<div class="gap-6 flex flex-col">
	<DragList bind:items={featured} bind:output={nonFeatured} button="remove" itemLimit={3} placeholder={3}
						type="checkbox"
	></DragList>

	<Divider></Divider>

	<Button class="w-full px-6" icon="faMagnifyingGlass">Find item</Button>

	<DragList bind:items={nonFeatured} bind:output={featured} button="add" outLimit={3} type="checkbox"></DragList>


	<Button disabled={isLoading} sticky type="submit">
		{isLoading ? 'Loading...' : 'Save'}
	</Button>
</div>
</form>