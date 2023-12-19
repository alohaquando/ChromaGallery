<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
	import {allItem} from '$lib/../data';
</script>

<Bg randomized/>

<div class="mb-6 w-full h-full">
<TextField id="" name="" value="Text" icon="faXmark"></TextField>
</div>

<DragList data={allItem} type="view" class="gap-4"></DragList>
