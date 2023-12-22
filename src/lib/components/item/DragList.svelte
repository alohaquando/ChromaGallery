<script lang="ts">
    import RowItem from '$lib/components/item/RowItem.svelte';
    import type { Item } from '$lib/stores/model';
    import { flip } from 'svelte/animate';
    import type { DndEvent } from 'svelte-dnd-action';
    import { dndzone } from 'svelte-dnd-action';
    import { data } from 'autoprefixer';
    import { createNewItem } from '$lib/stores/model';
    import { item5 } from '$lib/stores/data';
    import Button from '$lib/components/controls/Button.svelte';

    export let type: 'action' | 'edit' | 'delete' | 'view' = 'action';
    export let button: 'add' | 'destructive' | 'remove' | 'link' | undefined;
    export let icon: string | undefined;
    export let placeholder: number | undefined;
    export let itemLimit: number | undefined;
    export let outLimit: number | undefined;
    export let output: Item[] | undefined;

    // custom classes
    let customClass = '';
    export { customClass as class };

    //only enable dragging on type 'edit'
    let dragDisabled: boolean = true;

    function typeCheck() {
        dragDisabled = type !== 'edit';
    }

    $:type, typeCheck();

    //animation on dragging
    const flipDurationMs = 100;

    //-----drag list main functions-----
    export let items: Item[] = [];
    let currentLength: number;
    let isNotFull: boolean = false;
    let placeholderItems: undefined | Item[];

    // drag and drop function
    const handleConsider = (e: CustomEvent<DndEvent<Item>>) => {
        items = e.detail.items;
    };

    const handleFinalize = (e: CustomEvent<DndEvent<Item>>) => {
        items = e.detail.items;
    };

    // delete function
    const onDelete = (item: Item) => {
        items = items.filter((i: Item) => i.id != item.id);
    };

    // add function
    const onTransfer = (item: Item) => {
        if (output) {
            const index = items.indexOf(item);

            if (!outLimit || (outLimit && output.length < outLimit)) {
                if (index !== -1) {
                    items = items.filter((i: Item) => i.id != item.id);
                    output = [...output, item];
                }
            }
        }
    };

    // update placeholder
    const fillItems = () => {
        if (isNotFull && placeholder) {
            const itemsToAdd = placeholder - currentLength;
            placeholderItems = [...Array(itemsToAdd).fill(createNewItem())];
        }
    };
    const placeholderCheck = () => {
        currentLength = items.length;
        if (itemLimit && items) {
            items = items.slice(0, itemLimit);
        }
        if (placeholder && currentLength < placeholder) {
            isNotFull = true;
        }
        fillItems();
    };
    $: items, placeholderCheck();

</script>
<div class="{customClass} flex flex-col gap-4">

    {#if items.length !== 0}
        <div class="flex flex-col gap-4"
             on:consider="{handleConsider}"
             on:finalize="{handleFinalize}" use:dndzone="{{items, dragDisabled, flipDurationMs}}">
            {#each items as item (item.id)}
                <div animate:flip="{{ duration: flipDurationMs }}">
                    <RowItem on:transfer={() => onTransfer(item)} on:delete={() => onDelete(item)} {type}
                             class="rounded-lg"
                             {item} {button} {icon}></RowItem>
                </div>
            {/each}
        </div>
    {/if}

    {#if (placeholderItems && placeholderItems.length !== 0)}
        <div class="flex flex-col gap-4">
            {#each placeholderItems as item}
                <div>
                    <RowItem type="view" class="rounded-lg" {item}></RowItem>
                </div>
            {/each}
        </div>

        <div class="opacity-50 cursor-default flex">
            <span>Add an item with the list below</span>
        </div>
    {/if}
</div>


