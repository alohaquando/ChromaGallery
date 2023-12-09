<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/../data';
    let items= allItem;
</script>

<Bg randomized/>

<div class="mb-6 w-full h-full">
<TextField id="" name="" placeholder="Text"></TextField>
</div>

<DragList data={items} type="view" class="gap-4"></DragList>
