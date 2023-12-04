<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection } from '../../../model';

	let collection: Collection;
	export { collection as data };

	let customClass = '';
	export { customClass as class };
	let blockStyle: 'grid' | 'single' = 'single';
	export { blockStyle as style };

	let amount = collection.itemList.length;
	let str = 'Item';
	if (amount !== 1) {
		str += 's';
	}
	export let title: boolean = true;
	export let subtitle: boolean = true;
	export let bookmark: boolean = false;
	if (bookmark) {
		blockStyle = 'single';
	}
</script>

<div class="{customClass} w-72 flex-col justify-start items-start gap-6 inline-flex flex-shrink-0">
	<a class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative" href="../routes/item/{collection.id}">
		<Block data={collection.itemList[0]} link={false}></Block>
		{#if blockStyle === 'grid' && collection.itemList[1]}
			<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
				{#if (collection.itemList[1])}
					<Block link={false} data={collection.itemList[1]}></Block>
				{/if}
				{#if (collection.itemList[2])}
					<Block link={false} data={collection.itemList[2]}></Block>
				{/if}
			</div>
		{/if}
		<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
			<Body>{amount} {str}</Body>
		</InfoChip>
	</a>
	{#if title}
		<div class="self-stretch flex-col flex gap-4">
			<Link href="../routes/item/{collection.id}" type="body">{collection.title}</Link>
			{#if subtitle}
				<Body class="text-white/50">{collection.subtitle}</Body>
			{/if}
		</div>
	{/if}
</div>
