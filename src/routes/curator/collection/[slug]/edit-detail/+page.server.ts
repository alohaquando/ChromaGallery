import { error, fail, redirect } from '@sveltejs/kit';
import { handleUpdateCollection } from '$lib/data/collection';
export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();

		const collectionId: string = formData.get('collectionId') as string;
		const description = formData.get('desc') as string;
		const title = formData.get('name') as string;

		try {
			await handleUpdateCollection(collectionId, {
				description,
				title
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
