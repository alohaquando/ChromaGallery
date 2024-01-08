import { getItem } from '$lib/data/item';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		header: {
			type: 'back',
			href: '/curator/items'
		},
		item: await getItem(params.slug)
	};
};
