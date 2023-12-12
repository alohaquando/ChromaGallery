<script lang="ts">
    import BG from '$lib/components/backgrounds/BG.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import {
        allItem
    } from '$lib/../data';

    // data
    let items: Item[] = allItem;

    let type = 'action';

    // function for toggle button
    function onClick() {
        if (type === 'action') {
            type = 'edit';
        } else {
            type = 'action';
        }
    }
</script>

<BG randomized />

<Button on:click={onClick}>toggle</Button>
<DragList bind:data={items} button="destructive" {type}></DragList>
