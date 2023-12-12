<script lang="ts">
    import Button from '$lib/components/controls/Button.svelte';
    import { allCollection } from '../../../data.js';
    import CollectionList from '$lib/components/item/CollectionList.svelte';
    import { modalData } from '$lib/stores/modal';

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        exit: true,
        title: 'Add to list',
        button: 'Add'
    }));
</script>

<div class="flex flex-col justify-center items-center gap-8">
    <Button icon="faPlus">New list</Button>
    <Button class="w-full" icon="faSearch">Find list</Button>
</div>
<CollectionList class="gap-4 mt-6" data={allCollection} rowType></CollectionList>
