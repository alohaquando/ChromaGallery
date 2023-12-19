<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import BodySmall from '$lib/components/typography/BodySmall.svelte';
</script>

<Bg randomized/>

<div class="w-full h-full">
<TextField id="" name="" value="Text" icon="faXmark"></TextField>
</div>

<div class="mt-12 flex flex-col items-center w-full">
    <BodySmall>No result found</BodySmall>
</div>