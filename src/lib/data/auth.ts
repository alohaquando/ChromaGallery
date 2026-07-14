import type { User } from '$lib/data/dataModels';
import { mockUsers, type MockAccount } from '$lib/data/mockData';

// In-memory mock session. Resets on page reload — this app has no real backend anymore.
let accounts: MockAccount[] = mockUsers.map((u) => ({ ...u }));
let currentUser: MockAccount | null = null;

const sessionListeners: Array<(user: MockAccount | null) => void> = [];

function notifySession() {
	sessionListeners.forEach((cb) => cb(currentUser));
}

function findAccount(email: string) {
	return accounts.find((u) => u.email?.toLowerCase() === email.toLowerCase());
}

export const authHandlers = {
	signup: async (email: string, pass: string) => {
		if (findAccount(email)) {
			throw new Error('auth/email-already-in-use');
		}
		const newAccount: MockAccount = {
			uid: `u${accounts.length + 1}`,
			email,
			password: pass,
			displayName: '',
			isCurator: false
		};
		accounts.push(newAccount);
		currentUser = newAccount;
		notifySession();
	},
	login: async (email: string, pass: string) => {
		const account = findAccount(email);
		if (!account || account.password !== pass) {
			throw new Error('auth/invalid-login-credentials');
		}
		currentUser = account;
		notifySession();
	},
	loginWithGoogle: async () => {
		// No real OAuth backend anymore — sign in as the demo curator account.
		currentUser = accounts.find((u) => u.isCurator) ?? accounts[0];
		notifySession();
	},
	logout: async () => {
		currentUser = null;
		notifySession();
	},
	updateUserName: async (name: string) => {
		if (currentUser) {
			currentUser.displayName = name;
		}
	},
	updateEmail: async (email: string) => {
		if (currentUser) {
			currentUser.email = email;
		}
	},
	updatePassword: async (newPassword: string) => {
		if (currentUser) {
			currentUser.password = newPassword;
		}
	},
	sendResetPassword: async (email: string) => {
		console.log(`(demo) Password reset email would be sent to ${email}`);
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
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdateDisplayName(
	displayName: string,
	currEmail: string,
	currPassword: string
) {
	try {
		const account = currentUser;
		if (!account || account.password !== currPassword || account.email !== currEmail) {
			console.log('error', 'The email or password is incorrect');
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
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdateEmail(
	newEmail: string,
	confirmNewEmail: string,
	currEmail: string,
	currPassword: string
) {
	try {
		const account = currentUser;
		if (!account || account.password !== currPassword || account.email !== currEmail) {
			console.log('error', 'The email or password is incorrect');
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
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdatePassword(
	newPassword: string,
	confirmNewPassword: string,
	currEmail: string,
	currPassword: string
) {
	try {
		const account = currentUser;
		if (!account || account.password !== currPassword || account.email !== currEmail) {
			console.log('error', 'The email or password is incorrect');
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
	if (!currentUser) {
		return null;
	}
	return {
		uid: currentUser.uid,
		email: currentUser.email,
		displayName: currentUser.displayName,
		isCurator: currentUser.isCurator
	};
};

export const getIsCurator = async (userId: string) => {
	const account = accounts.find((u) => u.uid === userId);
	return account?.isCurator ?? false;
};

export async function handleUpdateCuratorState(userId: string, isCurator: boolean) {
	const account = accounts.find((u) => u.uid === userId);
	if (account) {
		account.isCurator = isCurator;
	}
	return true;
}

export async function completeAccount(userId: string, isCurator: boolean, displayName: string) {
	if (displayName.length === 0) {
		throw new Error('Display name must be not empty');
	}
	await authHandlers.updateUserName(displayName);
	const account = accounts.find((u) => u.uid === userId);
	if (account) {
		account.isCurator = isCurator;
	}
	return true;
}

export async function updateCuratorState(userId: string, isCurator: boolean) {
	const account = accounts.find((u) => u.uid === userId);
	if (account) {
		account.isCurator = isCurator;
	}
	return true;
}
