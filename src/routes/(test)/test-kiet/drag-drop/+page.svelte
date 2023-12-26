<script lang="ts">
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { allItem } from '$lib/data/exampleData';

	// data
	let items: Item[] = allItem;

	let type = 'action';

	// function for toggle button
	function onClick() {
		if (type === 'action') {
			type = 'edit-items';
		} else {
			type = 'action';
		}
	}
</script>

<Button on:click={onClick}>toggle</Button>
<DragList bind:items button="destructive" {type}></DragList>
