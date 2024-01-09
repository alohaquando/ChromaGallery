import { CuratorOnlyCases } from '$lib/data/CuratorOnlyCases';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { session } = await parent();
	let blockingCase = null;

	if (session === null) blockingCase = CuratorOnlyCases.NOT_SIGNED_IN;
	if (session?.isCurator === false) blockingCase = CuratorOnlyCases.NOT_CURATOR;

	if (blockingCase === null) {
		throw redirect(300, '/curator/items');
	} else
		return {
			blockingCase
		};
};
