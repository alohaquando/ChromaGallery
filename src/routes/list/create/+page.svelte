<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import Block from '$lib/components/item/Block.svelte';
    import { modalData } from '$lib/stores/modal';

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        exit: true,
        href: '/account/me',
        title: 'Create new list',
        transition: true
    }));
</script>


<div class="gap-6 flex flex-col">
    <TextField id="" name="" placeholder="Enter something..."></TextField>
    <TextField id="" name="" placeholder="Enter something..."></TextField>
</div>
