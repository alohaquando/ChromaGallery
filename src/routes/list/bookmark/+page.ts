import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent }) => {
	const { session } = await parent();
	const lists = await getUsersAllLists(session?.uid);
	const bookmark = lists ? lists.find((list) => list.id === 'bookmark') : undefined;
	return {
		header: {
			type: 'back',
			href: '/account'
		},
		bookmark: bookmark
	};
};
