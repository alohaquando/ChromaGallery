import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

export const getUserLists = async (userId: string) => {
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
		} catch (error) {
			console.error('Error fetching all lists: ', error.message);
			throw error;
		}
	}
};

export const getUserList = async (userId: string, listId: string) => {
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
		} catch (error) {
			console.error('Error fetching all items: ', error.message);
			throw error;
		}
	}
};
