import { getItem } from '$lib/data/item';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		let item = await getItem(params.slug);
		return {
			item,
			id: params.slug,
			modal: {
				toggled: true,
				title: 'Edit item',
				exit: true
			}
		};
	} catch (err) {
		console.log('has error');
		throw error(401, 'Item not found');
	}
}
