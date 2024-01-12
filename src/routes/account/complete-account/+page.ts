import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { session } = await parent();
	if (session?.displayName !== '') {
		throw redirect(300, '/account');
	}
	return {};
};
