import { getCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		header: {
			type: 'back',
			href: '/browse'
		},
		collection: await getCollection(params.slug)
	};
};
