import {
	addDoc,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where
} from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';
import { getAuth } from 'firebase/auth';
import type { Collection, List } from '$lib/data/dataModels';

export const getFeaturedItems = async () => {
	try {
		// Reference to the "items" collection
		const itemsCollection = collection(db, 'items');

		// Create a query against the collection.
		const q = query(itemsCollection, where('isFeatured', '==', true));

		// Fetch all documents in the "items" collection
		const querySnapshot = await getDocs(q);

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
export const getItem = async (id: string) => {
	try {
		const docRef = doc(db, 'items', id);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};
export const getAllItems = async () => {
	// Reference to the "items" collection
	const itemsCollection = collection(db, 'items');

	// Fetch all documents in the "items" collection
	const querySnapshot = await getDocs(itemsCollection);

	// Extract data from query snapshot
	const itemsData = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	}));

	return itemsData;
};

export const getItemFromIdList = async (idList: string[]) => {
	const itemPromises = idList.map(async (itemId) => {
		const item = await getItem(itemId);
		return { id: itemId, ...item }; // Include the id in the returned item
	});

	return await Promise.all(itemPromises);
};

export const extractItems = async (collection: Collection | List | undefined) => {
	if (collection == undefined) {
		return null;
	}
	const idList = collection.items;
	return await getItemFromIdList(idList);
};

// export async function handleBookmark(itemId: string) {
// 	const authen = getAuth();
// 	const userId = authen.currentUser.uid;

// 	await setDoc(
// 		doc(db, 'users', userId, 'lists', 'bookmark'),
// 		{
// 			items: arrayUnion(itemId)
// 		},
// 		{ merge: true }
// 	);
// 	console.log('Bookmarked successfully');

// 	return true;
// }

export async function handleBookmark(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;
	if (userId == null) {
		window.alert('Please Logged In First');
	}
	const userDocRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const userDocSnap = await getDoc(userDocRef);

	if (userDocSnap.exists()) {
		const currentItems = userDocSnap.data().items || [];

		// Check if the item already exists in the list
		const itemIndex = currentItems.indexOf(itemId);

		if (itemIndex !== -1) {
			// If the item exists, remove it from the list
			currentItems.splice(itemIndex, 1);
		} else {
			// If the item doesn't exist, add it to the list
			currentItems.push(itemId);
		}

		// Update the 'items' field in the document
		await setDoc(userDocRef, { items: currentItems });
		console.log('Bookmarked successfully');
	} else {
		console.error('Bookmarked failed');
	}
}

export async function checkIfBookmarked(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;

	// const q = query(collection(db,'users', userId, 'lists'), where("bookmark", "==", itemId));

	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const docSnap = await getDoc(docRef);

	if (docSnap.data().items.includes(itemId)) {
		return true;
	}
	return false;
}

export async function handleCreateItem(
	author: string,
	description: string,
	image: string,
	isFeatured: boolean,
	location: string,
	title: string,
	year: string
) {
	const docRef = await addDoc(collection(db, 'items'), {
		author,
		description,
		image,
		isFeatured,
		location,
		title,
		year
	});
	console.log('Document written with ID: ', docRef.id);
}

export async function handleDeleteItem(itemId: string) {
	const itemRef = doc(db, 'items', itemId);
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

export async function handleUpdateItem(itemId: string, listToUpdate: object) {
	const itemRef = doc(db, 'items', itemId);

	await updateDoc(itemRef, listToUpdate);
}
export const filterItem = async (idList: string[] | undefined) => {
	const allItems = await getAllItems();
	return allItems.filter((item) => !idList?.includes(item.id));
};
