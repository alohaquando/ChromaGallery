import { getAllItems, getFeaturedItems } from '$lib/data/item';

export const load = () => {
	return {
		featuredItems: getFeaturedItems(),
		allItems: getAllItems(),
		background: {
			toggled: false
		}
	};
};
