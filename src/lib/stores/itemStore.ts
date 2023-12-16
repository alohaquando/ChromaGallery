import { writable } from 'svelte/store';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

interface ItemData {
	title: string | undefined;
	author: string | undefined;
	year: string | undefined;
	image: string | undefined;
	description: string | undefined;
	location: string | undefined;
}

const item: ItemData | any = {
	title: '',
	author: '',
	year: '',
	image: '',
	description: '',
	location: ''
};

const { subscribe, set, update } = writable(item);

export const itemStore = {
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
	},
	getAllItems : async () => {
		try {
		  // Reference to the "items" collection
		  const itemsCollection = collection(db, 'items');
	  
		  // Fetch all documents in the "items" collection
		  const querySnapshot = await getDocs(itemsCollection);
	  
		  // Extract data from query snapshot
		  const itemsData = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		  }));
	  
		  return itemsData;
		} catch (error) {
		  console.error('Error fetching all items: ', error.message);
		  throw error;
		}
	},
	getCollectionItems : async () => {
		try {
		  // Reference to the "items" collection
		  const itemsCollection = collection(db, 'featuredItem');
	  
		  // Fetch all documents in the "items" collection
		  const querySnapshot = await getDocs(itemsCollection);
	  
		  // Extract data from query snapshot
		  const itemsData = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		  }));
	  
		  return itemsData;
		} catch (error) {
		  console.error('Error fetching all items: ', error.message);
		  throw error;
		}
	}
};
