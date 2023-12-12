<script lang="ts">
    import Button from '$lib/components/controls/Button.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import type { Item } from '../../../model';
    import { onMount } from 'svelte';
    import { itemStore } from '$lib/stores/itemStore.js';
    import { modalData } from '$lib/stores/modal';

    let items: { id: string }[];
    onMount(async () => {
        itemStore
            .getAllItems()
            .then((itemsData) => {
                items = itemsData;
                console.log(items);

                // Do something with the items data
            })
            .catch((error) => {
                // Handle errors
                console.error('Error:', error);
            });
    });

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        href: '/account/setting',
        title: 'Add to list',
        button: 'Add'
    }));
</script>

<div class="flex flex-col justify-center items-center gap-8">
    <Button icon="faPlus">New list</Button>
    <Button class="w-full" icon="faSearch">Find list</Button>
</div>
<DragList class="gap-4 mt-6" data={items}></DragList>
