import { getAllItems } from '$lib/data/item';
import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export async function load({ parent, params }) {
	const { session } = await parent();
	return {
		modal: {
			toggled: true,
			title: 'Add item to list',
			exit: true
		},
		slug: params.slug,
		list: await getUserOneList(session.uid, params.slug),
		items: await getAllItems()
	};
}
