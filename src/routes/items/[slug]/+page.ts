import { getItem, getRandomItemIds } from '$lib/data/item';

// @ts-ignore
export const load = async ({ params }) => {
	let relatedIds: string[] = await getRandomItemIds();
	let relatedItems: unknown[] = [];

	for (const id of relatedIds) {
		let relatedItem = await getItem(id);
		relatedItems.push(relatedItem);
	}

	return {
		slug: params.slug,
		header: {
			type: 'back',
			href: '/browse'
		},
		item: await getItem(params.slug),
		relatedItems
	};
};
//
// onMount(async () => {
// 	itemStore.getItem(data.slug);
// 	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
// 	const docSnap = await getDoc(docRef);
// 	if (docSnap.exists()) {
// 		let preLoad = docSnap.data().item;
// 		console.log(preLoad);
// 	} else {
// 		console.log('No such document!');
// 	}
// });
//
// onMount(async () => {
// 	const authen = getAuth();
// 	const userId = authen.currentUser.uid;
// 	console.log(authen.currentUser.uid);
//
// 	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
// 	const docSnap = await getDoc(docRef);
// 	if (docSnap.exists()) {
// 		let preLoad = docSnap.data().item;
// 		console.log(preLoad);
// 	} else {
// 		console.log('No such document!');
// 	}
// });
