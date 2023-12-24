<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
    import Fab from '$lib/components/controls/Fab.svelte';
    import Display from '$lib/components/typography/Display.svelte';
    import Title from '$lib/components/typography/Title.svelte';
</script>

<Bg randomized/>

<Display class="flex flex-col items-center justify-center">Curators only</Display>

<div class="flex flex-col items-center justify-center mt-20 gap-4">
<Title>These pages are only</Title>
<Title>accessible by a curator account</Title>
</div>

<div class="flex justify-center mt-32">
	<div class="flex gap-9">
		<Fab class="-mt-20" href="" icon="faUserCircle" size="lg">Sign me<br />in</Fab>
		<Fab href="" icon="faSparkles" size="lg">Become a<br />member</Fab>
	</div>
</div>

<SiteSwitcher class="mt-28"></SiteSwitcher>