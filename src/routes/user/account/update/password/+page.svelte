<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { getAuth, updatePassword } from 'firebase/auth';

	const auth = getAuth();

	let user = auth.currentUser;
	let newPassword = '';

	updatePassword(user, newPassword)
		.then(() => {
			console.log('Update successful');
		})
		.catch((error) => {
			console.log(error);
		});
</script>

<div class=" flex flex-col justify-center gap-8">
	<TextField
		id="confirmPassword"
		label="Confirm old password"
		labelSize="lg"
		name="confirmPassword"
		placeholder="Confirm password"
	></TextField>

	<Divider />

	<TextField
		bind:value={newPassword}
		id="newPassword"
		label="New password"
		labelSize="lg"
		name="newPassword"
		placeholder="New password"
	></TextField>
	<TextField
		id="confirmNewPassword"
		label="Confirm new password"
		labelSize="lg"
		name="confirmNewPassword"
		placeholder="Confirm new password"
	></TextField>
</div>
