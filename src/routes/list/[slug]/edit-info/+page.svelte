<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
    import { modalData } from '$lib/stores/modal';

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        href: '/account/setting',
        title: 'Edit list',
        button: 'Save'
    }));
</script>

<div class="gap-6 flex flex-col">
    <TextField id="" name="" placeholder="Enter something..."></TextField>
    <TextField id="" name="" placeholder="Enter something..."></TextField>
</div>
<div class="pt-8">
    <ListItem bottomDivider={false} design="destructive" href="/" leadingText="Delete list" />
</div>
