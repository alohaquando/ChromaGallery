<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
    import Display from '$lib/components/typography/Display.svelte';
    import Title from '$lib/components/typography/Title.svelte';
    import Button from '$lib/components/controls/Button.svelte';
</script>

<Bg randomized/>

<Display class="flex flex-col items-center justify-center">Sheen Hahn</Display>


<div class="flex flex-col items-center justify-center">
    <Button class="mt-8 mb-12 mx-auto" icon="faCog">Account settings</Button>
</div>

<div class="flex flex-col items-center justify-center gap-4">
<Title>View your bookmarks and lists</Title>
<Title>on Chroma Gallery</Title>
</div>


<SiteSwitcher class="mt-28"></SiteSwitcher>