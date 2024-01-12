import { fail, redirect } from '@sveltejs/kit';
import { handleDeleteCollection } from '$lib/data/collection';
export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();

		const collectionId = formData.get('collectionId') as string;

		try {
			await handleDeleteCollection(collectionId);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/collection`);
	}
};
