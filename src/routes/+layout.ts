import { onMount } from 'svelte';
import { auth, db } from '$lib/services/firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { authStore } from '$lib/stores/store';
import { defaultLayout } from '$lib/stores/pageLayout';
import { generateModal, previousState } from '$lib/stores/modal';
import { page } from '$app/stores';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {};
}

// page.subscribe((data) => {
// 	modal = data;
// });

// onMount(() => {
// 	defaultLayout();
// 	const bookmarkItem = auth.onAuthStateChanged(async (user) => {
// 		if (!user) {
// 			return;
// 		}
// 		let dataToSetToStore: any;
// 		const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
// 		const docSnap = await getDoc(docRef);
// 		if (!docSnap.exists()) {
// 			const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
// 			dataToSetToStore = {
// 				email: user?.email,
// 				title: 'Bookmarks',
// 				items: []
// 			};
// 			await setDoc(userRef, dataToSetToStore, { merge: true });
// 		} else {
// 			const userData = docSnap.data();
// 			dataToSetToStore = userData;
// 		}
// 		authStore.update((curr: any) => {
// 			return {
// 				...curr,
// 				user,
// 				data: dataToSetToStore,
// 				loading: false
// 			};
// 		});
// 	});
// });

// let prevState;
// let modalData;
//
// previousState.subscribe((previousState) => (prevState = previousState));
// modal.subscribe((modal) => (modalData = modal));
//
// const stateCheck = () => {
// 	if (!prevState && modalData.modalPage) {
// 		previousState.set(true);
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: 'animate-flyUp'
// 		}));
// 	} else if (prevState && modalData.modalPage) {
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: ''
// 		}));
// 	} else if (prevState && !modalData.modalPage) {
// 		previousState.set(false);
// 		modal.update((modalData) => ({
// 			...modalData,
// 			animation: 'animate-flyUpOut'
// 		}));
// 	}
// };
