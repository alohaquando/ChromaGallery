<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import type { PageData } from './$types';
	import Link from '$lib/components/links/Link.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

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

			<Link class="shrink-0" href="/collection" type="title-lg">Collections</Link>

		</div>


		<!-- scrolling  -->
		<CollectionList collections={collectionList} isCollection></CollectionList>
	</div>

	<!-- All items -->
	<div class="w-full flex flex-col justify-center gap-12">
		<div class="w-full flex items-center gap-2">

			<Link class="shrink-0" href="items" type="title-lg">All Artworks</Link>

		</div>


		<!-- items display  -->
		<GridItem itemLimit={10} items={itemList}></GridItem>
	</div>

	<div class="w-full flex justify-center items-center gap-10">
		<Divider />
		<Link class="shrink-0" href="/items" type="title">See more . . .</Link>
		<Divider />
	</div>
</div>
