<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/utils/countItem';
	import type { List } from '$lib/data/dataModels';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;
	// @ts-ignore
	let bookmark: List | undefined = data.lists ? data.lists.find((list) => list.id === 'bookmark') : undefined;
</script>

<Icon
	class=" absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-9xl text-white/10"
	icon="faStar"
	type="solid"
></Icon>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">Bookmarks</Headline>

{#if bookmark}
	<Headline class="text-white  text-opacity-50">{count(bookmark.items)}</Headline>
	<div class="mt-10">
		<Button icon="faPlus" href="bookmark/add-items">Add item</Button>
		<Button icon="faImage" href="bookmark/edit-items">Edit items</Button>
	</div>

	<div class="mt-6">
		{#await extractItems(bookmark)}
			<p>Loading...</p>
		{:then items}
			<GridItem {items}></GridItem>
		{/await}
	</div>
{/if}