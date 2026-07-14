import type { Collection } from '$lib/data/dataModels';
import { mockCollections } from '$lib/data/mockData';

// In-memory mock store. Nothing persists — a reload resets to the seed data.
let collections: Collection[] = mockCollections.map((c) => ({ ...c, items: [...c.items] }));

export const getCollection = async (collectionId: string) => {
	return collections.find((c) => c.id === collectionId);
};

export const getAllCollection = async () => {
	return collections;
};

export async function handleDeleteCollection(collectionId: string) {
	const index = collections.findIndex((c) => c.id === collectionId);
	if (index !== -1) {
		collections.splice(index, 1);
		console.log('Collection successfully deleted!');
	} else {
		console.log('Collection does not exist.');
	}
}

export async function handleDeleteItemFromCollection(collectionId: string, itemId: string) {
	const collection = collections.find((c) => c.id === collectionId);
	if (collection) {
		const itemIndex = collection.items.indexOf(itemId);
		if (itemIndex !== -1) {
			collection.items.splice(itemIndex, 1);
			console.log('Item removed successfully');
		} else {
			console.log('Item not found in the collection');
		}
	} else {
		console.error('Collection not found');
	}
}

export async function handleCreateCollection(title: string, description: string) {
	if (!title || !description) {
		console.log('Please add title');
		return;
	}
	const newCollection: Collection = {
		id: `c${Date.now()}`,
		title,
		description,
		items: []
	};
	collections.push(newCollection);
	return { id: newCollection.id };
}

export async function handleUpdateCollection(collectionId: string, fieldsToUpdate: object) {
	const collection = collections.find((c) => c.id === collectionId);
	if (collection) {
		Object.assign(collection, fieldsToUpdate);
	}
	return collection;
}

export const handleAddItemToCollection = async (collectionId: string, itemId: string) => {
	if (!itemId) {
		return;
	}
	const collection = collections.find((c) => c.id === collectionId);
	if (collection && !collection.items.includes(itemId)) {
		collection.items.push(itemId);
	}
	console.log('Added successfully to Collection ID :', collectionId);
};

export const handleAddMultipleItemToCollection = async (collectionId: string, itemIds: string[]) => {
	if (!itemIds) {
		return;
	}
	const collection = collections.find((c) => c.id === collectionId);
	if (collection) {
		itemIds.forEach((itemId) => {
			if (!collection.items.includes(itemId)) {
				collection.items.push(itemId);
			}
		});
	}
	console.log('Added successfully to Collection ID :', collectionId);

	window.location.href = '/curator/collection/' + collectionId;
};
