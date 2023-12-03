<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
</script>

<Bg />

<PageTitle>Browse</PageTitle>
<Button width="full" icon="faMagnifyingGlass" class="mb-12 mt-20">Search</Button>

<div class="h-full flex flex-col justify-center gap-14">
<!-- Collections -->
<div class="h-full flex flex-col justify-center gap-8">
	<BodyLarge>Collections</BodyLarge>
	<!-- scrolling  -->
	<div class="flex items-center overflow-x-scroll gap-4">
			<BlockItem src1="" alt1="" src2="" alt2="" src3="" alt3="" href="/" style="grid" itemNum={12} title="Ceramiche Precolombiane"></BlockItem>
			<BlockItem src1="" alt1="" src2="" alt2="" src3="" alt3="" href="/" style="grid" itemNum={12} title="La ceramica in Europa dal XVI al XX"></BlockItem>
		<Fab icon="" size="lg" class="translate-y-[-25%]">View all</Fab>
	</div>
</div>
<!-- All items -->
<div class="w-full flex flex-col justify-center gap-8">
	<BodyLarge>All items</BodyLarge>
	<div class="w-full h-screen flex items-center gap-4">
		<div class="w-1/2 h-full flex flex-col gap-4">
			<HeroImage alt="Image Alt Text" class="h-[184px] bg-red-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[88px] bg-blue-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[144px] bg-red-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[144px] bg-blue-500"></HeroImage>
		</div>
		<!-- ----------- -->
		<div class="w-1/2 h-full flex flex-col gap-4">
			<HeroImage alt="Image Alt Text" class="h-[112px] bg-red-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[88px] bg-blue-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[184px] bg-red-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[88px] bg-blue-500"></HeroImage>
			<HeroImage alt="Image Alt Text" class="h-[88px] bg-red-500"></HeroImage>
		</div>
	</div>
</div>
</div>