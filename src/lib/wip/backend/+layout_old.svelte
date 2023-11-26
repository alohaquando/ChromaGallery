<script>
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase.js';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/store.js';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	const nonAuthRoutes = ['/'];
	onMount(() => {
		const unsubcribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && nonAuthRoutes.includes(currentPath)) {
				// window.location.href= "/";
				return;
			}

			if (user && currentPath === '/') {
				// window.location.href = '/dashboard';
			}

			if (!user) {
				return;
			}

			let dataToSetToStore;
			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				const userRef = doc(db, 'user', user.uid);
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
	<a class=" text-blue-500" href="/">home</a>
	<a class=" text-green-500" href="/about">about</a>
	<a class=" text-yellow-500" href="/dashboard">dashboard</a>
	<h1>{userName}</h1>
	<h1>{userEmail}</h1>
</nav>