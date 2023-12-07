<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import { count } from '$lib/components/item/CountItem';

	import { itemList } from '../../data';

	let str = count(itemList);
</script>

<Bg></Bg>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	The coolest collection
</Headline>

<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6 pb-12">
	This is a special collection in which I collect special things
</BodyLarge>

<Grid data={itemList}></Grid>
