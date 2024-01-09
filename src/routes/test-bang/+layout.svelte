<script>
	import {
		handleAddItemToCollection,
		handleDeleteCollection,
		handleDeleteItemFromCollection,
		handleUpdateCollection
	} from '$lib/data/collection';
	import {
		handleCreateItem,
		handleDeleteItem,
		handleUpdateItem,
		updateAllItems,
		updateItemFeatureStatus
	} from '$lib/data/item';
	import { handleDeleteList } from '$lib/data/list';
	import { db, storage } from '$lib/services/firebase/firebase';
	import {
		addDoc, arrayUnion,
		collection,
		deleteDoc,
		doc,
		getDoc,
		getDocs,
		setDoc,
		updateDoc
	} from 'firebase/firestore';
	import { ref, uploadBytes } from 'firebase/storage';
	import { onMount } from 'svelte';
	onMount(async () => {
		// Create Item
		// handleCreateItem('au', 'des', 'ima', false, 'loca', 'title', 'year');

		// Delete Item
		// handleDeleteItem('6BMUulm3NHDDpaSoejUW');

		// UpdateItem
		// let toUpdate = {
		// 	isFeatured: false,
		// 	location: 'Paris'
		// };
		// handleUpdateItem('IKDg9uCvRd0yTYmKImMM', toUpdate);

		// Delete Collection
		// handleDeleteCollection('0W7lHHgjpK4NboDOZNHZ');

		// Delete List
		// handleDeleteList('RiJm5slrH6Qi1QHdCkOYwlEVoud2',"tZ82jQ9RHOQhY0SZE3A3")

		// Delete Item form collection
		// handleDeleteItemFromCollection("zlspj4IE3S3UQ160xRfW",'abc')

		// Update is Featured
		// updateItemFeatureStatus('IBpq1ZYF4KMgaeSDUAQn',false)

		// Update Collection
		// handleUpdateCollection('zlspj4IE3S3UQ160xRfW',
		// 	{title:"Bec",description:"asdasd"})

		// await updateIsCurator("Gh43EiXguNwH0bOmgixnNqwOdG2", true)
		// updateCurratorState("6Gh43EiXguNwH0bOmgixnNqwOdG2",true)
		// handleUpdateCuratorState('rBushPkr0sed8hz3uFCh8F1P6UC3',false)

		//Add item to collection
		//handleAddItemToCollection("BZaeqEPbXERW973kzxZS","123124123123")

		// async function updateAllItems() {
		// 	try {
		// 		const itemsCollection = collection(db, 'items');
		// 		const querySnapshot = await getDocs(itemsCollection);
		//
		// 		querySnapshot.forEach((d) => {
		// 			const itemRef = doc(db, 'items', d.id);
		// 			updateDoc(itemRef, { isFeatured: false });
		// 		});
		//
		// 		console.log('All items updated successfully.');
		// 	} catch (error) {
		// 		console.error('Error updating items:', error);
		// 	}
		// }


// Example usage with an array of item IDs
// 		const itemIdsToUpdate = ["v7tMd8LqSA0AwJbV9Yn9", "uYIvhUX8ODUTwaJ6xAYA", "qCestVUHF6yQAogjXuDM"];
// 		updateItemsToFeatured(itemIdsToUpdate);

		// updateAllItems(itemIdsToUpdate)
	});
</script>

<slot />
