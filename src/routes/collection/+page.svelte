<script lang="ts">
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';

	export let data;
	let collections = data.collections;
</script>

<PageTitle>All collections</PageTitle>

<Button class="mt-16" href="collection/search" icon="faMagnifyingGlass" width="full">Search</Button>

<CollectionList
	class="mt-12 gap-10"
	collections={collections}
	design="single"
	hideSubtitle
	isCollection
	width="full"
	wrap
></CollectionList>
