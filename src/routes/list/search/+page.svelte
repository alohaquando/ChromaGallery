<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import { allItem } from '../../../data.js';
</script>

<Modal button="Save" title="Edit items">
    <div class="flex justify-center items-center flex-col gap-6">
        <TextField id="1" name="1" placeholder="Find item"></TextField>
        <DragList class="gap-4 w-full" data={allItem}></DragList>
    </div>
</Modal>
