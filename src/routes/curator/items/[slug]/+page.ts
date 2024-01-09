import { getItem } from '$lib/data/item';
import { error } from '@sveltejs/kit';

// @ts-ignore
export const load = async ({ params }) => {
	try {
		let item = await getItem(params.slug);
		return {
			slug: params.slug,
			item,
			header: {
				type: 'back',
				href: '/curator/items'
			}
		};
	} catch (err) {
		console.log('has error');
		throw error(401, 'Item not found');
	}
};
