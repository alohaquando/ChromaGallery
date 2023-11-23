import { writable } from 'svelte/store';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import { auth } from '$lib/services/firebase/firebase.js';

export const authStore = writable({
	user: null,
	loading: true,
	data: {}
});

export const authHandlers = {
	signup: async (email, pass) => {
		await createUserWithEmailAndPassword(auth, email, pass);
	},
	login: async (email, pass) => {
		await signInWithEmailAndPassword(auth, email, pass);
	},
	loginWithGoogle: async () => {
		await signInWithPopup(auth, new GoogleAuthProvider());
	},
	logout: async () => {
		await signOut(auth);
	}
};
