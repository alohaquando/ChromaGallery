import { redirect } from '@sveltejs/kit';

export const load = async () => {
	return {
		notSignedIn: true
	};
};
