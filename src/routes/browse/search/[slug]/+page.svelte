<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';

	let items = allItem;
</script>

<TextField id="" name="" placeholder="Search"></TextField>

{#if items}
	<DragList class="gap-4 mt-8" {items} type="view"></DragList>
{:else}
	<div class="mt-12 flex flex-col items-center w-full">
		<BodySmall>No result found</BodySmall>
	</div>
{/if}