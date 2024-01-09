import { fail, redirect } from '@sveltejs/kit';
import { handleCreateCollection } from '$lib/data/collection';

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();

		const description = formData.get('desc') as string;
		const title = formData.get('name') as string;

		let result;

		try {
			result = await handleCreateCollection(description, title);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/curator/items/${result.id}`);
	}
};

export let ssr = false;
