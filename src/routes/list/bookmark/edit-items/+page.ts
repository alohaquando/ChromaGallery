import { getUserOneList, getUsersAllLists } from '$lib/data/list';
import { getAllItems } from '$lib/data/item';

// @ts-ignore
export async function load({ parent, params }) {
	const { session } = await parent();
	const bookmark = getUserOneList(session?.uid, 'bookmark');
	return {
		param: params.slug,
		modal: {
			toggled: true,
			title: 'Edit items',
			exit: true
		},
		bookmark: await bookmark,
		userId: session?.uid,
		listId: params.slug,
		items: await getAllItems()
	};
}
