import { writable } from 'svelte/store';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';
import { auth } from '$lib/services/firebase/firebase.js';

writable({
	user: null,
	loading: true,
	data: {}
});
