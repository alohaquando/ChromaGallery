<script>
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
</script>

<!--Replace div -> Background-->
<div class="w-full h-xl pt-16 flex flex-col items-center gap-10">
	<DisplayLarge class="relative -left-4">The place</DisplayLarge>
	<DisplayLarge class="relative -left-16">for</DisplayLarge>
	<DisplayLarge class="relative left-10">all things</DisplayLarge>
	<DisplayLarge class="relative -left-1">artistic</DisplayLarge>
	<div class="flex w-full justify-between mt-16">
		<Fab class="mt-16" icon="faUser" size="lg">Sign me in</Fab>
		<Fab class="" icon="faSearch" size="lg">Show me more</Fab>
		<Fab icon="faPlay" size="lg">Relax me</Fab>
	</div>
</div>