import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export async function load({ parent }) {
	const { session } = await parent();
	const lists = await getUsersAllLists(session?.uid);
	const bookmark = lists ? lists.find((list) => list.id === 'bookmark') : undefined;
	return {
		modal: {
			toggled: true,
			title: 'Edit items',
			exit: true
		},
		bookmark: bookmark
	};
}
