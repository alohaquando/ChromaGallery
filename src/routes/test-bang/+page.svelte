<script>
	import { storage } from '$lib/services/firebase/firebase.js';
	import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';
	import { onMount } from 'svelte';
	export let data;
	console.log(data);

	const storageRef = ref(storage);
	// 'file' comes from the Blob or File API
	// uploadBytes(storageRef, file).then((snapshot) => {
	// 	console.log('Uploaded a blob or file!');
	// });

	let imageToUpload;
	const uploadImage = () => {
		if (imageToUpload == null) {
			return;
		}

		try {
			const imageRef = ref(storage, `images/${imageToUpload.name}`);
			// 'file' comes from the Blob or File API
			uploadBytes(imageRef, imageToUpload)
				.then((snapshot) => {
					console.log('Uploaded a blob or file!');
					console.log(snapshot);
					return getDownloadURL(snapshot.ref);
				})
				.then((downloadURL) => {
					console.log('Download URL is ', downloadURL);
				});
		} catch (err) {
			console.log(err);
		}
	};
</script>

<form>
	<input type="file" on:change={(e) => (imageToUpload = e.target.files[0])} />
	<button on:click={uploadImage} type="submit">Upload</button>
</form>
