import { filterItem, getAllItems } from '$lib/data/item';
import { getUsersAllLists } from '$lib/data/list';
import type { List } from '$lib/data/dataModels';

// @ts-ignore
export const load = async ({ parent }) => {
	const { session } = await parent();
	const lists = await getUsersAllLists(session?.uid);
	// @ts-ignore
	const bookmark: List | undefined = lists
		? lists.find((list) => list.id === 'bookmark')
		: undefined;
	let items = undefined;
	if (bookmark) {
		items = await filterItem(bookmark?.items);
	}

	return {
		modal: {
			toggled: true,
			title: 'Add item to list',
			exit: true
		},
		items: items
	};
};
