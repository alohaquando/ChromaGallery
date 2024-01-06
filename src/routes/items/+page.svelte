<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import type { PageData } from './$types';
	import Link from '$lib/components/links/Link.svelte';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;

	let itemList = data.allItem;
</script>

<PageTitle>All artworks</PageTitle>
<Button class="mb-12 mt-20" href="browse/search" icon="faMagnifyingGlass" width="full">Search</Button>

<div class="h-full flex flex-col justify-center gap-14">
	<!-- All items -->
	<div class="w-full flex flex-col justify-center gap-8">
		<GridItem items={itemList}></GridItem>
	</div>
</div>
