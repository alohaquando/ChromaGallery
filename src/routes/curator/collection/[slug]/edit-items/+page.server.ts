import { error, fail, redirect } from '@sveltejs/kit';
import { handleUpdateCollection } from '$lib/data/collection';
export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const collectionId: string = formData.get('collectionId') as string;
		const itemList = formData.get('itemList');

		try {
			function splitAndCreateArray(itemList) {
				return itemList.split(',');
			}

			const resultArray = splitAndCreateArray(itemList);
			await handleUpdateCollection(collectionId, {
				items: resultArray
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
