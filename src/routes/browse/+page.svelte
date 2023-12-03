<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Block from '$lib/components/block/Block.svelte';
	import Grid from '$lib/components/item/Grid.svelte';

	let dataInput = [
		{
			href: '/',
			src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
			title: ''
		},
		{
			href: '/',
			src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
			title: ''
		},
		{
			href: '/',
			src: 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/free-art-resources-3.jpg',
			title: ''
		},
		{
			href: '/',
			src: 'https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg',
			title: ''
		}
	];
</script>

<Bg randomized/>

<PageTitle>Browse</PageTitle>
<Button width="full" icon="faMagnifyingGlass" class="mb-12 mt-20">Search</Button>

<div class="h-full flex flex-col justify-center gap-14">
<!-- Collections -->
<div class="h-full flex flex-col justify-center gap-8">
	<BodyLarge>Collections</BodyLarge>
	<!-- scrolling  -->
	<div class="flex items-center overflow-x-scroll gap-4 scrollbar-none">
			<BlockItem
				src1="https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg"
				alt1=""
				src2="https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg"
				alt2=""
				src3="https://www.artmajeur.com/medias/hero_new/v/a/van-lanigh/artwork/17330824_melting-down.jpg"
				alt3=""
				href="/"
				style="grid"
				itemNum={12}
				title="Ceramiche Precolombiane"></BlockItem>
			<BlockItem src1="" alt1="" src2="" alt2="" src3="" alt3="" href="/" style="grid" itemNum={12} title="La ceramica in Europa dal XVI al XX"></BlockItem>
		<Fab icon="" size="lg" class="translate-y-[-25%] shrink-0">View all</Fab>
	</div>
</div>
<!-- All items -->
<div class="w-full flex flex-col justify-center gap-8">
	<BodyLarge>All items</BodyLarge>

	<Grid data={dataInput}></Grid>
	</div>
</div>