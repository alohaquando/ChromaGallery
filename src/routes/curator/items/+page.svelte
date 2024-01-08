<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { count } from '$lib/utils/countItem';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let featured = (data.items).filter(item => item.isFeatured === true);
</script>

{#if data.items.length === 0}
	<div
		class="text-center text-white text-opacity-50 text-base font-normal font-['Atkinson Hyperlegible'] leading-normal"
	>
		No item added yet
	</div>
{:else}
	<PageTitle>Items</PageTitle>
	<Button class="mb-10 mt-20" icon="faMagnifyingGlass" width="full" href="items/search"
	>Search
	</Button
	>
	<div class="flex justify-between items-center">
		<BodyLarge>Featured</BodyLarge>
		<Button icon="faPen" href="/curator/items/featured">Manage</Button>
	</div>
	<DragList curator class="mt-6 gap-4" items={featured} itemLimit={3} placeholder={3}></DragList>

	<div class="mt-16 flex justify-between items-center">
		<BodyLarge>All items</BodyLarge>
		<Body>{count(data.items)}</Body>
	</div>
	<DragList curator class="gap-4 mt-8" items={data.items}></DragList>
	<FixedButton icon="faPlus" href="/curator/items/add"></FixedButton>
{/if}
