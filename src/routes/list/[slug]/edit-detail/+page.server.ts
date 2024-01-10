import { error, fail, redirect } from '@sveltejs/kit';
import { handleUpdateCollection } from '$lib/data/collection';
import { handleUpdateList } from '$lib/data/list';
export const actions = {
	edit: async ({ request }) => {
		const formData = await request.formData();

		const userId: string = formData.get('userId') as string;
		const listId: string = formData.get('listId') as string;
		const description = formData.get('desc') as string;
		const title = formData.get('name') as string;
		const itemId: string = formData.get('listId') as string;

		try {
			await handleUpdateList(userId, listId, {
				description,
				title
			});
		} catch (error) {
			return fail(400, {
				message: error
			});
		}

		throw redirect(300, `/list/${listId}`);
	}
};

export let ssr = false;
