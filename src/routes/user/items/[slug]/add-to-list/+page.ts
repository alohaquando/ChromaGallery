import { onMount } from 'svelte';
import { getAuth } from 'firebase/auth';
import { listStore } from '$lib/stores/dataLoad';

// @ts-ignore
export const load = ({ params }) => {
	return {
		slug: params.slug,
		list: listStore.getUserLists(params.slug)
	};
};

// onMount(async () => {
// 	const authen = getAuth();
// 	const userId = authen.currentUser?.uid;
// 	await listStore.getUserLists(userId);
// 	listStore.subscribe((lists) => {
// 		console.log(lists);
// 	});
// 	// console.log($itemStore);
// });
