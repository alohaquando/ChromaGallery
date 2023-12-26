import { itemStore } from '$lib/stores/itemStore';
import { listStore } from '$lib/stores/dataLoad';
import { getAllItems } from '$lib/stores/dataLoad';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		allItem: await getAllItems(),
		allCollection: await listStore.getAllCollection()
	};
};
