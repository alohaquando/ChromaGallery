import { getAllItems } from '$lib/data/item';
import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		allItem: await getAllItems(),
		allCollection: await getAllCollection()
	};
};
