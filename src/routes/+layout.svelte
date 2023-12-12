<script lang="ts">
	import '../app.postcss';
	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/store';
	import { itemStore } from '$lib/stores/itemStore';
	let scrollY: number;

		// ******Bookmark******
	onMount(() => {
		const bookmarkItem = auth.onAuthStateChanged(async (user) => {
			if (!user) {
				return;
			}
			let dataToSetToStore:any;
			const docRef = doc(db, 'users', user.uid, "lists", "NVdWTuqsEWR0CdJIsJ7R");
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				const userRef = doc(db, 'users', user.uid, "lists", "NVdWTuqsEWR0CdJIsJ7R");
				dataToSetToStore = {
					email: user?.email,
					items: [],
				};
				await setDoc(userRef, dataToSetToStore, { merge: true });
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
			authStore.update((curr:any) => {
				return {
					...curr,
					user,
					data: dataToSetToStore,
					loading: false
				};
			});
		});
	});
</script>

<svelte:head>
	<meta title="Chroma Gallery" />
	<meta content="#000000" name="theme-color" />
</svelte:head>
<svelte:window bind:scrollY />

<HeaderMain {scrollY}></HeaderMain>
<div class="container mx-auto px-6">
	<slot />
	<Footer></Footer>
</div>

<div class="h-32" />

<NavBar class="fixed bottom-0 left-0 z-40" />
