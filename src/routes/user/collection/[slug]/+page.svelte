<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/utils/countItem';
	import { collection1 } from '$lib/stores/data';
	import { findItem } from '$lib/utils/filter';
	import { defaultLayout } from '$lib/stores/pageLayout';

	let itemList = findItem(collection1.items);
	let str = count(collection1.items);
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{collection1.name}
</Headline>
<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6 pb-12">
	{collection1.description}
</BodyLarge>

<GridItem items={itemList}></GridItem>
