import { arrayUnion, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

export const getUsersAllLists = async (userId: string) => {
	if (userId) {
		try {
			// Reference to the "items" collection
			const listsCollection = collection(db, 'users', userId, 'lists');

			// Fetch all documents in the "items" collection
			const querySnapshot = await getDocs(listsCollection);

			// Extract data from query snapshot
			const listsData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			console.log(listsData);
			return listsData;
		} catch (error: any) {
			console.error('Error fetching all lists: ', error.message);
			throw error;
		}
	}
};

export const getUserOneList = async (userId: string, listId: string) => {
	if (userId) {
		try {
			// Reference to the "items" collection
			const listCollection = collection(db, 'users', userId, 'lists', listId);

			// Fetch all documents in the "items" collection
			const querySnapshot = await getDocs(listCollection);

			// Extract data from query snapshot
			const listData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			return listData;
		} catch (error: any) {
			console.error('Error fetching all items: ', error.message);
			throw error;
		}
	}
};
export const handleAddToList = async (userId: string, listId: string, itemId: string) => {
	await setDoc(
		doc(db, 'users', userId, 'lists', listId),
		{
			items: arrayUnion(itemId)
		},
		{ merge: true }
	);
	console.log('Bookmarked successfully');
};
