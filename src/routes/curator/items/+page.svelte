<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	import { itemList2 } from '$lib/stores/data';
	import { count } from '$lib/utils/countItem';
	import { allItem } from '$lib/stores/data';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';

	let str = count(allItem);
	let data: undefined;
</script>

{#if data}
	<div
		class="text-center text-white text-opacity-50 text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">
		No item added yet
	</div>
{:else}
	<PageTitle>Items</PageTitle>
	<Button class="mb-10 mt-20" icon="faMagnifyingGlass" width="full" href="items/search">Search</Button>
	<div class="flex  justify-between items-center">
		<BodyLarge>Featured</BodyLarge>
		<Button icon="faPen">Manage</Button>
	</div>
	<DragList class="mt-6 gap-4" items={itemList2}></DragList>

	<div class="mt-16  flex justify-between items-center">
		<BodyLarge>All items</BodyLarge>
		<Body>{str}</Body>
	</div>
	<DragList class="gap-4 mt-8" items={allItem}></DragList>
	<FixedButton icon="faPlus"></FixedButton>
{/if}