import { fail, redirect } from '@sveltejs/kit';
import { handleCreateItem, handleDeleteItem } from '$lib/data/item';

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();

		const itemId = formData.get('itemId') as string;

		try {
			await handleDeleteItem(itemId);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/items`);
	}
};

export let ssr = false;
