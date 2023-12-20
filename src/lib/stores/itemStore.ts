import { writable } from 'svelte/store';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';
import { error } from '@sveltejs/kit';

export interface ItemData {
	id: string | undefined;
	title: string | undefined;
	author: string | undefined;
	year: string | undefined;
	image: string | undefined;
	description: string | undefined;
	location: string | undefined;
}

const item: ItemData | any = {
	id: '',
	title: '',
	author: '',
	year: '',
	image: '',
	description: '',
	location: ''
};

const { subscribe, set, update } = writable(item);

export const itemStore = {
	id: undefined,
	author: undefined,
	title: undefined,
	year: undefined,
	image: undefined,
	description: undefined,
	location: undefined,
	subscribe,
	getItem: async (id: string) => {
		const docRef = doc(db, 'items', id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			set(docSnap.data());
		} else {
			set(null);
		}
		// if (docSnap.exists()) {
		// 	const itemData = docSnap.data();
		// 	return itemData
		// } else {
		// 	console.log(error)
		// }
	},
	getAllItems: async () => {
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
	},
	getFeaturedItems: async () => {
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
	},
	getUserLists: async (userId) => {
		try {
			// Reference to the "items" collection
			const itemsCollection = collection(db, 'users', userId, 'lists');

			// Fetch all documents in the "items" collection
			const querySnapshot = await getDocs(itemsCollection);

			// Extract data from query snapshot
			const itemsData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));

			// set(itemsData);
			return itemsData;
		} catch (error) {
			console.error('Error fetching all items: ', error.message);
			throw error;
		}
	},
	getOneList: async (userId) => {
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
	}
};
