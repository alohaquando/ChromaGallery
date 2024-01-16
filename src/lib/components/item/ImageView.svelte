<script lang="ts">
	import { imageFullView, resetImageFullView } from '$lib/stores/imageFullView';
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';

	export let src = '';
	export let alt = '';
</script>

{#if $imageFullView.toggled}
	<HeaderBack
		buttonClass="bg-neutral-700 !border-neutral-500 hover:!border-neutral-700 !text-neutral-300 hover:!text-black"
		class="!absolute top-0 left-0 z-50 !blur-0"
		exit
		responsive={false}
		exitButton={resetImageFullView}
	></HeaderBack>
	<div class="w-full h-full top-0 left-0 fixed bg-black z-40 flex justify-center items-center">
		<img {alt} class="w-full max-h-full object-contain" {src} />
	</div>
{/if}
