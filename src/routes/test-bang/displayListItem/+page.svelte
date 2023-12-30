<!-- <script>
	import { db } from '$lib/services/firebase/firebase';
	import { itemStore } from '$lib/stores/itemStore';
	import Item from '$lib/wip/backend/Item.svelte';
	import { getAuth } from 'firebase/auth';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let itemList = [];
	let item = {};
	let isDataLoaded = false;
	const authen = getAuth();
	onMount(async () => {
		try {
			// Get Item //
			const docRef = doc(db, 'users', authen.currentUser.uid, 'lists', 'KtvpR2Vu713wAIVIaIrw');
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				itemList = docSnap.data().items;
				// console.log('Document data:', docSnap.data());
				console.log('Items:', itemList);

				// Convert from item ID to Item
				try {
					itemStore.getItem(itemList[0]).then((itemData) => console.log(itemData));
				} catch (error) {
					console.error('Error fetching all items: ', error.message);
					throw error;
				}
			} else {
				// docSnap.data() will be undefined in this case
				console.log('No such document!');
			}
		} catch (error) {
			console.error('Error fetching all items: ', error.message);
			throw error;
		}
	});
</script>

<h1>List</h1> -->
