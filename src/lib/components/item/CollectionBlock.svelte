<!--suppress ALL -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection } from '../../stores/model';
	import { allItem } from '../../stores/data';
	import { count } from '$lib/utils/countItem';

	export let data: Collection | undefined;

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
	export let hideSubtitle: boolean = false;
	export let width: 'fixed' | 'full' = 'fixed';
	let widthClass = '';
	switch (width) {
		case 'fixed':
			widthClass = 'sm:w-72 w-full';
		case 'full':
			widthClass = 'w-72';
	}
</script>

<div
	class="{customClass} {bookmark? 'w-full' : widthClass} flex-col justify-start items-start gap-6 inline-flex grow">
	<a class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative" href="../routes/item/{data.id}">
		{#if !bookmark}
			<Block data={allItem.find((item) => item.id === data.items[0])}></Block>
		{:else}
			<Block data={allItem.find((item) => item.id === data.items[0])} bookmark></Block>
		{/if}
		{#if blockStyle === 'grid' && data.items[1]}
			<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
				{#if (data.items[1])}
					<Block link={false} data={allItem.find((item) => item.id === data.items[1])}></Block>
				{/if}
				{#if (data.items[2])}
					<Block link={false} data={allItem.find((item) => item.id === data.items[2])}></Block>
				{/if}
			</div>
		{/if}
		<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
			<Body>{str}</Body>
		</InfoChip>
	</a>
	{#if title}
		<div class="self-stretch flex-col flex gap-4">
			<Link href="../routes/user/collection/{data.id}" type="body">
				{#if !bookmark}
					{data.name}
				{:else}
					Bookmark
				{/if}
			</Link>
			{#if subtitle && !bookmark && !hideSubtitle}
				<Body class="text-white/50 line-clamp-2">{data.description}</Body>
			{/if}
		</div>
	{/if}
</div>
