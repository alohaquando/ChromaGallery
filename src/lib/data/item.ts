import {
	arrayUnion,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
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
	  return true;
	} else {
	  console.error('Bookmarked failed');
	  return false;
	}
  }

export async function checkIfBookmarked(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;

	// const q = query(collection(db,'users', userId, 'lists'), where("bookmark", "==", itemId));

	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const docSnap = await getDoc(docRef);

	if (docSnap.data().items.includes(itemId)) {
		console.log('true') ;
		return true;
	}
	console.log(false);
	return false;
}

export const getItemFromIdList = async (idList: string[]) => {
	let itemList: any[] = [];

	const itemPromises = idList.map(async (itemId) => {
		const item = await getItem(itemId);
		itemList = [...itemList, item];
	});

	await Promise.all(itemPromises);

	return itemList;
};

export const extractItems = async (collection: Collection | List | undefined) => {
	if (collection == undefined) {
		return null;
	}
	const idList = collection.items;
	let [itemList] = await Promise.all([getItemFromIdList(idList)]);
	return itemList;
};
