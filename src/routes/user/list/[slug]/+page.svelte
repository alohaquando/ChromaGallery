<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import type { PageData } from './$types';
	import { count } from '$lib/utils/countItem';
	import { extractItems } from '$lib/data/item';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import type { List } from '$lib/data/dataModels';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;
	let list: List = data.list;
	let listId = data.param;
	console.log(list);
</script>

{#if list}
	<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6"
	>{list.title}
	</Headline>

	<Headline class="text-white text-opacity-50">{count(list.items)}</Headline>
	<BodyLarge class="pt-6">{list.description}</BodyLarge>


	<div class="mt-10">
		<Button icon="faPen" href="{listId}/edit-detail">Edit detail</Button>
		<Button icon="faPlus" href="{listId}/add-items">Add item</Button>
		<Button icon="faImage" href="{listId}/edit-items">Edit items</Button>
	</div>

	<div class="mt-6">
		{#await extractItems(list)}
			<p>Loading...</p>
		{:then items}
			<GridItem {items}></GridItem>
		{/await}
	</div>
{/if}