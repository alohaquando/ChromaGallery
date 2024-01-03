<script>
	import { getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';
	export let data;
	console.log(data);
	const storage = getStorage();
	const storageRef = ref(storage);

	// 'file' comes from the Blob or File API
	// uploadBytes(storageRef, file).then((snapshot) => {
	// 	console.log('Uploaded a blob or file!');
	// });
</script>

<h1>Hello</h1>
