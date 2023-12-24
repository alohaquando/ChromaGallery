<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Title from '$lib/components/typography/Title.svelte';

	let items = allItem;
</script>

	<TextField icon="faXmark" id="" name="" placeholder="Text"></TextField>


{#if items}
<div class="mt-9">
<Title>Collections</Title>
</div>
<DragList class="gap-4 mt-8 mb-16" {items} type="view"></DragList>

<Title>Items</Title>
<DragList class="gap-4 mt-8" {items} type="view"></DragList>
{:else}
	<div class="mt-12 flex flex-col items-center w-full">
		<BodySmall>No result found</BodySmall>
	</div>
{/if}