<script>
	import { auth, db } from './../../lib/services/firebase/firebase.js';
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';

	import { authHandlers } from '$lib/stores/store.js';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { doc, getDoc } from 'firebase/firestore';

	let email = 'ben1234@gmail.com';
	let password = '12341234';
	let confirmPassword = '';
	let error = false;
	let register = false;
	let authenticating = false;

	async function handleAuthenticate() {
		console.log('Pressed');
		if (authenticating) {
			return;
		}
		if (!email || !password || (register && !confirmPassword)) {
			error = true;
			return;
		}

		authenticating = true;

		try {
			if (!register) {
				await authHandlers.login(email, password);
			} else {
				await authHandlers.signup(email, password);
			}
		} catch (err) {
			console.log(' There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}

	async function handleAuthenticateGoogle() {
		if (authenticating) {
			return;
		}
		authenticating = true;
		try {
			if (!register) {
				await authHandlers.loginWithGoogle();
			}
			return;
		} catch (err) {
			console.log(' There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}
	function handleRegister() {
		register = !register;
	}
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

<BG color="1877F2" />

<PageTitle>Welcome back</PageTitle>
<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href="/" signup={false}></Socials>
		<Socials design="google" href="/" on:click={handleAuthenticateGoogle} signup={false}></Socials>
		<Socials design="apple" href="/" signup={false}></Socials>
	</div>

	<Divider />

	<form class="contents">
		{#if error}
			<p class="error">The information you have entered is not correct</p>
		{/if}
		<TextField id="email" name="email" placeholder="Email" type="email" bind:value={email}
		></TextField>
		<TextField
			id="password"
			name="password"
			placeholder="Password"
	
			bind:value={password}
		></TextField>
		<Button design="filled" width="full" type="submit" on:click={handleAuthenticate}
			>Sign in</Button
		>
		<button on:click={authHandlers.logout()}>Logout</button>
		<Button design="outlined">Reset my password</Button>
	</form>

	<Divider />
	<div>
		<BodySmall>Are you new here?</BodySmall>
	</div>
	<Button design="outlined">Become a member</Button>
	
</div>
