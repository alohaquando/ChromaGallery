<!-- <script>
	import { db } from '$lib/services/firebase/firebase.js';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let imageURL = '';
	let artist = '';
	let description = '';
	let foundedYear = '';
	let location = '';
	let title = '';

	// const getOneItem = async () => {
	// 	const docRef = doc(db, 'Item',"IKDg9uCvRd0yTYmKImMM");
	// 	const docSnap = await getDoc(docRef);
	// 	if (docSnap.exists()) {
	// 		console.log('Document data:', docSnap.data());
	// 	} else {
	// 		// docSnap.data() will be undefined in this case
	// 		console.log('No such document!');
	// 	}
	// };

	const getAllItems = async () => {
		const querySnapshot = await getDocs(collection(db, 'Item'));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, ' => ', doc.data());
		});
	};
	getAllItems();
</script> -->
