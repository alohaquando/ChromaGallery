<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { modal } from '$lib/stores/modal';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let userEmail;
	let userName;

	const authen = getAuth();
	let displayName = authen.currentUser.displayName;
	console.log();
	// let itemList = [];
	// let userId = authen.currentUser?.uid;
	// onAuthStateChanged(authen, (user) => {
	// 	if (user) {
	// 		console.log(user);
	// 		userName = user.displayName;
	// 		userEmail = user.email;
	// 	} else {
	// 		console.log('Not sign in');
	// 	}
	// });
</script>

<div class=" flex flex-col justify-center gap-8 pb-8">
	<TextField
		disabled
		id="currentName"
		label="Current name"
		labelSize="lg"
		name="currentName"
		value={displayName}
	></TextField>
	<TextField id="newName" label="New name" labelSize="lg" name="newName" placeholder="New name"
	></TextField>
</div>
