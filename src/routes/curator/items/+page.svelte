<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	import { itemList2 } from '$lib/data/exampleData';
	import { count } from '$lib/utils/countItem';
	import { allItem } from '$lib/data/exampleData';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';

	let str = count(allItem);
	export let data;

	console.log(data);
</script>

<PageTitle>Items</PageTitle>

<FixedButton href="/curator/items/add" icon="faPlus" />

{#if data.allItems}
	{#if data.allItems.length === 0}
		<Body class="opacity-80 text-center pt-24">
		No item added yet
		</Body>
	{:else}
		<Button class="mb-10 mt-20" icon="faMagnifyingGlass" width="full" href="items/search">
			Search
		</Button>

		<div class="flex justify-between items-center">
			<BodyLarge>Featured</BodyLarge>
			<Button icon="faPen">Manage</Button>
		</div>
		<DragList class="mt-6 gap-4" curator={true} items={data.allFeaturedItems}></DragList>

		<div class="mt-16 flex justify-between items-center">
			<BodyLarge>All items</BodyLarge>
			<Body>{str}</Body>
		</div>
		<DragList class="gap-4 mt-8" curator={true} items={data.allItems}></DragList>
	{/if}

{:else }
	<Body class="opacity-80 text-center pt-24">
	Cannot get items
	</Body>
{/if}
