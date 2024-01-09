import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent, params }) => {
	const { session } = await parent();
	const list = getUserOneList(session?.uid, params.slug);
	return {
		param: params.slug,
		modal: {
			toggled: true,
			title: 'Edit items',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
		},
		list: await list
	};
};
