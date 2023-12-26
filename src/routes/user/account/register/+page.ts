import { authHandlers } from '$lib/stores/store';

export async function load() {
	return {};
}

// export async function handleSignUpAuthenticate(
// 	password: string,
// 	confirmPassword: string,
// 	displayName: string,
// 	email: string
// ) {
// 	try {
// 		if (password !== confirmPassword) {
// 			console.log('Password does not match');
// 			return;
// 		}
//
// 		if (displayName.length < 3) {
// 			console.log('Display name is null');
// 			return;
// 		}
//
// 		await authHandlers.signup(email, password);
//
// 		let error = false;
//
// 		await authHandlers.updateUserName(displayName);
//
// 		console.log('Successfully signed up');
//
// 		await authHandlers.login(email, password);
//
// 		window.location.href = '/';
// 	} catch (err) {
// 		let error = true;
// 		console.log(' There was an auth error', err);
// 	}
// }
