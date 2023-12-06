<script lang="ts">
	import BG from '$lib/components/backgrounds/BG.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import {
		itemList
	} from '$lib/../data';

	// data
	let items: Item[] = itemList;

	let type = 'edit';

	// function for toggle button
	function onClick() {
		if (type === 'checkbox') {
			type = 'edit';
		} else {
			type = 'checkbox';
		}
	}
</script>

<BG randomized />

<Button on:click={onClick}>toggle</Button>
<DragList bind:data={items} {type}></DragList>
