import { getItem } from '$lib/data/item';
import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		header: {
			type: 'back',
			href: '/browse'
		},
		collections: await getAllCollection()
	};
};
