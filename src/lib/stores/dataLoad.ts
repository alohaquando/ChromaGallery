import { writable } from 'svelte/store';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';
import { error } from '@sveltejs/kit';
import type { Item } from '$lib/stores/model';

const getItem = async (id: string) => {
	const docRef = doc(db, 'items', id);
	let item: Item;
	return await getDoc(docRef);
};

const getAllItems = async () => {
	try {
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
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};
