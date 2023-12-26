<script lang="ts">
	import { imageFullView } from '$lib/stores/imageFullView';
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
</script>

<div class="w-full h-full top-0 left-0 fixed bg-black z-50 flex justify-center items-center">
	<HeaderBack class="!absolute top-0 left-0" exit responsive={false}></HeaderBack>
	<img alt={$imageFullView.alt} class="w-full max-h-full" src={$imageFullView.src} />
</div>
