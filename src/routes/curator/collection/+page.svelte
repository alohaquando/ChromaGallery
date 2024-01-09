<script lang="ts">
    import Button from '$lib/components/controls/Button.svelte';
    import PageTitle from '$lib/components/layouts/PageTitle.svelte';
    import FixedButton from '$lib/components/controls/FixedButton.svelte';
    import type { PageData } from './$types';
    import CollectionList from '$lib/components/item/CollectionList.svelte';

    export let data: PageData;
</script>

<PageTitle>Collections</PageTitle>

<Button class="mt-16 mb-8" href="collection/search" icon="faMagnifyingGlass" width="full">Search</Button>
<CollectionList button="link" collections={data.collections} curator isCollection rowType></CollectionList>

<FixedButton href="/curator/collection/add" icon="faPlus"></FixedButton>
