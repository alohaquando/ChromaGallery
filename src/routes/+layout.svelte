<script>
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { authHandlers, authStore } from '$lib/stores/store';
	import { getAdditionalUserInfo, getAuth, onAuthStateChanged } from 'firebase/auth';

	const nonAuthRoutes = ['/'];

	onMount(() => {
		const unsubcribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && nonAuthRoutes.includes(currentPath)) {
				// window.location.href = '/';
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
				const userRef = doc(db, 'users', user.uid);
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

<nav class="flex justify-around py-5">
	<div class="flex gap-5">
		<a href="/home" class=" text-blue-500">home</a>
		<a href="/about" class=" text-green-500">about</a>
		<a href="/dashboard" class=" text-yellow-500">dashboard</a>
		<a href="/login" class=" text-pink-500">login</a>
	</div>
	<div class="flex gap-5">
		<h1>{userName}</h1>
		<h1>{userEmail}</h1>
		<button class="text-red-500" on:click={authHandlers.logout}>Logout</button>
	</div>
</nav>

<header></header>
<slot />
<footer></footer>
