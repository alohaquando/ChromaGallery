<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import { allItem } from '$lib/../data';
</script>

<div class="mb-6 w-full h-full">
    <TextField id="" name="" placeholder="Text"></TextField>
</div>

<DragList class="gap-4" data={allItem} type="view"></DragList>
