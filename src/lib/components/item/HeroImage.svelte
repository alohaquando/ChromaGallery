<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Block from '$lib/components/block/Block.svelte';

	let imgSrc: string = '';
	export { imgSrc as src };
	let itemLink: string = '';
	export { itemLink as href };
	let itemName: string = '';
	export { itemName as name };
	export let artist: string = '';
	export let time: string = '';
	let customClass = '';
	export { customClass as class };
	let imgAlt: string;
	export { imgAlt as alt };
</script>

<div class="w-full flex-col gap-6 inline-flex {customClass}">
	<div class="w-full h-80 rounded-lg flex overflow-hidden relative">
		<Block alt="{imgAlt}" class="" src="{imgSrc}"></Block>
	</div>
	<div class="flex-col gap-6 flex">
		<Link href="{itemLink}" type="headline">
			{itemName}
		</Link>
		<Headline>{artist}
		</Headline>
		<Headline
			class="!text-white/50">
			{time}
		</Headline>
	</div>
</div>