<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { modal } from '$lib/stores/modal';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	modal.set({
		modalPage: true,
		href: '/user/account/setting',
		title: 'Account setting',
		button: 'Save',
		buttonFunction: function() {
		},
		animation: ''
	});

	let userEmail;
	let userName;

	const authen = getAuth();
	let displayName = authen.currentUser.displayName
	console.log()
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

<div class=" flex flex-col justify-center gap-4 pb-8">
	<BodyLarge>Current name</BodyLarge>
	<TextField id="curName" name="curName" value={displayName} disabled></TextField>
	<BodyLarge>New name</BodyLarge>
	<TextField id="" name="" placeholder="New name"></TextField>
</div>
