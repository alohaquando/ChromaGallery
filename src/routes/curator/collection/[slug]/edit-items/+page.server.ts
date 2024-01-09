import { error, fail, redirect } from '@sveltejs/kit';
import { handleUpdateCollection } from '$lib/data/collection';
export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const collectionId: string = formData.get('collectionId') as string;
		const itemList = formData.get('itemList');

		try {
			await handleUpdateCollection(collectionId, {
				itemList: itemList
			});
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/collection/${collectionId}`);
	}
};

export let ssr = false;
