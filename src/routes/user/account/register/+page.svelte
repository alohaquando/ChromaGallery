<script>
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import { authHandlers } from '$lib/stores/store.js';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let displayName;
	let error = false;

	async function handleSignUpAuthenticate() {
		try {
			if (password != confirmPassword) {
				console.log('Password does not match');
				return;
			}
			await authHandlers.signup(email, password);

			let error = false;

			console.log('Successfully signed up');

			if (displayName = null) {
				console.log('Display name is null');
				return;
			}
			await authHandlers.updateUserName(displayName);


			await authHandlers.login(email, password);

			window.location.href = '/';
		} catch (err) {
			let error = true;
			console.log(' There was an auth error', err);
		}
	}
</script>

<PageTitle>Let's get you ready</PageTitle>

<form class="mt-16 gap-8 flex flex-col items-center w-full">
	<TextField bind:value={email} id="email" name="email" placeholder="myemail@google.com"
	></TextField>
	<Divider></Divider>

	<TextField
		bind:value={password}
		id="password"
		name="password"
		placeholder="Password"
		type="password"
	></TextField>
	<TextField
		bind:value={confirmPassword}
		id="confirmPassword"
		name="confirmPassword"
		placeholder="Confirm password"
		type="password"
	></TextField>

	<Divider></Divider>
	<TextField bind:value={displayName} id="fullName" name="fullName" placeholder="Full Name"
	></TextField>
	<Button design="filled" on:click={handleSignUpAuthenticate} type="button" width="full"
	>Complete sign up
	</Button
	>
</form>
