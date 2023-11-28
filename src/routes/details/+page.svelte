<script>
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
</script>

<HeroImage
	src="image-src.jpg"
	href="item-link"
	name="La sezione islamica"
	artist="Srijon Chowdhury"
	time="Circa 2315"
	alt="Image Alt Text"
	class="my-4"
></HeroImage>

<div class="flex justify-between my-4">
	<div class="flex justify-between">
		<Button type="submit" icon="faPlus" class="mr-2">Add to list</Button>
		<Button type="submit" icon="faVolume" class="ml-2">Audio guide</Button>
	</div>
	<Fab icon="faStar"></Fab>
</div>

<BodyLarge
	>This ball sports a distinctive stripe pattern that results from an innovative manufacturing
	process. Plastic of two colours is blown into a mould using a method that prevents the colours
	from mixing. The ball is a by-product of a demonstration of the extrusion blow-mould machine
	invented by the Hong Kong engineer Chiang Chen. The development of the two-colour production
	technique is often attributed to Chiang as well. This process was inspired by his recollection of
	the confluence of the Yangtze River and its tributary, the Jialing, in mainland China: one was
	muddy and the other clear, but the two currents remained distinct rather than blending together.
	Despite the success of his manufacturing method, Chiang was never able to file a patent for it,
	and it was soon widely imitated to create other types of products.</BodyLarge
>

<ListItem leadingText="Object ID" trailingText="HEE-NC-57001" />
<ListItem leadingText="Place made" trailingText="Vietnam, Ho Chi Minh City" />
<ListItem leadingText="Object IDNamed collection" trailingText="Harold E. Edgerton Collection" />

<div
	class="text-white text-xl font-normal font-['Atkinson Hyperlegible'] leading-[30px] my-[32px] inline-block align-middle"
>
	Related
</div>

<HeroImage
	src="image-src.jpg"
	href="item-link"
	name="Related Contents"
	artist="Srijon Chowdhury"
	time="Circa 2315"
	alt="Image Alt Text"
	class="my-4"
></HeroImage>

<HeroImage
	src="image-src.jpg"
	href="item-link"
	name="Related Contents"
	artist="Srijon Chowdhury"
	time="Circa 2315"
	alt="Image Alt Text"
	class="my-4"
></HeroImage>
