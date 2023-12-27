import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';
import { auth, db } from '$lib/services/firebase/firebase';
import type { User } from '$lib/data/dataModels';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
	},
	updateUserName: async (name) => {
		await updateProfile(auth.currentUser, { displayName: name });
	}
};

export async function handleSignUpAuthenticate(
	email: string,
	password: string,
	confirmPassword: string
) {
	try {
		if (password !== confirmPassword) {
			console.log('Password does not match');
			return;
		}

		// if (displayName.length < 3) {
		// 	console.log('Display name is null');
		// 	return;
		// }

		await authHandlers.signup(email, password);

		let error = false;

		// await authHandlers.updateUserName(displayName);

		console.log('Successfully signed up');

		// onAuthStateChanged(async (user) => {
		// 	if (!user) {
		// 		return;
		// 	}
		//
		// 	let dataToSetToStore: any;
		// 	const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
		// 	const docSnap = await getDoc(docRef);
		//
		// 	if (!docSnap.exists()) {
		// 		const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
		// 		dataToSetToStore = {
		// 			email: user?.email,
		// 			title: 'Bookmarks',
		// 			items: []
		// 		};
		// 		await setDoc(userRef, dataToSetToStore, { merge: true });
		// 		// Set Default Account as notCurrator
		// 		await setDoc(doc(db, 'users', user.uid),
		// 			{
		// 				isCurrator: false
		// 			}
		// 			, { merge: true });
		// 	} else {
		// 		const userData = docSnap.data();
		// 		dataToSetToStore = userData;
		// 	}
		await authHandlers.login(email, password);

		window.location.href = '/user/account/register';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdateDisplayName(displayName: string) {
	try {
		if (displayName.length < 3) {
			console.log('Display name is null');
			return;
		}

		await authHandlers.updateUserName(displayName);

		console.log('Successfully Update display name');

		window.location.href = '/';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export async function handleAuthenticate(email: string, password: string) {
	// if (authenticating) {
	// 	return;
	// }
	if (!email || !password) {
		// error = true;
		return;
	}

	// authenticating = true;

	try {
		await authHandlers.login(email, password);
		window.location.href = '/';
	} catch (err) {
		console.log(' There was an auth error', err);
		// error = true;
		// authenticating = false;
	}
}

export async function handleAuthenticateGoogle() {
	try {
		await authHandlers.loginWithGoogle();
		console.log('Successfully logged in');
		window.location.href = '/';
	} catch (err) {
		console.log(' There was an auth error', err);
	}
}

export const getSessionUser: () => Promise<User | null> = async () => {
	return new Promise((resolve) => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				resolve({
					uid: user.uid,
					email: user.email ? user.email : 'No email registered',
					displayName: user.displayName ? user.displayName : 'No full name added',
					isCurator: await getIsCurator(user.uid)
				});
			} else {
				resolve(null);
			}
		});
	});
};

export const getIsCurator = async (userId: string) => {
	const docRef = doc(db, 'users', userId);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data().isCurator;
	} else {
		// docSnap.data() will be undefined in this case
		console.log('No such document!');
		return false;
	}
};
