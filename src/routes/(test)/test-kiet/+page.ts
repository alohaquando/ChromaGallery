import { extractItems, getItem } from '$lib/data/item';
import { getUserOneList } from '$lib/data/list';

// @ts-ignore
export async function load({ parent }) {
	const { session } = await parent();
	let list2 = await getUserOneList(session.uid, 'CzDuHQZmCo7O7AQ55xxO');
	let itemList1 = extractItems(list2);
	return {
		item1: await getItem('IKDg9uCvRd0yTYmKImMM'),
		list: await getUserOneList(session.uid, '3Ersxwpv91XST2W7zpN1'),
		item2: await getItem('1IOceKCt5Ta3UzyzubgH'),
		itemList1: await itemList1,
		bookmark: await getUserOneList(session.uid, 'bookmark')
	};
}
