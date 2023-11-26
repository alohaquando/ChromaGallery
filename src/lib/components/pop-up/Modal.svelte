<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	export let buttonText = '';
	export let title = '';
</script>
<div
	class="fixed -bottom-3 left-0 z-50 w-full h-full backdrop-blur-xl bg-gradient-to-b from-neutral-900 to-black/90 flex border-t-4 border-white/20 animate-fly flex-col">
	<HeaderBack hasButton responsive=false>{buttonText}</HeaderBack>
	<Headline class="p-6">{title}</Headline>
</div>