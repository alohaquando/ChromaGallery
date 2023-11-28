<script>
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
</script>

<BG randomized design="top-large"/>

<!--Replace div -> Background-->
<div class="w-full h-xl pt-16 flex flex-col items-center gap-10">
	<DisplayLarge class="relative -left-4">The place</DisplayLarge>
	<DisplayLarge class="relative -left-16">for</DisplayLarge>
	<DisplayLarge class="relative left-10">all things</DisplayLarge>
	<DisplayLarge class="relative -left-1">artistic</DisplayLarge>
	<div class="flex w-full justify-between mt-32">
		<Fab class="" icon="faUser" size="lg">Sign me in</Fab>
		<Fab class="-mt-20" icon="faSearch" size="lg">Show me more</Fab>
		<Fab class="mt-8" icon="faPlay" size="lg">Relax me</Fab>
	</div>
	<InfoChip class="!bg-transparent" icon="faAngleDown">Scroll for more</InfoChip>
	<div class="w-full h-20 mt-7"></div>
	<DisplayLarge class="mt-20"></DisplayLarge>
	<HeroImage alt="" artist="Olve Sande" class="mt-12" name="La ceramica italiana del Novecento"
						 src="https://blog.artsper.com/wp-content/uploads/2022/06/44151m.jpg"></HeroImage>
	<HeroImage alt="" artist="Francesco Gennari" class="mt-12" name="Officine italiance del Rinascimento"
						 src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/de1bbf90617233.5e1c78d58d809.jpg"></HeroImage>
	<HeroImage alt="" artist="Antoine Levi" class="mt-12" name="Ceramiche del Vicino Oriente antico"
						 src="https://theartofeducation.edu/wp-content/uploads/2022/10/VanGoghLegoMeme.jpeg"></HeroImage>
</div>