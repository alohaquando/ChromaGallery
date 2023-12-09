<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<!--<div class="w-screen h-screen backdrop-blur-sm fixed"></div>-->
<Bg randomized/>

<div class="mt-6 w-full h-full">
<TextField id="" name="" placeholder="Text"></TextField>

<div class="mt-6">
    <ListItem leadingText="Suggestion 1" icon="faArrowUpLeft" topDivider={false} bottomDivider={false}/>
    <ListItem leadingText="Suggestion 2" icon="faArrowUpLeft" topDivider={false} bottomDivider={false}/>
    <ListItem leadingText="Suggestion 3" icon="faArrowUpLeft" topDivider={false} bottomDivider={false}/>
</div>
</div>
