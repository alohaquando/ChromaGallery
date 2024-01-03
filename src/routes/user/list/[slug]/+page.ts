import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export const load = async ({ parent, params }) => {
	const { session } = await parent();
	const lists = await getUserOneList(session?.uid, params.slug);
	return {
		list: await lists,
		param: params.slug
	};
};
