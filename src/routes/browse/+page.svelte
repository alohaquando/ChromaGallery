<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import type { PageData } from './$types';
	import Link from '$lib/components/links/Link.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TitleLarge from '$lib/components/typography/TitleLarge.svelte';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;

	let itemList = data.allItem;
	let collectionList = data.allCollection;

	// onMount(async () => {
	// 	itemStore
	// 		.getAllItems()
	// 		.then((itemsData) => {
	// 			itemList = itemsData;
	// 			console.log(itemList);
	//
	// 			// Do something with the items data
	// 		})
	// 		.catch((error) => {
	// 			// Handle errors
	// 			console.error('Error:', error);
	// 		});
	//
	// 	// Get All Collections
	// 	listStore
	// 		.getAllCollection()
	// 		.then((itemsData) => {
	// 			let collectionsss = itemsData;
	// 			console.log(collectionsss);
	// 		})
	// 		.catch((error) => {
	// 			// Handle errors
	// 			console.error('Error:', error);
	// 		});
	// });
</script>

<PageTitle>Browse</PageTitle>
<Button class="mb-12 mt-20" href="browse/search" icon="faMagnifyingGlass" width="full">Search</Button>

<div class="h-full flex flex-col justify-center gap-16">
	<!-- Collections -->
	<div class="h-full flex flex-col justify-center gap-12">
		<div class="w-full flex items-center gap-2">

			<TitleLarge class="shrink-0">Collections</TitleLarge>

		</div>


		<!-- scrolling  -->
		<CollectionList collections={collectionList} isCollection></CollectionList>
	</div>

	<!-- All items -->
	<div class="w-full flex flex-col justify-center gap-12">
		<div class="w-full flex items-center gap-2">

			<TitleLarge class="shrink-0">All Artworks</TitleLarge>

		</div>


		<!-- items display  -->
		<GridItem items={itemList}></GridItem>
	</div>
</div>
