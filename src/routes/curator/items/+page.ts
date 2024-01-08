import { getAllItems } from '$lib/data/item';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		items: await getAllItems()
	};
};
