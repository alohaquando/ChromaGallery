<script lang="ts">
	import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import Button from "$lib/components/controls/Button.svelte";
    import CollectionList from "$lib/components/item/CollectionList.svelte";
    import { allCollection } from "../../data";
</script>
 
<PageTitle>All collections</PageTitle>

<Button icon="faMagnifyingGlass" class="mt-16" width="full">Search</Button>

<CollectionList class="mt-12 gap-10" hideSubtitle style='single' data={allCollection} hasButton={false}></CollectionList>