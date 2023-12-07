export function count(arr: any[]) {
	const itemCount = arr.length;
	return itemCount === 1 ? `${itemCount} item` : `${itemCount} items`;
}