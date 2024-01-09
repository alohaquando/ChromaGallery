import { getAllItems, getFeaturedItems } from '$lib/data/item';

export const load = async () => {
	return {
		background: {
			design: 'top'
		},
		items: await getAllItems(),
		featuredItems: await getFeaturedItems()
	};
};
