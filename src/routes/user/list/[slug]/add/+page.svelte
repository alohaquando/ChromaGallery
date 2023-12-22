<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import { itemList1 } from '$lib/stores/data';
    import { modal } from '$lib/stores/modal';

    modal.update(modalData => ({
        ...modalData,
        modalPage: true,
        href: '#',
        title: 'Add item to list',
        button: 'Add'
    }));
</script>

<div class="flex justify-center items-center flex-col gap-6">
    <Button class="w-full" icon="faSearch">Find list</Button>
    <DragList class="w-full gap-4 " items={itemList1}></DragList>
</div>

