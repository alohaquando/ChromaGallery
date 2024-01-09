import { getAllItems, getFeaturedItems } from '$lib/data/item';

export const load = async () => {
	return {
		background: {
			design: 'top'
		},
		allItems: await getAllItems(),
		allFeaturedItems: await getFeaturedItems()
	};
};
