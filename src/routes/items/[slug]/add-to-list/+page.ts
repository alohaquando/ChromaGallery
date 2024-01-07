import { onMount } from 'svelte';
import { getAuth } from 'firebase/auth';
import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ params, parent }) => {
	const { session } = await parent();
	return {
		slug: params.slug,
		lists: await getUsersAllLists(session?.uid),
		modal: {
			toggled: true,
			title: 'Add to list',
			exit: true
		}
	};
};

// onMount(async () => {
// 	const authen = getAuth();
// 	const userId = authen.currentUser?.uid;
// 	await listStore.getUsersAllLists(userId);
// 	listStore.subscribe((lists) => {
// 		console.log(lists);
// 	});
// 	// console.log($itemStore);
// });
