import { getCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		header: {
			type: 'back',
			href: '/curator/items'
		},
		collection: await getCollection(params.slug)
	};
};
