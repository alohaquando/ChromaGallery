<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import Title from '$lib/components/typography/Title.svelte';
	import {allItem} from '$lib/../data';
</script>

<Bg randomized/>

<div class="mb-9 w-full h-full">
<TextField id="" name="" value="Text" icon="faXmark"></TextField>
</div>

<Title>Collections</Title>
<DragList data={allItem} type="view" class="gap-4 mt-8 mb-16"></DragList>

<Title>Items</Title>
<DragList data={allItem} type="view" class="gap-4 mt-8"></DragList>

