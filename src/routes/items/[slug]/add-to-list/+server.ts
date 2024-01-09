import { json } from '@sveltejs/kit';
import type { List } from '$lib/data/dataModels';
import { getUsersAllLists } from '$lib/data/list';
import { getSessionUser } from '$lib/data/auth';

// @ts-ignore
export async function GET({ url }) {
	const q = url.searchParams.get('q');
	const user = url.searchParams.get('s');
	console.log(user);

	try {
		let result: {
			lists: List[] | undefined;
		} = {
			lists: undefined
		};
		// @ts-ignore
		const allLists: List[] = await getUsersAllLists(user);

		if (q) {
			result.lists = allLists.filter((list) => list.title.toLowerCase().includes(q));
		} else {
			result.lists = allLists;
		}
		return json(result);
	} catch (error) {
		console.error(error);
		return json(error); // Return error message with status code 500
	}
}
