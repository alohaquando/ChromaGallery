import { getAllCollection } from '$lib/data/collection';

// @ts-ignore
export async function load() {
	return {
		header: {
			type: 'back',
			href: './'
		}
	};
}
