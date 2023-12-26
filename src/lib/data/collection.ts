import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '$lib/services/firebase/firebase';

export const getCollection = async (collectionId: string) => {
	try {
		const docRef = doc(db, 'collections', collectionId);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	} catch (error) {
		console.error('Error fetching all items: ', error.message);
		throw error;
	}
};
export const getAllCollection = async () => {
	try {
		// Reference to the "items" collection
		const collectionItems = collection(db, 'collections');

		// Fetch all documents in the "items" collection
		const querySnapshot = await getDocs(collectionItems);

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
