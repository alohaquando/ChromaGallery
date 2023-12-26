import { onMount } from 'svelte';
import { getAuth } from 'firebase/auth';
import { getUsersAllLists } from '$lib/data/list';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		list: await getUsersAllLists(params.slug),
		modal: {
			toggled: true,
			title: 'Add to list',
			button: 'Save',
			exit: true,
			buttonFunction: function () {}
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
