import { getAllItems } from '$lib/data/item';
import { getUserOneList, getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent }) => {
	const { session } = await parent();
	return {
		modal: {
			toggled: true,
			title: 'Add item to bookmark',
			exit: true
		},
		bookmark: await getUserOneList(session.uid, 'bookmark'),
		items: getAllItems()
	};
};
