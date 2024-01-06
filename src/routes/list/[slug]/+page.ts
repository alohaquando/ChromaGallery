import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent, params }) => {
	const { session } = await parent();
	const list = getUserOneList(session?.uid, params.slug);
	return {
		header: {
			type: 'back',
			href: '/account'
		},
		param: params.slug,
		list: await list
	};
};
