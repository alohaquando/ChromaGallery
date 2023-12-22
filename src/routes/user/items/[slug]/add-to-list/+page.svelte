<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import { allCollection } from '$lib/stores/data.js';
	// import { defaultLayout, modal } from '$lib/stores/pageLayout';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { onMount } from 'svelte';
	import { getAuth } from 'firebase/auth';
	import { listStore } from '$lib/stores/listStore.js';
	import { itemStore } from '$lib/stores/itemStore.js';
	import { modal } from '$lib/stores/modal';
	import { arrayUnion, doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/services/firebase/firebase.js';

	export let data: any;

	let itemList = [];
	onMount(async () => {
		const authen = getAuth();
		const userId = authen.currentUser?.uid;
		await listStore.getUserLists(userId);
		listStore.subscribe((lists) => {
			console.log(lists);
		});
		// console.log($itemStore);
	});

	// let url = window.location.href;

	function extractItemIdFromUrl(url) {
		// Define a regex pattern to match the item ID in the URL
		const regex = /\/user\/item\/\$([A-Za-z0-9]+)\/add-to-list/;

		// Use the exec method to extract the match from the URL
		const match = regex.exec(url);

		// Check if there is a match and return the captured item ID
		return match && match[1];
	}

	const handleAddToList = async () => {
		const url = window.location.href;

		const itemId = extractItemIdFromUrl(url);

		const authen = getAuth();
		const userId = authen.currentUser.uid;
		console.log(userId);

		await setDoc(
			doc(db, 'users', userId, 'lists', 'LgRY8ejhmwjI8Pp3Qai4'),
			{
				items: arrayUnion(itemId)
			},
			{ merge: true }
		);
		console.log('Bookmarked successfully');
	};
	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		exit: true,
		title: 'Add to list',
		button: 'Add'
	}));
</script>

<div class="flex flex-col justify-center items-center gap-8 ">
	<Button icon="faPlus">New list</Button>
	<Button class="w-full" icon="faSearch">Find list</Button>
</div>
{#if $listStore.length > 0}
	<CollectionList class="gap-4 mt-6" collections={$listStore} rowType></CollectionList>
{:else}
	<h1>No List</h1>
{/if}
<button class="text-center outline-double mt-5" on:click={handleAddToList}>Add To List</button>
