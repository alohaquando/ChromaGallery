<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import { onMount } from 'svelte';
    import type { Item } from '$lib/data/dataModels';
    import Body from '$lib/components/typography/Body.svelte';

    let searchTerm = '';
    let searchResults: any; // Store search results
    let items: Item[];

    async function fetchData() {
        try {
            const response = await fetch(`/curator/items/search?q=${searchTerm}`);
            searchResults = await response.json(); // Store fetched search results
            items = searchResults.items;
            console.log('Search results:', searchResults);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    onMount(() => {
        fetchData();
    });
</script>

<TextField
        bind:value={searchTerm}
        id="search"
        name="search"
        on:input={fetchData}
        placeholder="Search..."
/>

{#if items && items.length > 0}
    <DragList class="gap-4 mt-9" items={items} type="view"></DragList>
{:else}
    <div class="mt-12 flex flex-col items-center w-full">
        <Body>No result found</Body>
    </div>
{/if}
