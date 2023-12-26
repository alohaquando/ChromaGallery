import { getFeaturedItems } from '$lib/data/item';

export const load = async () => {
	return {
		featuredItems: await getFeaturedItems()
	};
};
