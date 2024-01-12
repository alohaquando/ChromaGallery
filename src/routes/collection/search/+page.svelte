<script lang="ts">
    import Bg from '$lib/components/backgrounds/BG.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import { allItem } from '$lib/data/exampleData';
</script>

<Bg randomized />

<div class="mb-6 w-full h-full">
    <TextField icon="faXmark" id="" name="" placeholder="Search"></TextField>
</div>

<DragList class="gap-4" items={allItem} type="view"></DragList>
