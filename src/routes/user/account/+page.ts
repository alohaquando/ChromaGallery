import { getSessionUser } from '$lib/data/auth';
import { getUserLists } from '$lib/data/list';

export const load = async ({ parent }) => {
	const { session } = await parent();
	let lists = getUserLists(session?.uid);
	return {
		lists: lists
	};
};
