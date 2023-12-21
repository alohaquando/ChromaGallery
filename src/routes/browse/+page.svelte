<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { allCollection } from '$lib/stores/data.js';
	import { defaultLayout } from '$lib/stores/pageLayout';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore';
	import { listStore } from '$lib/stores/listStore.js';

	defaultLayout();

	let itemList = [];
	onMount(async () => {
		itemStore
			.getAllItems()
			.then((itemsData) => {
				itemList = itemsData;
				console.log(itemList);

				// Do something with the items data
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});

		// Get All Collections
		listStore
			.getAllCollection()
			.then((itemsData) => {
				let collectionsss = itemsData;
				console.log(collectionsss);
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});
	});
</script>

<PageTitle>Browse</PageTitle>
<Button class="mb-12 mt-20" icon="faMagnifyingGlass" width="full">Search</Button>

<div class="h-full flex flex-col justify-center gap-14">
	<!-- Collections -->
	<div class="h-full flex flex-col justify-center gap-8">
		<BodyLarge>Collections</BodyLarge>
		<!-- scrolling  -->
		<CollectionList data={allCollection}></CollectionList>
	</div>
	<!-- All items -->
	<div class="w-full flex flex-col justify-center gap-8">
		<BodyLarge>All items</BodyLarge>

		<Grid data={itemList}></Grid>
	</div>
</div>
