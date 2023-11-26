<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/block/Block.svelte';

	let blockStyle: 'grid' | 'single' = 'single';
	export { blockStyle as style };
	let itemLink = '';
	export { itemLink as href };

	export let src1 = '';
	export let src2 = '';
	export let src3 = '';
	export let alt1 = '';
	export let alt2 = '';
	export let alt3 = '';
	let singleSrc = src1;
	export { singleSrc as src };
	let singleAlt = alt1;
	export { singleAlt as alt };
	export let itemNum: number = 0;
	let str = 'Item';
	if (itemNum !== 1) {
		str += 's';
	}
	export let title: string = '';
	export let subtitle: string = '';
</script>

<div class="w-72 flex-col justify-start items-start gap-6 inline-flex">
	<a
		class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative"
		href="{itemLink}">
		<Block alt="{singleAlt}" src="{singleSrc}"></Block>
		{#if blockStyle === 'grid'}
			<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
				<Block alt="{alt2}" src="{src2}"></Block>
				<Block alt="{alt3}" src="{src3}"></Block>
			</div>
		{/if}
		<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
			<Body>{itemNum} {str}</Body>
		</InfoChip>
	</a>
	{#if title}
		<div class="self-stretch flex-col flex gap-4">
			<Link href="{itemLink}" type="body">{title}</Link>
			{#if subtitle}
				<Body class="text-white/50">{subtitle}</Body>
			{/if}
		</div>
	{/if}
</div>