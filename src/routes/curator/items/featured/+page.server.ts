import { error, fail, redirect } from '@sveltejs/kit';
import { getItem, handleCreateItem, handleUpdateItem, updateAllItems } from '$lib/data/item';

export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();

		const isFeaturedItemList = formData.get('isFeaturedItemList');
		console.log(isFeaturedItemList);

		try {
			function splitAndCreateArray(isFeaturedItemList) {
				return isFeaturedItemList.split(',');
			}

			const resultArray = splitAndCreateArray(isFeaturedItemList);
			console.log(resultArray);
			await updateAllItems(resultArray);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/items/`);
	}
};

export let ssr = false;
