<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import Grid from '$lib/components/item/Grid.svelte';
	import type { Collection, Item } from '../../model.js';
	import CollectionList from '$lib/components/item/CollectionList.svelte';

	let item1: Item = {
		id: '1',
		title: 'A',
		subtitle: 'a',
		collection: 'Char',
		author: 'Kiet',
		src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg'
	};
	let item2: Item = {
		id: '2',
		title: 'B',
		subtitle: 'b',
		collection: 'Char',
		author: 'Kiet',
		src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg'
	};
	let item3: Item = {
		id: '3',
		title: 'C',
		subtitle: 'c',
		collection: 'Char',
		author: 'Shrimp',
		src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg'
	};

	let itemList = [item1, item2, item3];

	let collection1: Collection = {
		id: 'col1',
		title: 'Char',
		subtitle: 'Characters',
		itemList: itemList
	};

	let collection2: Collection = {
		id: 'col1',
		title: 'Char',
		subtitle: 'Characters',
		itemList: itemList
	};

	let collectionList: Collection[] = [collection1, collection2];
</script>

<Bg randomized />

<PageTitle>Browse</PageTitle>
<Button class="mb-12 mt-20" icon="faMagnifyingGlass" width="full">Search</Button>

<div class="h-full flex flex-col justify-center gap-14">
	<!-- Collections -->
	<div class="h-full flex flex-col justify-center gap-8">
		<BodyLarge>Collections</BodyLarge>
		<!-- scrolling  -->
		<CollectionList data={collectionList}></CollectionList>
	</div>
	<!-- All items -->
	<div class="w-full flex flex-col justify-center gap-8">
		<BodyLarge>All items</BodyLarge>

		<Grid data={itemList}></Grid>
	</div>
</div>