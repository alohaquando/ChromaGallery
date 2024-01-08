import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';
import { getAuth } from 'firebase/auth';

export const getCollection = async (collectionId: string) => {
	try {
		const docRef = doc(db, 'collections', collectionId);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};
export const getAllCollection = async () => {
	try {
		// Reference to the "items" collection
		const collectionItems = collection(db, 'collections');

		// Fetch all documents in the "items" collection
		const querySnapshot = await getDocs(collectionItems);

		// Extract data from query snapshot
		const itemsData = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		return itemsData;
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};

export async function handleDeleteCollection(itemId: string) {
	const itemRef = doc(db, 'collections', itemId);
	const itemDoc = await getDoc(itemRef);
	if (itemDoc.exists()) {
		try {
			await deleteDoc(itemRef);
			console.log('Item successfully deleted!');
		} catch (error) {
			console.error('Error deleting item: ', error);
		}
	} else {
		// Document does not exist, handle accordingly
		console.log('Item does not exist.');
	}
}

export async function handleDeleteItemFromCollection(collectionId: string, itemId: string) {
	const collectionDocRef = doc(db, 'collections', collectionId);
	const collectionDocSnap = await getDoc(collectionDocRef);

	if (collectionDocSnap.exists()) {
		const currentItems = collectionDocSnap.data().items || [];

		// Check if the item already exists in the list
		const itemIndex = currentItems.indexOf(itemId);

		if (itemIndex !== -1) {
			// If the item exists, remove it from the list
			currentItems.splice(itemIndex, 1);

			// Update only the 'items' field in the document
			await updateDoc(collectionDocRef, { items: currentItems });
			console.log('Item removed successfully');
		} else {
			console.log('Item not found in the collection');
		}
	} else {
		console.error('Collection not found');
	}
}
