<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/utils/countItem';
	import { collection1 } from '../../data';
	import { findItem } from '$lib/utils/filter';

	let itemList = findItem(collection1.items);
	let str = count(collection1.items);
</script>

<Bg randomized />

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{collection1.name}
</Headline>
<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6 pb-12">
	{collection1.description}
</BodyLarge>

<Grid data={itemList}></Grid>
