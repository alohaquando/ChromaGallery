<!--suppress ALL -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection } from '../../data/dataModels';
	import { count } from '$lib/utils/countItem';
	import { extractItems } from '$lib/data/item';

	export let collection: Collection | undefined;

	let customClass = '';
	export { customClass as class };

	export let design: 'grid' | 'single' = 'single';

	let str = collection ? count(collection.items) : 'Loading...';
	export let title: boolean = true;
	export let subtitle: boolean = true;
	export let bookmark: boolean = false;
	export let curator: boolean = false;
	export let isCollection: boolean = false;
	let path: string;
	if (bookmark) {
		path = '/list/bookmark';
		design = 'single';
	} else {
		path =
			(curator ? '/curator' : '') + (isCollection ? '/collection/' : '/list/') + collection?.id;
	}
	export let hideSubtitle: boolean = false;
	export let width: 'fixed' | 'full' = 'fixed';
	let widthClass = '';
	switch (width) {
		case 'fixed':
			widthClass = 'w-72';
			break;
		case 'full':
			widthClass = 'w-full';
			break;
	}

	let itemList = extractItems(collection);

	let isHovered: boolean = false;
	const toggleHover = () => {
		isHovered = !isHovered;
	};

	if (bookmark) {
		console.log(collection);
	}
</script>

{#await itemList}
	<div
		class="{customClass} {bookmark
			? 'w-full'
			: widthClass} flex-col justify-start items-start gap-6 inline-flex grow-0"
	>
		<div class="w-full h-52 rounded-lg gap-1 inline-flex overflow-hidden relative">
			<Block item={null} {bookmark}></Block>
			<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
				<Body>Loading...</Body>
			</InfoChip>
		</div>
		{#if title}
			<div class="self-stretch flex-col flex gap-4">
				<Body>
					{#if bookmark}
						Bookmark
					{:else}
						Title
					{/if}
				</Body>
				{#if subtitle && !bookmark && !hideSubtitle}
					<Body class="text-white/50 line-clamp-2">Description</Body>
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
			class="w-full bg-neutral-900/30 h-52 rounded-xl gap-1 inline-flex overflow-hidden relative"
			href={path}
			on:mouseleave={toggleHover}
			on:mouseenter={toggleHover}
			role="button"
			tabindex="0"
		>
			<Block display="fill" item={itemData ? itemData[0] : null} link={false} {bookmark}></Block>
			{#if !bookmark && design === 'grid' && itemData && itemData[1]}
				<div class="grow shrink basis-0 self-stretch flex-col gap-1 inline-flex">
					<Block display="fill" link={false} item={itemData[1]}></Block>
					{#if itemData && itemData[2]}
						<Block display="fill" link={false} item={itemData[2]}></Block>
					{/if}
				</div>
			{/if}
			{#if itemData}
				<InfoChip class="absolute bottom-2 right-2 !rounded-2xl !bg-opacity-40 py-4">
					<Body>{str}</Body>
				</InfoChip>
			{/if}
		</a>
		{#if title}
			<div class="self-stretch flex-col flex gap-4">
				<Link {isHovered} href={path} type="body">
					{#if bookmark}
						Bookmark
					{:else}
						{collection?.title}
					{/if}
				</Link>
				{#if subtitle && !bookmark && !hideSubtitle}
					<Body class="text-white/50 line-clamp-2">{collection?.description}</Body>
				{/if}
			</div>
		{/if}
	</div>
{/await}
