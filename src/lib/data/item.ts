import type { Collection, Item, List } from '$lib/data/dataModels';
import { mockItems } from '$lib/data/mockData';

// In-memory mock store. Nothing persists — a reload resets to the seed data.
let items: Item[] = mockItems.map((i) => ({ ...i }));

export const getFeaturedItems = async () => {
	return items.filter((item) => item.isFeatured);
};

export async function updateItemFeatureStatus(itemId: string, isFeatured: boolean) {
	const item = items.find((i) => i.id === itemId);
	if (item) {
		item.isFeatured = isFeatured;
	}
}

export const getItem = async (id: string) => {
	const item = items.find((i) => i.id === id);
	if (!item) {
		console.error('Item not found');
		return null;
	}
	return item;
};

export const getAllItems = async () => {
	return items;
};

export const getItemFromIdList = async (idList: string[]) => {
	const itemPromises = idList.map(async (itemId) => {
		const item = await getItem(itemId);
		return { id: itemId, ...item };
	});

	return await Promise.all(itemPromises);
};

export const extractItems = async (collection: Collection | List | undefined) => {
	if (collection == undefined) {
		return null;
	}
	const idList = collection.items;
	return await getItemFromIdList(idList);
};

export async function handleBookmark(itemId: string) {
	// Bookmark toggling is handled per-user via list.ts (`handleAddToList`).
	console.log('(demo) Bookmarked', itemId);
}

export async function checkIfBookmarked(itemId: string) {
	return false;
}

export async function uploadFileGetUrl(image: File) {
	// No real storage backend — just reuse a local object URL for the demo session.
	return URL.createObjectURL(image);
}

export async function handleCreateItem(
	author: string,
	description: string,
	image: any,
	isFeatured: boolean,
	location: string,
	title: string,
	year: string
) {
	const newItem: Item = {
		id: `i${Date.now()}`,
		author,
		description,
		image,
		isFeatured,
		location,
		title,
		year
	};
	items.push(newItem);
	return newItem;
}

export async function handleDeleteItem(itemId: string) {
	const index = items.findIndex((i) => i.id === itemId);
	if (index !== -1) {
		items.splice(index, 1);
		console.log('Item successfully deleted!');
	} else {
		console.log('Item does not exist.');
	}
}

export async function handleUpdateItem(itemId: string, itemToUpdate: object) {
	const item = items.find((i) => i.id === itemId);
	if (item) {
		Object.assign(item, itemToUpdate);
	}
	return item;
}

export const filterItem = async (idList: string[] | undefined) => {
	const allItems = await getAllItems();
	return allItems.filter((item) => !idList?.includes(item.id));
};

export async function updateAllItems(itemIds: string[]) {
	items.forEach((item) => (item.isFeatured = false));
	itemIds.forEach((itemId) => {
		const item = items.find((i) => i.id === itemId);
		if (item) {
			item.isFeatured = true;
		}
	});
	console.log('Items updated to featured successfully.');
}

export async function getRandomItemIds() {
	const allItemIds = items.map((i) => i.id);

	if (allItemIds.length <= 2) {
		return allItemIds;
	}

	const randomItemIds: string[] = [];
	while (randomItemIds.length < 2) {
		const randomIndex = Math.floor(Math.random() * allItemIds.length);
		const randomItemId = allItemIds.splice(randomIndex, 1)[0];
		randomItemIds.push(randomItemId);
	}

	return randomItemIds;
}
