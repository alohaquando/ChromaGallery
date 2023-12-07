<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection } from '../../../model';
	import { itemList } from '../../../data';
	import { count } from '$lib/components/item/CountItem';

	export let data: Collection;

	let customClass = '';
	export { customClass as class };

	let blockStyle: 'grid' | 'single' = 'single';
	export { blockStyle as style };

	let str = count(data.items);
	export let title: boolean = true;
	export let subtitle: boolean = true;
	export let bookmark: boolean = false;
	if (bookmark) {
		blockStyle = 'single';
	}
</script>

<div class="{customClass} w-72 flex-col justify-start items-start gap-6 inline-flex">
	<a class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative" href="../routes/item/{data.id}">
		{#if !bookmark}
			<Block data={itemList.find((item) => item.id === data.items[0])}></Block>
		{:else}
			<Block data={itemList.find((item) => item.id === data.items[0])} bookmark></Block>
		{/if}
		{#if blockStyle === 'grid' && data.items[1]}
			<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
				{#if (data.items[1])}
					<Block link={false} data={itemList.find((item) => item.id === data.items[1])}></Block>
				{/if}
				{#if (data.items[2])}
					<Block link={false} data={itemList.find((item) => item.id === data.items[2])}></Block>
				{/if}
			</div>
		{/if}
		<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
			<Body>{str}</Body>
		</InfoChip>
	</a>
	{#if title}
		<div class="self-stretch flex-col flex gap-4">
			<Link href="../routes/item/{data.id}" type="body">
				{#if !bookmark}
					{data.name}
				{:else}
					Bookmark
				{/if}
			</Link>
			{#if subtitle && !bookmark}
				<Body class="text-white/50 line-clamp-2">{data.description}</Body>
			{/if}
		</div>
	{/if}
</div>
