import { getItem } from '$lib/data/item';

// @ts-ignore
export const load = async ({ params }) => {
	return {
		slug: params.slug,
		header: {
			type: 'back',
			href: '/browse'
		},
		item: await getItem(params.slug)
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
