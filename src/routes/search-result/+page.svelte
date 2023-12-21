<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import { allItem } from '$lib/stores/data';
</script>

<Bg randomized />

<div class="mb-9 w-full h-full">
	<TextField icon="faXmark" id="" name="" value="Text"></TextField>
</div>

<Title>Collections</Title>
<DragList class="gap-4 mt-8 mb-16" data={allItem} type="view"></DragList>

<Title>Items</Title>
<DragList class="gap-4 mt-8" data={allItem} type="view"></DragList>

