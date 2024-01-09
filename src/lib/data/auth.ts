import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	reauthenticateWithCredential,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateEmail,
	updatePassword,
	updateProfile,
	verifyBeforeUpdateEmail
} from 'firebase/auth';
import { auth, db } from '$lib/services/firebase/firebase';
import type { User } from '$lib/data/dataModels';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { EmailAuthProvider } from 'firebase/auth';

export const authHandlers = {
	signup: async (email: string, pass: string) => {
		await createUserWithEmailAndPassword(auth, email, pass);
	},
	login: async (email: string, pass: string) => {
		await signInWithEmailAndPassword(auth, email, pass);
	},
	loginWithGoogle: async () => {
		await signInWithPopup(auth, new GoogleAuthProvider());
	},
	logout: async () => {
		await signOut(auth);
	},
	updateUserName: async (name: string) => {
		await updateProfile(auth.currentUser, { displayName: name });
	},
	updateEmail: async (email: string) => {
		await verifyBeforeUpdateEmail(auth.currentUser, email);
	},
	updatePassword: async (newPassword: string) => {
		await updatePassword(auth.currentUser, newPassword);
	},
	sendResetPassword: async (email: string) => {
		await sendPasswordResetEmail(auth, email);
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
			throw new Error('Password does not match');
		}
		await authHandlers.signup(email, password);

		console.log('Successfully signed up');

		const defaultAccountSetUp = auth.onAuthStateChanged(async (user) => {
			if (!user) {
				return;
			}

			let dataToSetToStore: any;
			const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) {
				const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
				dataToSetToStore = {
					email: user?.email,
					title: 'Bookmarks',
					items: []
				};
				await setDoc(userRef, dataToSetToStore, { merge: true });
				// Set Default Account as notCurator
				await setDoc(
					doc(db, 'users', user.uid),
					{
						isCurator: false
					},
					{ merge: true }
				);
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
		});

		await authHandlers.login(email, password);

		return true;
	} catch (err) {
		console.log(' There was an auth error', err);
		throw err;
	}
}

export async function handleAuthenticate(email: string, password: string) {
	if (!email || !password) {
		throw new Error('Email or password is empty');
	}
	try {
		await authHandlers.login(email, password);
		return true;
	} catch (err) {
		console.log(' There was an auth error', err);
		throw err;
	}
}

export async function handleAuthenticateGoogle() {
	try {
		await authHandlers.loginWithGoogle();
		const defaultAccountSetUp = auth.onAuthStateChanged(async (user) => {
			if (!user) {
				return;
			}

			let dataToSetToStore: any;
			const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
				dataToSetToStore = {
					email: user?.email,
					title: 'Bookmarks',
					items: []
				};
				await setDoc(userRef, dataToSetToStore, { merge: true });
				// Set Default Account as notCurator
				await setDoc(
					doc(db, 'users', user.uid),
					{
						isCurator: false
					},
					{ merge: true }
				);
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
		});

		window.location.href = '/';

		console.log('Successfully logged in');
	} catch (err) {
		console.log(' There was an auth error', err);
		throw err;
	}
}

export async function handleSetDisplayName(displayName: string) {
	try {
		if (displayName.length < 3) {
			console.log('Display name is invalid');
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

export async function handleUpdateDisplayName(
	displayName: string,
	currEmail: string,
	currPassword: string
) {
	const user = auth.currentUser;
	try {
		try {
			const credential = EmailAuthProvider.credential(currEmail, currPassword);
			await reauthenticateWithCredential(user, credential);
		} catch (error) {
			console.log('error', 'The email or password is incorret', error);
			return;
		}

		if (displayName.length < 3) {
			console.log('Display name is invalid');
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

export async function handleUpdateEmail(
	newEmail: string,
	confirmNewEmail: string,
	currEmail: string,
	currPassword: string
) {
	const user = auth.currentUser;
	try {
		try {
			const credential = EmailAuthProvider.credential(currEmail, currPassword);
			await reauthenticateWithCredential(user, credential);
		} catch (error) {
			console.log('error', 'The email or password is incorret', error);
			return;
		}

		if (newEmail != confirmNewEmail) {
			console.log('Please confirm your email');
			return;
		}
		await authHandlers.updateEmail(newEmail);

		console.log('Successfully Update email');

		window.location.href = '/';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdatePassword(
	newPassword: string,
	confirmNewPassword: string,
	currEmail: string,
	currPassword: string
) {
	const user = auth.currentUser;
	try {
		try {
			const credential = EmailAuthProvider.credential(currEmail, currPassword);
			await reauthenticateWithCredential(user, credential);
		} catch (error) {
			console.log('error', 'The email or password is incorret', error);
			return;
		}

		if (newPassword.length < 5) {
			console.log('Password length must be longer than 5');
			return;
		}

		if (newPassword != confirmNewPassword) {
			console.log('Please confirm your password');
			return;
		}
		await authHandlers.updatePassword(newPassword);

		console.log('Successfully Update password');

		window.location.href = '/';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export const handleResetPassword = async (email: string) => {
	try {
		await authHandlers.sendResetPassword(email);
		console.log('Successfully Send Reset Password Email');

		window.location.href = '/';
	} catch (err) {
		console.log(err);
	}
};

export const getSessionUser: () => Promise<User | null> = async () => {
	return new Promise((resolve) => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				resolve({
					uid: user.uid,
					email: user.email ? user.email : 'No email registered',
					displayName: user.displayName ? user.displayName : '',
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

export async function handleUpdateCuratorState(userId: string, isCurator: boolean) {
	const userRef = doc(db, 'users', userId);
	try {
		await updateDoc(userRef, {
			isCurator
		});
		return true;
	} catch (err) {
		console.log('There was an auth error', err);
		throw err;
	}
}
export async function completeAccount(userId: string, isCurator: boolean, displayName: string) {
	const userRef = doc(db, 'users', userId);
	try {
		if (displayName.length === 0) {
			throw new Error('Display name must be not empty');
		}

		await authHandlers.updateUserName(displayName);

		await updateDoc(userRef, {
			isCurator: isCurator
		});

		return true;
	} catch (err) {
		console.log('There was an auth error', err);
		throw err;
	}
}

export async function updateCuratorState(userId: string, isCurator: boolean) {
	const userRef = doc(db, 'users', userId);
	try {
		await updateDoc(userRef, {
			isCurator
		});
		return true;
	} catch (err) {
		console.log('There was an auth error', err);
		throw err;
	}
}
