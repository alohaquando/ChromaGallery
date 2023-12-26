import { getSessionUser } from '$lib/data/auth';
import { getUsersAllLists } from '$lib/data/list';

export const load = async ({ parent }) => {
	const { session } = await parent();
	let lists = getUsersAllLists(session?.uid);
	return {
		lists: lists
	};
};
