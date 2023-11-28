import { writable } from 'svelte/store';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

interface ItemData {
	title: string;
	artist: string;
	foundedYear: string;
	image: string;
	description: string;
	location: string;
}

const item: ItemData | any = {
	title: '',
	artist: '',
	foundedYear: '',
	image: '',
	description: '',
	location: ''
};

const { subscribe, set, update } = writable(item);

export const itemStore = {
	subscribe,
	getItem: async (id: string) => {
		const docRef = doc(db, 'Item', id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			set(docSnap.data());
		} else {
			set(null);
		}
	}
};
