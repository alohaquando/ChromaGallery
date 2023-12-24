import { onMount } from 'svelte';
import { itemStore } from '$lib/stores/itemStore.js';
import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase.js';
import { getAuth } from 'firebase/auth';

export const load = ({ params }) => {
	return {
		slug: params.slug
	};
};

onMount(async () => {
	itemStore.getItem(data.slug);
	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		let preLoad = docSnap.data().item;
		console.log(preLoad);
	} else {
		console.log('No such document!');
	}
});

const handleBookmark = async () => {
	const authen = getAuth();
	const userId = authen.currentUser.uid;
	console.log(authen.currentUser.uid);

	await setDoc(
		doc(db, 'users', userId, 'lists', 'bookmark'),
		{
			items: arrayUnion(data.slug)
		},
		{ merge: true }
	);
	console.log('Bookmarked successfully');
};
