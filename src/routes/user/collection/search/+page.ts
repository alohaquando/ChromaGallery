import { getItem } from '$lib/data/item';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		header: {
			type: 'back',
			href: '/browse'
		}
	};
};
