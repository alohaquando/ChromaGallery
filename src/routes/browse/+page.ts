import { getAllItems, getAllCollection } from '$lib/stores/dataLoad';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		allItem: await getAllItems(),
		allCollection: await getAllCollection()
	};
};
