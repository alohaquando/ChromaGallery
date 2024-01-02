<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import type { PageData } from './$types';
	import { count } from '$lib/utils/countItem';
	import { extractItems } from '$lib/data/item';
	import GridItem from '$lib/components/item/GridItem.svelte';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;
	let list = data.lists ? data.lists.filter((list) => list.id === data.param) : undefined;
	export let number = 0;
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6"
>My list with a lovingly long displayName
</Headline>

<Headline class="text-white  text-opacity-50">{number} item{number > 1 ? 's' : ''}</Headline>
<BodyLarge class="pt-6">This is a special collection in which I collect special things</BodyLarge>


{#if list}
	<Headline class="text-white  text-opacity-50">{count(list.items)}</Headline>
	<div class="mt-10">
		<Button icon="faPen">Edit detail</Button>
		<Button icon="faPlus">Add item</Button>
		<Button icon="faImage">Edit items</Button>
	</div>

	<div class="mt-6">
		{#await extractItems(list)}
			<p>Loading...</p>
		{:then items}
			<GridItem {items}></GridItem>
		{/await}
	</div>
{/if}