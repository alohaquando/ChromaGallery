import { getCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		collection: await getCollection(params.slug),
		collectionId: params.slug,
		header: {
			type: 'back',
			href: '/curator/collection'
		}
	};
};
