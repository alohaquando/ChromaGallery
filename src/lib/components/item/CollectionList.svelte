<!--suppress ALL -->

<script lang="ts">
    import type { Comment } from 'postcss';
    import type { Collection, List } from '../../stores/model';
    import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
    import Fab from '$lib/components/controls/Fab.svelte';
    import RowCollection from '$lib/components/item/RowCollection.svelte';
    import { createNewList } from '../../stores/model';

    export let rowType: boolean = false;
    export let placeholder: number | undefined;
    export let displayLimit: number | undefined;
    export let collections: Collection[] | List[] | undefined;
    if (!collections) {
        collections = [];
    }

    let customClass = '';
    export { customClass as class };

    export let hideSubtitle: boolean = false;

    let blockStyle: 'grid' | 'single' = 'grid';
    export { blockStyle as style };

    export let wrap: boolean = false;
    let wrapClass = '';
    if (wrap) {
        wrapClass = 'flex-wrap';
    }

    export let width: 'fixed' | 'full' = 'fixed';

    // $: if (displayLimit && collections) {
    //     collections = collections.slice(0, displayLimit);
    // }
    //
    // const fillList = () => {
    //     if (collections && placeholder) {
    //         const currentLength = collections.length;
    //
    //         if (currentLength < placeholder) {
    //             const itemsToAdd = placeholder - currentLength;
    //             collections = [...collections, ...Array(itemsToAdd).fill(createNewList())];
    //         }
    //     }
    // };
    //
    // $: if (placeholder && collections) {
    //     fillList();
    // }
    //
    // $: fillList(), collections;
</script>

<div class="{customClass}">
    {#if collections}
        {#if rowType}
            <div class="flex flex-col">
                {#each collections as collection}
                    <RowCollection {collection}></RowCollection>
                {/each}
            </div>
        {:else}
            <div
                    class="{customClass} flex items-center overflow-y-clip overflow-x-scroll gap-x-4 gap-y-10 scrollbar-none {wrapClass}">
                {#each collections as collection}
                    <CollectionBlock {width} {hideSubtitle} class="shrink-0" {collection}
                                     style={blockStyle}></CollectionBlock>
                {/each}
                {#if (width === 'fixed')}
                    <Fab class="mr-10 shrink-0 relative -mt-10" icon="" size="lg">View all</Fab>
                {/if}
            </div>
        {/if}
    {/if}
</div>