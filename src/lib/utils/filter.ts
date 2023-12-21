import type { Item, Collection, List } from '../stores/model';
import { allCollection, allItem, allList } from '../stores/data';

export function findItem(idList: string[]): Item[] {
	return allItem.filter((item) => idList.includes(item.id));
}

export function findCollection(idList: string[]): Collection[] {
	return allCollection.filter((collection) => idList.includes(collection.id));
}

export function findList(idList: string[]): List[] {
	return allList.filter((list) => idList.includes(list.id));
}
