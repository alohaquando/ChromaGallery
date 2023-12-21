<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import { authHandlers } from '$lib/stores/store.js';
	import Body from '$lib/components/typography/Body.svelte';
	import SwitchCurator from '$lib/components/inputs/SwitchCurator.svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let displayName = '';
	let error = false;

	async function handleSignUpAuthenticate() {
		try {
			if (password !== confirmPassword) {
				console.log('Password does not match');
				return;
			}

			if (displayName.length < 3) {
				console.log('Display name is null');
				return;
			}

			await authHandlers.signup(email, password);

			let error = false;

			await authHandlers.updateUserName(displayName);

			console.log('Successfully signed up');

			await authHandlers.login(email, password);

			window.location.href = '/';
		} catch (err) {
			let error = true;
			console.log(' There was an auth error', err);
		}
	}

	let isCurator: boolean;
</script>

<PageTitle>Let's get you ready</PageTitle>

<form class="mt-16 gap-8 flex flex-col items-center w-full">
	<!--	Email field-->
	<div class="w-full flex flex-col gap-4">
		<label for="email">
			<Body>Email:</Body>
		</label>
		<TextField bind:value={email} disabled id="email" name="email" placeholder="myemail@google.com"
		></TextField>
	</div>

	<Divider></Divider>

	<!--	FullName field-->
	<div class="w-full flex flex-col gap-4">
		<label for="fullName">
			<Body>Full name:</Body>
		</label>
		<TextField bind:value={displayName} id="fullName" name="fullName" placeholder="Full name"
		></TextField>
	</div>

	<Divider></Divider>

	<div>
		<SwitchCurator bind:toggled={isCurator} />
	</div>

	<!--	Submit button-->
	<Button design="filled" on:click={handleSignUpAuthenticate} type="button" width="full"
	>Complete sign up
	</Button>

</form>
