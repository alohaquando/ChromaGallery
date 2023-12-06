<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	export let buttonText = '';
	export let title = '';

	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} absolute -bottom-3 left-0 z-50 w-full h-full backdrop-blur-md bg-gradient-to-b from-neutral-900 to-black/50 flex border-t-4 border-white/20 animate-flyUp flex-col"
>
	<HeaderBack hasButton responsive={false}>{buttonText}</HeaderBack>
	<Headline class="px-6 mt-4">{title}</Headline>
	<div class="mt-8 gap-4 px-6">
		<slot />
	</div>
</div>
