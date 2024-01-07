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

<script>
	import TextField from '$lib/components/inputs/TextField.svelte';

	let author;
	let title;
	let subtitle;
	let location;
	let year;
	let description;
</script>

<form method="post">
	<TextField id="author" label="author" name="author" placeholder="author" bind:value={author}
	></TextField>
	<TextField
		id="description"
		label="description"
		name="description"
		placeholder="description"
		bind:value={description}
	></TextField>
	<TextField id="title" label="title" name="title" placeholder="title" bind:value={title}
	></TextField>
	<TextField
		id="subtitle"

		label="subtitle"
		name="subtitle"
		placeholder="subtitle"
		bind:value={subtitle}
	></TextField>
	<TextField
		id="location"
		label="location"
		name="location"
		placeholder="location"
		bind:value={location}
	></TextField>

	<TextField id="year" label="year" name="year" placeholder="year" bind:value={year}></TextField>
	<input type="file" />
	<button type="submit" class="bg-white text-black">Create</button>
</form>
