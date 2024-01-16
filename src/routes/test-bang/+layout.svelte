<script>
	import { query, limit } from 'firebase/firestore';
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
		updateItemFeatureStatus
	} from '$lib/data/item';
	import { handleDeleteList } from '$lib/data/list';
	import { db, storage } from '$lib/services/firebase/firebase';
	import {
		addDoc,
		arrayUnion,
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

	const storageRef = ref(storage);

	const imagesRef = ref(storage, 'images/');
	// 'file' comes from the Blob or File API
	// uploadBytes(storageRef, 'file').then((snapshot) => {
	// 	console.log('Uploaded a blob or file!');
	// });

	// console.log(data.session.uid);
	// const userId = data.session.uid;

	onMount(async () => {
		// 		async function getRandomItemIds() {
		//   try {
		//     const itemsCollection = collection(db, 'items');
		//     const randomItemsQuery = query(itemsCollection, limit(2));
		//     const querySnapshot = await getDocs(randomItemsQuery);
		//     const randomItemIds = querySnapshot.docs.map(doc => doc.id);
		//     console.log('Random item IDs:', randomItemIds);
		//     return randomItemIds;
		//   } catch (error) {
		//     console.error('Error getting random item IDs:', error);
		//     throw error;
		//   }
		// }


		
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
		// updateCuratorState("6Gh43EiXguNwH0bOmgixnNqwOdG2",true)
		//Add item to collection
		// 		handleAddItemToCollection("BZaeqEPbXERW973kzxZS","123124123123")
	});
</script>

<slot />
