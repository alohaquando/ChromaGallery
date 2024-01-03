import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
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
export const handleCreateList = async (userId: string, title: string = 'My Title', subtitle: string  = 'My Subtitle') => {
	if (!userId) {
		return;
	}
	let dataToSetToStore: any;
	const docRef = doc(collection(db, 'users', userId, 'lists'));
	const docSnap = await getDoc(docRef);
	if (!docSnap.exists()) {
		dataToSetToStore = {
			title: title,
			subtitle: subtitle,
			items: []
		};
		const docRef = await addDoc(collection(db, 'users', userId, 'lists'), dataToSetToStore);
		console.log(docRef.id);
	} else {
		const userData = docSnap.data();
		dataToSetToStore = userData;
	}
};
