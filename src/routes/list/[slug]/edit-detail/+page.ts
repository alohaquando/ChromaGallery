import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export async function load({ parent, params }) {
	const { session } = await parent();
	const list = await getUserOneList(session?.uid, params.slug);
	return {
		modal: {
			toggled: true,
			title: 'Edit list',
			exit: true
		},
		param: params.slug,
		list: list
	};
}
