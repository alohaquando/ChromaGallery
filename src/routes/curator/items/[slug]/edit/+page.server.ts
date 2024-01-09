import { error, fail, redirect } from '@sveltejs/kit';
import { getItem, handleCreateItem, handleUpdateItem } from '$lib/data/item';

export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();

		const itemId: string = formData.get('itemID') as string;
		const author = formData.get('artist') as string;
		const description = formData.get('desc') as string;
		const imageUrl: any = formData.get('imageUrl') as string;
		const isFeatured = false;
		const location = formData.get('location') as string;
		const title = formData.get('name') as string;
		const year = formData.get('time') as string;

		if (imageUrl === '') {
			return fail(400, {
				message: 'Please add an image'
			});
		}

		try {
			await handleUpdateItem(itemId, {
				author,
				description,
				imageUrl,
				isFeatured,
				location,
				title,
				year
			});
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/items/${itemId}`);
	}
};

export let ssr = false;
