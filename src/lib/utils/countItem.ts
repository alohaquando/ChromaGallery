export function count(arr: any[]) {
	const itemCount = arr.length;
	if (itemCount === 0) {
		return 'No items.';
	} else {
		return itemCount === 1 ? `${itemCount} item` : `${itemCount} items`;
	}
}
