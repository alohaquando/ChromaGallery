<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';

	let blockStyle: 'grid' | 'single' = 'single';
	export { blockStyle as style };
	let itemLink = '';
	export { itemLink as href };
	export let src1 = '';
	export let src2 = '';
	export let src3 = '';
	export let itemNum: number = 0;
	let str = 'Item';
	if (itemNum !== 1) {
		str += 's';
	}
</script>

<div class="w-72 h-64 flex-col justify-start items-start gap-6 inline-flex">
	<a
		class="self-stretch grow shrink basis-0 rounded-lg justify-start items-start gap-1 inline-flex overflow-hidden relative"
		href="{itemLink}">
		<img alt="" class="bg-white/70 grow shrink basis-0 self-stretch" src="{src1}" />
		{#if blockStyle === 'grid'}
			<div class="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
				<img alt="" class="bg-white/70 grow shrink basis-0 self-stretch" src="{src2}" />
				<img alt="" class="bg-white/70 grow shrink basis-0 self-stretch" src="{src3}" />
			</div>
		{/if}
		<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
			<Body>{itemNum} {str}</Body>
		</InfoChip>
	</a>
	<div class="self-stretch flex-col justify-start items-start flex gap-2">
		<Link class="before:!bottom-0.5" href="{itemLink}" type="body">Title</Link>
		<Body class="text-white/50">Subtitle</Body>
	</div>
</div>