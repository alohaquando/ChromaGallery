<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	export let title = '';
	export let exit: boolean = false;
	export let button: string | undefined;
	export let destructive: string | undefined;
	export let transition: boolean = true;

	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} relative top-0 left-0 z-40 w-screen h-full backdrop-blur-md bg-gradient-to-b from-neutral-900 to-black flex border-t-4 border-white/20 {transition? 'animate-flyUp' : ''} flex-col"
>
	<HeaderBack {button} {destructive} {exit} isRelative
							responsive={false}></HeaderBack>
	<Headline class="px-6 mt-4">{title}</Headline>
	<div class="mt-12 px-6">
		<slot />
	</div>
</div>
