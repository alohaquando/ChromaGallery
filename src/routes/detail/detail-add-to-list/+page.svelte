<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../data.js';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore.js';

	let items = [];
	onMount(async () => {
		itemStore
			.getAllItems()
			.then((itemsData) => {
				items = itemsData;
				console.log(itemList);
				
				// Do something with the items data
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});
	});

</script>

<Modal button="Add" title="Add to list">
	<div class="flex flex-col justify-center items-center gap-8">
		<Button icon="faPlus">New list</Button>
		<Button class="w-full" icon="faSearch">Find list</Button>
	</div>
	<DragList class="gap-4 mt-6" data={items}></DragList>
</Modal>
