import { getAllItems } from '$lib/data/item';

// @ts-ignore
export const load = async () => {
	return {
		header: {
			type: 'back',
			href: '/browse'
		},
		background: {
			design: 'top'
		},
		allItem: await getAllItems()
	};
};
