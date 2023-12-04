<script lang="ts">
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Grid from '$lib/components/item/Grid.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
	import type { Item } from '../../model.js';
	import type { Collection } from '../../model.js';

	let item1: Item = {
		id: '1',
		title: 'A',
		subtitle: 'a',
		collection: 'Char',
		author: 'Kiet',
		src: '',
		time: 'TOMORROW',
		description: 'idkman'
	};
	let item2: Item = {
		id: '2',
		title: 'B',
		subtitle: 'b',
		collection: 'Char',
		author: 'Kiet',
		src: '',
		time: 'TOMORROW',
		description: 'idkman'
	};
	let item3: Item = {
		id: '3',
		title: 'C',
		subtitle: 'c',
		collection: 'Char',
		author: 'Kiet',
		src: '',
		time: 'TOMORROW',
		description: 'idkman'
	};

	let itemList = [item1, item2, item3];

	let collection: Collection = {
		id: 'col1',
		title: 'Char',
		subtitle: 'Characters',
		itemList: itemList
	};

	// let dataInput = [
	// 	{
	// 		href: '/',
	// 		src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
	// 		title: ''
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
	// 		title: ''
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
	// 		title: ''
	// 	},
	// 	{
	// 		href: '/',
	// 		src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
	// 		title: ''
	// 	}
	// ];
</script>

<BG randomized />
<!--<PageTitle>A Title</PageTitle>-->
<!--<HeroImage src="https://via.placeholder.com/342x272" name="Shrimp" artist="Shrimp" time="1:43 AM 11/26/2023"></HeroImage>-->

<Block data={item1} stretch={false}></Block>
<CollectionBlock style="grid" data={collection}></CollectionBlock>

<!--<div class="gap-5 flex mt-5">-->
<!--<Link type="body">display</Link>-->
<!--<Link type="title">display</Link>-->
<!--<Link type="headline">display</Link>-->
<!--<Link type="display">display</Link>-->
<!--</div>-->

<!--<Block icon></Block>-->
<!--<Block icon bookmark></Block>-->
<!--<div class="h-28 w-36 flex">-->
<!--	<Block bookmark></Block>-->
<!--</div>-->
<!--<div class="h-72 w-96 flex">-->
<!--	<Block src="https://via.placeholder.com/342x272"></Block>-->
<!--</div>-->

<!--<Modal buttonText="Buton" title="Modao"></Modal>-->

<!--<Socials design="facebook"></Socials>-->
<!--<Socials design="google" signup={false}></Socials>-->
<!--<Socials design="apple"></Socials>-->

<!--<Dialog title="Warning" text="COOKIES!!!!! !!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!!" option1="Ignore" option2="Accept"></Dialog>-->

<!--<Grid data={dataInput}></Grid>-->
