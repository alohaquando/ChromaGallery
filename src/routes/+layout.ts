import { getSessionUser } from '$lib/data/auth';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	let session = await getSessionUser();
	if (session?.displayName === '' && url.pathname !== '/account/complete-account') {
		throw redirect(300, '/account/complete-account');
	}
	return {
		session
	};
};

export const ssr = false;
