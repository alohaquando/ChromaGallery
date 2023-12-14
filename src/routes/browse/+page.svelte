<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { itemList1, allCollection } from '../../data.js';
	import { defaultLayout } from '$lib/stores/pageLayout';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore';

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