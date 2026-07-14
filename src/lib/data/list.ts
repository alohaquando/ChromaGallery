import type { List } from '$lib/data/dataModels';
import { mockLists } from '$lib/data/mockData';

// In-memory mock store, keyed by userId. Nothing persists — a reload resets to the seed data.
let userLists: Record<string, List[]> = Object.fromEntries(
	Object.entries(mockLists).map(([userId, lists]) => [
		userId,
		lists.map((l) => ({ ...l, items: [...l.items] }))
	])
);

function getOrCreateUserLists(userId: string) {
	if (!userLists[userId]) {
		userLists[userId] = [{ id: 'bookmark', title: 'Bookmarks', description: 'Saved favorites', items: [] }];
	}
	return userLists[userId];
}

export const getUsersAllLists = async (userId: string) => {
	if (!userId) {
		return;
	}
	return getOrCreateUserLists(userId);
};

export const getUserOneList = async (userId: string, listId: string) => {
	if (!userId) {
		return;
	}
	return getOrCreateUserLists(userId).find((l) => l.id === listId);
};

export const handleAddToList = async (userId: string, listId: string, itemId: string) => {
	const list = getOrCreateUserLists(userId).find((l) => l.id === listId);
	if (list) {
		const index = list.items.indexOf(itemId);
		if (index !== -1) {
			list.items.splice(index, 1);
		} else {
			list.items.push(itemId);
		}
	}
	console.log('Added successfully');
};

export const handleAddMultipleToList = async (userId: string, listId: string, itemIds: string[]) => {
	const list = getOrCreateUserLists(userId).find((l) => l.id === listId);
	if (list) {
		itemIds.forEach((itemId) => {
			if (!list.items.includes(itemId)) {
				list.items.push(itemId);
			}
		});
	}
	console.log('Added successfully');
};

export const handleAddToMultipleList = async (userId: string, listIds: string[], itemId: string) => {
	if (!listIds) {
		return;
	}
	const lists = getOrCreateUserLists(userId);
	listIds.forEach((listId) => {
		const list = lists.find((l) => l.id === listId);
		if (list && !list.items.includes(itemId)) {
			list.items.push(itemId);
		}
	});
	console.log('Added successfully');

	window.location.href = '/items/' + itemId;
};

export const handleCreateList = async (
	userId: string,
	title: string = 'My Title',
	description: string = 'My Subtitle'
) => {
	if (!userId || !title || title === '' || description === '' || !description) {
		console.log('Please fill the form');
		return;
	}
	const lists = getOrCreateUserLists(userId);
	const newList: List = {
		id: `l${Date.now()}`,
		title,
		description,
		items: []
	};
	lists.push(newList);
	window.location.href = '/account';
};

export async function handleDeleteList(userId: string, listId: string) {
	const lists = getOrCreateUserLists(userId);
	const index = lists.findIndex((l) => l.id === listId);
	if (index !== -1) {
		lists.splice(index, 1);
		console.log('Item successfully deleted!');
		window.location.href = '/account';
	} else {
		console.log('Item does not exist.');
	}
}

export async function handleUpdateList(userId: string, listId: string, fieldsToUpdate: object) {
	const list = getOrCreateUserLists(userId).find((l) => l.id === listId);
	if (list) {
		Object.assign(list, fieldsToUpdate);
	}
	return list;
}
