<script>
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
</script>

<HeroImage
	alt="Image Alt Text"
	artist="Srijon Chowdhury"
	class="my-4"
	href=""
	name="La sezione islamica"
	src="image-src.jpg"
	time="Circa 2315"
></HeroImage>

<div class="flex justify-between items-end">
	<div class="flex justify-between">
		<Button class="" icon="faPlus" type="submit">Add to list</Button>
		<Button class="ml-4" icon="faVolume" type="submit">Audio guide</Button>
	</div>
	<Fab icon="faStar"></Fab>
</div>

<div class=" text-white text-lg font-normal font-['Atkinson Hyperlegible'] leading-[27px] my-4">
	This ball sports a distinctive stripe pattern that results from an innovative manufacturing
	process. Plastic of two colours is blown into a mould using a method that prevents the colours
	from mixing. The ball is a by-product of a demonstration of the extrusion blow-mould machine
	invented by the Hong Kong engineer Chiang Chen. The development of the two-colour production
	technique is often attributed to Chiang as well. This process was inspired by his recollection of
	the confluence of the Yangtze River and its tributary, the Jialing, in mainland China: one was
	muddy and the other clear, but the two currents remained distinct rather than blending together.
	Despite the success of his manufacturing method, Chiang was never able to file a patent for it,
	and it was soon widely imitated to create other types of products.
</div>

<ListItem href="/" leadingText="Object ID" trailingText="HEE-NC-57001" />
<ListItem href="/" leadingText="Place made" trailingText="Vietnam, Ho Chi Minh City" />
<ListItem href="/" leadingText="Object IDNamed collection" trailingText="Harold E. Edgerton Collection" />

<div class="text-white text-xl font-normal font-['Atkinson Hyperlegible'] leading-[30px]">
	Related
</div>

<HeroImage
	alt="Image Alt Text"
	artist="Srijon Chowdhury"
	class="my-4"
	href="item-link"
	name="Related Contents"
	src="image-src.jpg"
	time="Circa 2315"
></HeroImage>

<HeroImage
	alt="Image Alt Text"
	artist="Srijon Chowdhury"
	class="my-4"
	href="item-link"
	name="Related Contents"
	src="image-src.jpg"
	time="Circa 2315"
></HeroImage>
