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

async function getItem(id: string) {
	const docRef = doc(db, 'items', id);
	let item: Item;
	return await getDoc(docRef);
}

async function getAllItems() {
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

export async function handleBookmark(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;
	console.log(authen.currentUser.uid);

	await setDoc(
		doc(db, 'users', userId, 'lists', 'bookmark'),
		{
			items: arrayUnion(itemId)
		},
		{ merge: true }
	);
	console.log('Bookmarked successfully');
}
