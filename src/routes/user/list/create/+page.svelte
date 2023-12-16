<script lang="ts">
	import Grid from '$lib/components/item/GridItem.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import { modalData } from '$lib/stores/modal';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore';
	import Button from '$lib/components/controls/Button.svelte';
	import { authStore } from '$lib/stores/store';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	modalData.update((modalData) => ({
		...modalData,
		modalPage: true,
		exit: true,
		href: '/user/account',
		title: 'Create new list',
		transition: true
	}));

	let listName = '';
	let listDescriptions = '';
	const authen = getAuth();
    let user = authen.currentUser;
	// onAuthStateChanged(authen, (user) => {
	// 	if (user) {
	// 		console.log(user);
	// 	} else {
	// 		console.log('Not sign in');
	// 	}
	// });
// console.log(user)
	const handleCreateList = async (user) => {
		if (!user) {
			return;
		}
		let dataToSetToStore;
		const docRef = doc(collection(db, 'users', user.uid, 'lists'));
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			dataToSetToStore = {
				title: listName,
				description: listDescriptions,
				image: 'http://123.com',
				items: []
			};
			const docRef = await addDoc(collection(db, 'users', user.uid, 'lists'), dataToSetToStore);
			console.log(docRef.id);
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
        listName = '';
        listDescriptions = '';
	}
 
</script>

<div class="gap-6 flex flex-col">
	<TextField bind:value={listName} id="name" name="name" placeholder="List Name"></TextField>
	<TextField
		bind:value={listDescriptions}
		id="description"
		name="description"
		placeholder="List Description"
	></TextField>
	<button on:click={() => handleCreateList(user)}>Create List</button>
</div>
