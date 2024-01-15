import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where
} from 'firebase/firestore';
import { db, storage } from '$lib/services/firebase/firebase';
import { getAuth } from 'firebase/auth';
import type { Collection, List } from '$lib/data/dataModels';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const getFeaturedItems = async () => {
	try {
		// Reference to the "items" collection
		const itemsCollection = collection(db, 'items');

		// Create a query against the collection.
		const q = query(itemsCollection, where('isFeatured', '==', true));

		// Fetch all documents in the "items" collection
		const querySnapshot = await getDocs(q);

		// Extract data from query snapshot
		const itemsData = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		return itemsData;
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};

export async function updateItemFeatureStatus(itemId: string, isFeatured: boolean) {
	const itemDocRef = doc(db, 'items', itemId);

	try {
		// Update the 'isFeatured' field in the document
		await updateDoc(itemDocRef, { isFeatured });

		console.log('Item feature status updated successfully');
	} catch (error) {
		console.error('Error updating item feature status:', error.message);
		throw error;
	}
}

export const getItem = async (id: string) => {
	try {
		const docRef = doc(db, 'items', id);
		const docSnap = await getDoc(docRef);

		if (docSnap.data() === undefined) {
			throw new Error('Item not found');
		} else {
			return docSnap.data();
		}
	} catch (error) {
		console.error('Error fetching items: ', error.message);
		return null;
	}
};
export const getAllItems = async () => {
	// Reference to the "items" collection
	const itemsCollection = collection(db, 'items');

	// Fetch all documents in the "items" collection
	const querySnapshot = await getDocs(itemsCollection);

	// Extract data from query snapshot
	const itemsData = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	}));

	return itemsData;
};

export const getItemFromIdList = async (idList: string[]) => {
	const itemPromises = idList.map(async (itemId) => {
		const item = await getItem(itemId);
		return { id: itemId, ...item }; // Include the id in the returned item
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

// export async function handleBookmark(itemId: string) {
// 	const authen = getAuth();
// 	const userId = authen.currentUser.uid;

// 	await setDoc(
// 		doc(db, 'users', userId, 'lists', 'bookmark'),
// 		{
// 			items: arrayUnion(itemId)
// 		},
// 		{ merge: true }
// 	);
// 	console.log('Bookmarked successfully');

// 	return true;
// }

export async function handleBookmark(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;
	if (userId == null) {
		window.alert('Please Logged In First');
	}
	const userDocRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const userDocSnap = await getDoc(userDocRef);

	if (userDocSnap.exists()) {
		const currentItems = userDocSnap.data().items || [];

		// Check if the item already exists in the list
		const itemIndex = currentItems.indexOf(itemId);

		if (itemIndex !== -1) {
			// If the item exists, remove it from the list
			currentItems.splice(itemIndex, 1);
		} else {
			// If the item doesn't exist, add it to the list
			currentItems.push(itemId);
		}

		// Update the 'items' field in the document
		await setDoc(userDocRef, { items: currentItems });
		console.log('Bookmarked successfully');
	} else {
		console.error('Bookmarked failed');
	}
}

export async function checkIfBookmarked(itemId: string) {
	const authen = getAuth();
	const userId = authen.currentUser.uid;
	const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
	const docSnap = await getDoc(docRef);

	if (docSnap.data().items.includes(itemId)) {
		return true;
	}
	return false;
}

export async function uploadFileGetUrl(image: File) {
	return new Promise<string>((resolve, reject) => {
		const imageRef = ref(storage, `images/${image.name}`);
		(async () => {
			try {
				let snapshot = await uploadBytes(imageRef, image);
				let downloadURL = await getDownloadURL(snapshot.ref);
				resolve(downloadURL);
			} catch (err) {
				reject(err);
			}
		})();
	});
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
	return new Promise((resolve, reject) => {
		const imageRef = ref(storage, `images/${image.name}`);
		// 'file' comes from the Blob or File API
		(async () => {
			try {
				// let snapshot = await uploadBytes(imageRef, image);
				// console.log(snapshot);
				// let downloadURL = await getDownloadURL(snapshot.ref);

				let docRef = await addDoc(collection(db, 'items'), {
					author,
					description,
					image,
					isFeatured,
					location,
					title,
					year
				});
				console.log(docRef);
				resolve(docRef);
			} catch (err) {
				console.error(err);
				reject(err);
			}
		})();
	});
	// try {
	// uploadBytes(imageRef, image)
	// 	.then((snapshot) => {
	// 		console.log('Uploaded a blob or file!');
	// 		console.log(snapshot);
	// 		return getDownloadURL(snapshot.ref);
	// 	})
	// 	.then(async (downloadURL) => {
	// 		console.log('Download URL is ', downloadURL);
	// 		const docRef = await addDoc(collection(db, 'items'), {
	// 			author,
	// 			description,
	// 			image: downloadURL,
	// 			isFeatured,
	// 			location,
	// 			title,
	// 			year
	// 		});
	// 		console.log('Document written with ID: ', docRef.id);
	// 	});
	// } catch (err) {
	// 	console.log(err);
	// }
}

export async function handleDeleteItem(itemId: string) {
	const itemRef = doc(db, 'items', itemId);
	const itemDoc = await getDoc(itemRef);
	if (itemDoc.exists()) {
		try {
			await deleteDoc(itemRef);
			console.log('Item successfully deleted!');
		} catch (error) {
			console.error('Error deleting item: ', error);
		}
	} else {
		// Document does not exist, handle accordingly
		console.log('Item does not exist.');
	}
}

export async function handleUpdateItem(itemId: string, itemToUpdate: object) {
	console.log(itemId);
	const itemRef = doc(db, 'items', itemId);

	return await updateDoc(itemRef, itemToUpdate);
}

export const filterItem = async (idList: string[] | undefined) => {
	const allItems = await getAllItems();
	return allItems.filter((item) => !idList?.includes(item.id));
};

export async function updateAllItems(itemIds) {
	try {
		const itemsCollection = collection(db, 'items');
		const querySnapshot = await getDocs(itemsCollection);

		querySnapshot.forEach((d) => {
			const itemRef = doc(db, 'items', d.id);
			updateDoc(itemRef, { isFeatured: false });
		});

		console.log('All items updated successfully.');

		try {
			for (const itemId of itemIds) {
				const itemRef = doc(db, 'items', itemId);
				await updateDoc(itemRef, { isFeatured: true });
			}

			console.log('Items updated to featured successfully.');
		} catch (error) {
			console.error('Error updating items to featured:', error);
		}
	} catch (error) {
		console.error('Error updating items:', error);
	}
}

// async function updateItemsToFeatured(itemIds) {
//
// }
