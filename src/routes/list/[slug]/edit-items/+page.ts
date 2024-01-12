import { getUserOneList } from '$lib/data/list';
import { getAllItems } from '$lib/data/item';

// @ts-ignore
export const load = async ({ parent, params }) => {
	const { session } = await parent();
	const list = getUserOneList(session?.uid, params.slug);
	return {
		param: params.slug,
		modal: {
			toggled: true,
			title: 'Edit items',
			exit: true
		},
		list: await list,
		userId: session?.uid,
		listId: params.slug,
		items: await getAllItems()
	};
};
