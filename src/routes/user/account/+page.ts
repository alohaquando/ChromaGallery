import { getSessionUser } from '$lib/data/auth';
import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent }) => {
	const { session } = await parent();
	const lists = getUsersAllLists(session?.uid);
	console.log(lists);
	return {
		lists: await lists
	};
};
