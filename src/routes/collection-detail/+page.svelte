<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Grid from '$lib/components/item/Grid.svelte';
	export let number = 0;

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

<Bg></Bg>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6"
	>The coolest collection</Headline
>

<Headline class="text-white  text-opacity-50">{number} item{number > 1 ? 's' : ''}</Headline>
<BodyLarge class="pt-6 pb-12"
	>This is a special collection in which I collect special things</BodyLarge
>

<Grid data={dataInput}></Grid>
