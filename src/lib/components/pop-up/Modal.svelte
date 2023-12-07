<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	export let title = '';
	export let exit: boolean = false;
	export let hasButton: boolean = false;
	export let buttonMessage: string | undefined;
	export let hasDestructive: boolean = false;
	export let destructiveMessage: string | undefined;
	export let transition: boolean = true;

	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} absolute -bottom-3 left-0 z-40 w-full h-full backdrop-blur-md bg-gradient-to-b from-neutral-900 to-black flex border-t-4 border-white/20 {transition? 'animate-flyUp' : ''} flex-col"
>
	<HeaderBack {buttonMessage} {destructiveMessage} {exit} {hasButton} {hasDestructive} isRelative
							responsive={false}></HeaderBack>
	<Headline class="px-6 mt-4">{title}</Headline>
	<div class="mt-12 px-6">
		<slot />
	</div>
</div>
