<script lang="ts">
    import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
    import Fab from '$lib/components/controls/Fab.svelte';
    import InfoChip from '$lib/components/controls/InfoChip.svelte';
    import HeroImage from '$lib/components/item/HeroImage.svelte';
    import BG from '$lib/components/backgrounds/BG.svelte';
    import { item1, item2, item3 } from '$lib/../data.js';
    import { setContext } from 'svelte';
</script>

<!--Replace div -> Background-->
<div class="w-full h-[80vh] pt-[5vh] flex flex-col items-center justify-between">
    <div class="flex flex-col items-center gap-10 w-full grow justify-center">
        <DisplayLarge class="relative -left-[10%]">The place</DisplayLarge>
        <DisplayLarge class="relative -left-[2%]">for</DisplayLarge>
        <DisplayLarge class="relative left-[10%]">all things</DisplayLarge>
        <DisplayLarge class="relative">artistic</DisplayLarge>
    </div>
    <div class="flex w-full justify-between max-w-3xl mt-32">
        <Fab class="" href="/sign-in" icon="faUser" size="lg">Sign me<br />in</Fab>
        <Fab class="-mt-20" href="/browse" icon="faSearch" size="lg">Show me<br />more</Fab>
        <Fab class="mt-8" href="/" icon="faPlay" size="lg">Relax me</Fab>
    </div>
    <InfoChip class="opacity-50" design="text" icon="faAngleDown">Scroll for more</InfoChip>
</div>

<div class="w-full h-20 mt-7"></div>
<DisplayLarge class="mt-20"></DisplayLarge>
<div class="w-full flex flex-col gap-10">
    <HeroImage data={item1} hideYear></HeroImage>
    <HeroImage data={item2} hideYear></HeroImage>
    <HeroImage data={item3} hideYear></HeroImage>
</div>