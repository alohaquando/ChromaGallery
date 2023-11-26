<script>
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
</script>

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
						 src="https://via.placeholder.com/342x272"></HeroImage>
	<HeroImage alt="" artist="Francesco Gennari" class="mt-12" name="Officine italiance del Rinascimento"
						 src="https://via.placeholder.com/342x272"></HeroImage>
	<HeroImage alt="" artist="Antoine Levi" class="mt-12" name="Ceramiche del Vicino Oriente antico"
						 src="https://via.placeholder.com/342x272"></HeroImage>
</div>