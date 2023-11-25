<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Link from '$lib/components/links/Link.svelte';

	let imgSrc: string = '';
	export { imgSrc as src };
	let itemLink: string = '';
	export { itemLink as href };
	let itemName: string = '';
	export { itemName as name };
	export let artist: string = '';
	export let time: string = '';
</script>

<div class="w-full flex-col gap-6 inline-flex">
	<div class="w-full max-h-72 rounded-lg justify-center gap-2.5 inline-flex bg-black/20 backdrop-blur-lg">
		<img alt="" class="basis-0 bg-white/70" src="{imgSrc}" />
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