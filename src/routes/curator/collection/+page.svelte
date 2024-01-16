<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';
	import type { PageData } from './$types';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { count } from '$lib/utils/countItem';
	import Body from '$lib/components/typography/Body.svelte';

	export let data: PageData;
</script>

<PageTitle>Collections</PageTitle>

<Button class="mt-16 mb-8" href="collection/search" icon="faMagnifyingGlass" width="full"
	>Search</Button
>
<div class="flex justify-between items-center">
	<BodyLarge>All collections</BodyLarge>
	<Button href="/curator/items/add" icon="faPlus">Add collection</Button>
</div>
<CollectionList
	button="link"
	class="gap-4 mt-6"
	collections={data.collections}
	curator
	isCollection
	rowType
></CollectionList>

<FixedButton href="/curator/collection/create" icon="faPlus"></FixedButton>
