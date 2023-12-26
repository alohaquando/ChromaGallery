<!--suppress ALL -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection } from '../../data/dataModels';
	import { allItem } from '../../data/exampleData';
	import { count } from '$lib/utils/countItem';

	import { extractItems } from '$lib/data/item';

	export let collection: Collection | undefined;

	let customClass = '';
	export { customClass as class };

	let blockStyle: 'grid' | 'single' = 'single';
	export { blockStyle as style };

	let str = collection ? count(collection.items) : '';
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

	let itemList = extractItems(collection);
	console.log(itemList);
</script>

{#await itemList}
	<div
		class="{customClass} {bookmark
			? 'w-full'
			: widthClass} flex-col justify-start items-start gap-6 inline-flex grow-0"
	>
		<a
			class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative"
			href="/user/collection/{collection.id}"
		>
			{#if !bookmark}
				<Block></Block>
			{:else}
				<Block bookmark></Block>
			{/if}
			<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
				<Body>{str}</Body>
			</InfoChip>
		</a>
		{#if title}
			<div class="self-stretch flex-col flex gap-4">
				<Link href="/user/collection/{collection.id}" type="body">
					{#if !bookmark}
						{collection.title}
					{:else}
						Bookmark
					{/if}
				</Link>
				{#if subtitle && !bookmark && !hideSubtitle}
					<Body class="text-white/50 line-clamp-2">{collection.description}</Body>
				{/if}
			</div>
		{/if}
	</div>
{:then itemData}
	<div
		class="{customClass} {bookmark
			? 'w-full'
			: widthClass} flex-col justify-start items-start gap-6 inline-flex grow-0"
	>
		<a
			class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative"
			href="/user/collection/{collection.id}"
		>
			{#if !bookmark}
				<Block item={itemData[0]}></Block>
			{:else}
				<Block item={itemData[0]} bookmark></Block>
			{/if}
			{#if blockStyle === 'grid' && itemData[1]}
				<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
					{#if itemData[1]}
						<Block link={false} item={itemData[1]}></Block>
					{/if}
					{#if itemData[2]}
						<Block link={false} item={itemData[2]}></Block>
					{/if}
				</div>
			{/if}
			<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
				<Body>{str}</Body>
			</InfoChip>
		</a>
		{#if title}
			<div class="self-stretch flex-col flex gap-4">
				<Link href="../routes/user/collection/{collection.id}" type="body">
					{#if !bookmark}
						{collection.title}
					{:else}
						Bookmark
					{/if}
				</Link>
				{#if subtitle && !bookmark && !hideSubtitle}
					<Body class="text-white/50 line-clamp-2">{collection.description}</Body>
				{/if}
			</div>
		{/if}
	</div>
{/await}
