import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	let { session } = await parent();
	if (!session || !session.isCurator) {
		throw redirect(303, '/curator-only');
	}
	return {
		header: {
			type: 'curator'
		},
		navbar: {
			type: 'curator'
		}
	};
};
