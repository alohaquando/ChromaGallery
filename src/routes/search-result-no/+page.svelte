<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import BodySmall from '$lib/components/typography/BodySmall.svelte';
</script>

<!--!<div class="w-screen h-screen backdrop-blur-sm fixed"></div>-->
<Bg randomized/>

<div class="mt-6 w-full h-full">
<TextField id="" name="" placeholder="Text"></TextField>


<div class="mt-12 flex flex-col items-center w-full">
    <BodySmall>No result found</BodySmall> 
</div>
</div>
