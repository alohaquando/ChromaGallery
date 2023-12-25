import { writable } from 'svelte/store';
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
import { db, auth } from '$lib/services/firebase/firebase';
import { error } from '@sveltejs/kit';
import type { Item } from '$lib/stores/model';
import { getAuth } from 'firebase/auth';

export const itemStore = {
	getItem: async (id: string) => {
		const docRef = doc(db, 'items', id);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	},

	getAllItems: async () => {
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
	}
};

export const listStore = {
	getAllCollection: async () => {
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
	},
	getOneList: async (userId: string) => {
		try {
			// Reference to the "items" collection
			const itemsCollection = collection(db, 'users', userId, 'lists', 'KtvpR2Vu713wAIVIaIrw');

			// Fetch all documents in the "items" collection
			const querySnapshot = await getDocs(itemsCollection);

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
	},
	getUserLists: async (userId: string) => {
		// try {
		// Reference to the "items" collection
		const itemsCollection = collection(db, 'users', userId, 'lists');

		// Fetch all documents in the "items" collection
		const querySnapshot = await getDocs(itemsCollection);

		// Extract data from query snapshot
		const itemsData = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
		console.log(itemsData);

		return itemsData;
		// 	} catch (error) {
		// 		console.error('Error fetching all items: ', error.message);
		// 		throw error;
	}
	// }
};

export async function handleBookmark(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;

	await setDoc(
		doc(db, 'users', userId, 'lists', 'bookmark'),
		{
			items: arrayUnion(itemId)
		},
		{ merge: true }
	);
	console.log('Bookmarked successfully');

	return true;
}

function extractItemIdFromUrl(url: string) {
	// Define a regex pattern to match the item ID in the URL
	const regex = /\/user\/item\/\$([A-Za-z0-9]+)\/add-to-list/;

	// Use the exec method to extract the match from the URL
	const match = regex.exec(url);

	// Check if there is a match and return the captured item ID
	return match && match[1];
}

export const handleAddToList = async () => {
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
