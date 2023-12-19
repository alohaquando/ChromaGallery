<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<TextField id="" name="" placeholder="Text"></TextField>

<div class="mt-6">
    <ListItem class="w-full" bottomDivider={false} topDivider={false} text='Suggestion 1' icon="faArrowUpLeft" />
    <ListItem class="w-full" bottomDivider={false} topDivider={false} text='Suggestion 2' icon="faArrowUpLeft" />
    <ListItem class="w-full" bottomDivider={false} topDivider={false} text='Suggestion 3' icon="faArrowUpLeft" />
</div>