<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { modal, previousState } from '$lib/stores/modal';
	import { onMount } from 'svelte';

	let link: string | undefined;
	export { link as href };
	export let title = '';
	export let exit: boolean = false;
	export let button: string | undefined;
	export let buttonFunction = () => {
	};
	export let animation = '';

	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} {animation} relative top-5 z-40 w-screen h-[95vh] backdrop-blur-md bg-gradient-to-b from-neutral-900 via-black/40 via-90% to-black/0 flex border-t-4 border-white/20 flex-col"
>
	<HeaderBack {button} {buttonFunction} {exit} href="{link}" isRelative
							responsive={false}></HeaderBack>
	<Headline class="px-6 mt-4">{title}</Headline>
	<div class="mt-12 px-6">
		<slot />
	</div>
</div>
