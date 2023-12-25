import { onMount } from 'svelte';
import { itemStore } from '$lib/stores/itemStore.js';
import { itemStore as dataStore } from '$lib/stores/dataLoad';
import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase.js';
import { getAuth } from 'firebase/auth';
import { handleBookmark } from '$lib/stores/dataLoad';

export const load = ({ params }) => {
	return {
		slug: params.slug,
		item: dataStore.getItem(params.slug)
	};
};
//
// onMount(async () => {
// 	itemStore.getItem(data.slug);
// 	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
// 	const docSnap = await getDoc(docRef);
// 	if (docSnap.exists()) {
// 		let preLoad = docSnap.data().item;
// 		console.log(preLoad);
// 	} else {
// 		console.log('No such document!');
// 	}
// });
//
// onMount(async () => {
// 	const authen = getAuth();
// 	const userId = authen.currentUser.uid;
// 	console.log(authen.currentUser.uid);
//
// 	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
// 	const docSnap = await getDoc(docRef);
// 	if (docSnap.exists()) {
// 		let preLoad = docSnap.data().item;
// 		console.log(preLoad);
// 	} else {
// 		console.log('No such document!');
// 	}
// });
