<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
	import { authHandlers } from '$lib/stores/store';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let email = '';
	let password = '';
	let error = false;
	let authenticating = false;

	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		if (!email || !password) {
			error = true;
			return;
		}

		authenticating = true;

		try {
			await authHandlers.login(email, password);
			window.location.href= "/";
		} catch (err) {
			console.log(' There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}

	$: console.log(password);

	async function handleAuthenticateGoogle() {
		try {
			await authHandlers.loginWithGoogle();
			console.log('Hello');
		} catch (err) {
			console.log(' There was an auth error', err);
		}
	}

	// Check if Logged-in
	let userEmail = '';
	let userName = '';
	const authen = getAuth();
	onAuthStateChanged(authen, (user) => {
		if (user) {
			console.log(user);
			userName = user.displayName;
			userEmail = user.email;
		} else {
			console.log('Not sign in');
		}
	});
</script>

<BG randomized />

<PageTitle>Welcome back</PageTitle>
<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href="/" signup={false}></Socials>
		<Button design="google" on:click={handleAuthenticateGoogle}>Continue With Google</Button>
		<Socials design="apple" href="/" signup={false}></Socials>
	</div>

	<Divider />

	<form class="contents">
		<TextField bind:value={email} id="email" name="email" placeholder="Email" type="email"
		></TextField>
		<TextField
			bind:value={password}
			id="password"
			name="password"
			placeholder="Password"
			type="password"
		></TextField>
		<Button design="filled" type="submit" width="full" on:click={handleAuthenticate}>Sign in</Button
		>
		<Button design="outlined">Reset my password</Button>
	</form>

	<Divider />
	<div>
		<BodySmall>Are you new here?</BodySmall>
	</div>
	<Button design="outlined" href="sign-up">Become a member</Button>
</div>
