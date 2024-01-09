import { getAllItems, getFeaturedItems } from '$lib/data/item';

export const load = async () => {
	return {
		background: {
			toggled: false
		},
		featuredItems: await getFeaturedItems(),
		allItems: await getAllItems()
	};
};
