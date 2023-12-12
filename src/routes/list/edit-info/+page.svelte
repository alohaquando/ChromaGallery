<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<Modal button="Save" title="Edit list">
    <div class="gap-6 flex flex-col">
        <TextField id="" name="" placeholder="Enter something..."></TextField>
        <TextField id="" name="" placeholder="Enter something..."></TextField>
    </div>
    <div class="pt-8">
        <ListItem bottomDivider={false} design="destructive" href="/" leadingText="Delete list" />
    </div>
</Modal>
