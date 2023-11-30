<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
</script>

<Bg />
<div class="h-full w-full flex flex-col justify-center items-center gap-20 mb-14 mt-12">
	<DisplayLarge>Browse</DisplayLarge>

	<Button icon="faMagnifyingGlass">Search</Button>
</div>
<!-- Collections -->
<div class="h-full w-full flex flex-col justify-center gap-8 mb-20">
	<BodyLarge>Collections</BodyLarge>
	<!-- scrolling  -->
	<div class="w-full h-full flex items-center overflow-x-auto gap-4">
		<div class="min-w-[280px]">
			<BlockItem href="/" style="grid" itemNum={12} title="Ceramiche Precolombiane"></BlockItem>
		</div>
		<div class="min-w-[280px]">
			<BlockItem href="/" style="grid" itemNum={12} title="La ceramica in Europa dal XVI al XX"
			></BlockItem>
		</div>
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
