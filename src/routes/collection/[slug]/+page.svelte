<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/utils/countItem';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;

	let collection = data.collection;
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{collection.title}
</Headline>
<Headline class="text-white  text-opacity-50">{count(collection.items)}</Headline>
<BodyLarge class="pt-6 pb-12">
	{collection.description}
</BodyLarge>

{#await extractItems(collection)}
	<p>Loading...</p>
{:then items}
	<GridItem {items}></GridItem>
{/await}
