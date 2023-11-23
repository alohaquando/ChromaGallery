<script>
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { authHandlers, authStore } from '$lib/stores/store';
	import { db } from '$lib/services/firebase/firebase';
	import Item from '../../component/Item.svelte';

	let itemList = [];
	let currItem = '';
	let error = false;

	authStore.subscribe((curr) => {
		itemList = curr.data.items;
	});

	function addItem() {
		error = false;
		if (!currItem) {
			error = true;
		}
		itemList = [...itemList, currItem];
		currItem = '';
	}

	function editItem(index) {
		let newItemList = itemList.filter((val, i) => {
			return i !== index;
		});
		currItem = itemList[index];
		itemList = newItemList;
	}
	function removeItem(index) {
		let newItemList = itemList.filter((val, i) => {
			return i !== index;
		});
		itemList = newItemList;
	}

	async function saveItems() {
		try {
			const userRef = doc(db, 'users', $authStore.user.uid);
			await setDoc(
				userRef,
				{
					items: itemList
				},
				{ merge: true }
			);
		} catch (err) {
			console.log('There was an error saving your information', err);
		}
	}
</script>

{#if !$authStore.loading}
	<div>
		<div>
			<h1>Item list</h1>
			<button on:click={saveItems}>Save</button>
		</div>
		<main>
			<button class="text-red-500" onclick={authHandlers.logout}>Logout</button>
			{#if itemList.length === 0}
				<p>You have no Item</p>
			{/if}
			{#each itemList as item, index}
				<Item {item} {index} {removeItem} {editItem} />
			{/each}
		</main>
		<div
			class={'flex border rounded  justify-between w-[50%] m-auto ' + (error ? 'errorBorder' : '')}
		>
			<input
				class=" border border-blue-500"
				bind:value={currItem}
				type="text"
				placeholder="Enter Item Name"
			/>
			<button
				class="flex border rounded justify-between border-red-500 w-[100px]"
				on:click={addItem}>Add</button
			>
		</div>
	</div>
{/if}

<style>
	.enterItem {
		display: flex;
		align-items: stretch;
		/* border: 1px solid blue; */
		border-radius: 5px;
		overflow: hidden;
	}
	.errorBorder {
		border-color: coral !important;
	}
</style>
