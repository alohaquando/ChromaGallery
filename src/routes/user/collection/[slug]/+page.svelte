<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/utils/countItem';
	import { collection1 } from '$lib/stores/data';
	import { findItem } from '$lib/utils/filter';
	import { defaultLayout } from '$lib/stores/pageLayout';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/stores/dataLoad';

	export let data: PageData;

	let collection = data.collection;
	let str = count(collection.items);
	let itemList = extractItems(collection);
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{collection.title}
</Headline>
<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6 pb-12">
	{collection.description}
</BodyLarge>

<GridItem items={itemList}></GridItem>
