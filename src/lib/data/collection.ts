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
import { db, storage } from '$lib/services/firebase/firebase';
import { getAuth } from 'firebase/auth';
import { ref } from 'firebase/storage';

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

export async function handleDeleteCollection(collectionId: string) {
	const collectionRef = doc(db, 'collections', collectionId);
	const collectionDoc = await getDoc(collectionRef);
	if (collectionDoc.exists()) {
		try {
			await deleteDoc(collectionRef);
			console.log('Collection successfully deleted!');
		} catch (error) {
			console.error('Error deleting collection: ', error);
		}
	} else {
		// Document does not exist, handle accordingly
		console.log('Collection does not exist.');
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

export async function handleCreateCollection(title: string, description: string) {
	if (!title || !description) {
		console.log('Please add title');
		return;
	}
	try {
		let docRef = await addDoc(collection(db, 'collections'), {
			title,
			description,
			items: []
		});
		console.log(docRef);
		return docRef;
	} catch (err) {
		console.error(err);
		throw err;
	}
}

export async function handleUpdateCollection(collectionId: string, fieldsToUpdate: object) {
	console.log(collectionId);
	const collectionRef = doc(db, 'collections', collectionId);

	return await updateDoc(collectionRef, fieldsToUpdate);
}

export const handleAddItemToCollection = async (collectionId: string, itemId: string) => {
	if (!itemId) {
		return;
	}
	await setDoc(
		doc(db, 'collections', collectionId),
		{
			items: arrayUnion(itemId)
		},
		{ merge: true }
	);
	console.log('Added successfully to Collection ID :', collectionId);
};

export const handleAddMultipleItemToCollection = async (collectionId: string, itemId: string[]) => {
	if (!itemId) {
		return;
	}
	await setDoc(
		doc(db, 'collections', collectionId),
		{
			items: arrayUnion(...itemId)
		},
		{ merge: true }
	);
	console.log('Added successfully to Collection ID :', collectionId);
};
