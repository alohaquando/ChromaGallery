import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { session } = await parent();
	if (session?.displayName !== '') {
		redirect(300, '/account');
	}
	return {};
};
