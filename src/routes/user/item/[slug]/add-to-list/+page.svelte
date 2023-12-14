<script lang="ts">
	import ModalInfo from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allCollection } from '../../../../../data.js';
	import { defaultLayout, modal } from '$lib/stores/pageLayout';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore.js';
	import { modalData } from '$lib/stores/modal';

	defaultLayout();
	modal.update(modalData => ({
		...modalData,
		toggled: true,
		exit: true,
		title: 'Add to list',
		button: 'Add'
	}));


	let itemList = [];
	onMount(async () => {
		itemStore
			.getAllItems()
			.then((itemsData) => {
				itemList = itemsData;
				console.log(itemList);

				// Do something with the items data
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});
	});

	modalData.update(modalData => ({
		...modalData,
		modalPage: true,
		exit: true,
		title: 'Add to list',
		button: 'Add'
	}));
</script>

<div class="flex flex-col justify-center items-center gap-8">
	<Button icon="faPlus">New list</Button>
	<Button class="w-full" icon="faSearch">Find list</Button>
</div>
<CollectionList class="gap-4 mt-6" data={allCollection} rowType></CollectionList>
