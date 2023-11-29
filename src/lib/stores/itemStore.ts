import { writable } from 'svelte/store';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

interface ItemData {
	title: string | undefined;
	artist: string | undefined;
	foundedYear: string | undefined;
	image: string | undefined;
	description: string | undefined;
	location: string | undefined;
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
	artist: undefined,
	title: undefined,
	foundedYear: undefined,
	image: undefined,
	description: undefined,
	location: undefined,
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
