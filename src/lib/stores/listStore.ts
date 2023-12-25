import { writable } from 'svelte/store';
import type { ItemData } from './itemStore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

interface ListData extends Array<ItemData> {}

const list: ListData[] = [];

const { subscribe, set, update } = writable(list);

export const listStore = {
	subscribe,
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

			set(itemsData);
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
	},
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
	}
};
