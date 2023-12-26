import { getSessionUser } from '$lib/data/auth';

export const load = async () => {
	return {
		session: await getSessionUser()
	};
};
