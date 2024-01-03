import { handleCreateList } from '$lib/data/list';

export async function load() {
	return {
		modal: {
			toggled: true,
			title: 'Create new list',
			exit: true
		}
	};
}
