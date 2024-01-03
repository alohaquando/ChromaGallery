<!-- <script>
	import CreateList from './createList.svelte';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase.js';
	import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/store.js';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import CreatelIst from './createList.svelte';

	const nonAuthRoutes = ['/'];
	// ******Bookmark******
	onMount(() => {
		const bookmarkItem = auth.onAuthStateChanged(async (user) => {
			if (!user) {
				return;
			}
			let dataToSetToStore;
			const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
				dataToSetToStore = {
					email: user?.email,
					items: []
				};
				await setDoc(userRef, dataToSetToStore, { merge: true });
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
			authStore.update((curr) => {
				return {
					...curr,
					user,
					data: dataToSetToStore,
					loading: false
				};
			});
		});
	});

	// ******Create List******
	// onMount(() => {
	// 	const createList = auth.onAuthStateChanged(async (user) => {
	// 		if (!user) {
	// 			return;
	// 		}
	// 		let dataToSetToStore;
	// 		const docRef = doc(collection(db, 'users', user.uid, 'lists'));
	// 		const docSnap = await getDoc(docRef);
	// 		if (!docSnap.exists()) {
	// 			dataToSetToStore = {
	// 				title: 'My List ',
	// 				subtitle: 'My list subtitle',
	// 				image: 'http://123.com',
	// 				items: []
	// 			};
	// 			const docRef = await addDoc(collection(db, 'users', user.uid, 'lists'), dataToSetToStore);
	// 			console.log(docRef.id);
	// 		} else {
	// 			const userData = docSnap.data();
	// 			dataToSetToStore = userData;
	// 		}
	// 		authStore.update((curr) => {
	// 			return {
	// 				...curr,
	// 				user,
	// 				data: dataToSetToStore,
	// 				loading: false
	// 			};
	// 		});
	// 	});
	// });


	// Get All of the User Lists
	// let itemList = [];
	// onMount(async () => {
	// 	itemStore
	// 		.getUsersAllLists(authen.currentUser?.uid)
	// 		.then((itemsData) => {
	// 			itemList = itemsData;
	// 			console.log(itemList);

	// 			// Do something with the items data
	// 		})
	// 		.catch((error) => {
	// 			// Handle errors
	// 			console.error('Error:', error);
	// 		});
	// });

	// Check if Logged-in
	let userEmail = '';
	let userName = '';
	const authen = getAuth();
	onAuthStateChanged(authen, (user) => {
		if (user) {
			console.log(user);
			userName = user.displayName;
			userEmail = user.email;
		} else {
			console.log('Not sign in');
		}
	});
</script>

<nav>
	<h1>{userName}</h1>
	<h1>{userEmail}</h1>
</nav>

<CreateList /> -->
<script>
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase.js';
	import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { handleCreateList } from '$lib/data/list';
	export let data;
	// console.log(data.session.uid);
	// const userId = data.session.uid;
	// onMount(() => {
		// const handleCreateList = auth.onAuthStateChanged(async (user) => {
		// 	if (!user) {
		// 		return;
		// 	}
		// 	let dataToSetToStore;
		// 	const docRef = doc(collection(db, 'users', user.uid, 'lists'));
		// 	const docSnap = await getDoc(docRef);
		// 	if (!docSnap.exists()) {
		// 		dataToSetToStore = {
		// 			title: 'My List ',
		// 			subtitle: 'My list subtitle',
		// 			items: []
		// 		};
		// 		const docRef = await addDoc(collection(db, 'users', user.uid, 'lists'), dataToSetToStore);
		// 		console.log(docRef.id);
		// 	} else {
		// 		const userData = docSnap.data();
		// 		dataToSetToStore = userData;
		// 	}
		// });
	// handleCreateList(userId, "Title2", "Subtitle2")
	// });

</script>

<slot />
