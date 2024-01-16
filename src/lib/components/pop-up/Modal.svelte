<script lang="ts">
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	let link: string | undefined;
	export { link as href };
	export let title = '';
	export let exit: boolean = false;
	export let button: string | undefined;
	export let buttonFunction = () => {};
	export let animation = '';
</script>

<div
	class="{animation} container mx-auto pb-32 px-6 relative top-5 z-40 w-auto min-h-[95vh] bg-gradient-to-b from-neutral-900 via-black/40 via-90% to-black/0 rounded-t-3xl overflow-clip"
>
	<HeaderBack {button} {buttonFunction} {exit} href={link} isRelative noBackdrop responsive={false}
	></HeaderBack>
	<div class="container mx-auto px-6">
		<Headline class=" mt-4">{title}</Headline>
		<div class="mt-12">
			<slot />
		</div>
	</div>
</div>
