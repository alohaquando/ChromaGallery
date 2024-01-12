import { fail, redirect } from '@sveltejs/kit';

import { handleCreateCollection } from '$lib/data/collection';

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const description = formData.get('desc') as string;
		const title = formData.get('title') as string;

		let result;

		try {
			result = await handleCreateCollection(title, description);
		} catch (error) {
			return fail(400, {
				message: error
			});
		}
		throw redirect(300, `/curator/collection/${result.id}`);
	}
};
export let ssr = false;