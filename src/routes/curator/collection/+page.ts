import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		collections: await getAllCollection()
	};
};
