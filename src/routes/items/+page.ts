import { getAllItems } from '$lib/data/item';
import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		header: {
			type: 'back',
			href: '/browse'
		},
		allItem: await getAllItems(),
		background: {
			design: 'top'
		}
	};
};
