<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { handleAuthenticateGoogle, handleSignUpAuthenticate } from '$lib/data/auth';
	import FormError from '$lib/components/inputs/FormError.svelte';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';
	import { goto, invalidateAll } from '$app/navigation';

	let email = '';
	let password = '';
	let confirmPassword = '';

	let errorMessage = {
		email: '',
		password: '',
		confirmPassword: ''
	};

	let emailValid = false;
	let passwordValid = false;
	let passwordConfirmValid = false;

	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errorMessage.email = 'Please enter a valid email address';
			emailValid = false;
		} else {
			errorMessage.email = '';
			emailValid = true;
		}
	};

	const validatePassword = () => {
		if (password.length < 6) {
			errorMessage.password = 'Password must have 6 or more characters';
			passwordValid = false;
		} else {
			errorMessage.password = '';
			passwordValid = true;
		}
		if (confirmPassword.length > 0) validateConfirmPassword();
	};

	const validateConfirmPassword = () => {
		if (confirmPassword !== password) {
			errorMessage.confirmPassword = 'Passwords does not match';
			passwordConfirmValid = false;
		} else {
			errorMessage.confirmPassword = '';
			passwordConfirmValid = true;
		}
	};

	let failed = false;
	let formErrorMessage: string;

	let isLoading = false;

	const handleSignUp = async () => {
		try {
			isLoading = true;
			let res = await handleSignUpAuthenticate(email, password, confirmPassword);
			if (res) {
				await invalidateAll();
				await goto('/account/complete-account');
			}
		} catch (err) {
			console.log(err.message);
			failed = true;
			if (err.message.includes('email-already-in-use')) {
				formErrorMessage = 'This email address is already in use. Please sign in.';
			} else {
				formErrorMessage = 'An error occurred' + '\n' + err;
			}
		} finally {
			isLoading = false;
		}
	};
</script>

<LoadingOverlay bind:isLoading />

<PageTitle>Hi new friend</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<!--		<Socials design="facebook" href=""></Socials>-->
		<Socials design="google" href="" on:click={handleAuthenticateGoogle}></Socials>
		<!--		<Socials design="apple" href=""></Socials>-->
	</div>

	<Divider />

	<form class="contents">
		{#if failed}
			<FormError>
				{formErrorMessage}
			</FormError>
		{/if}

		<!--	Email field-->
		<TextField
			bind:value={email}
			error={errorMessage.email.length > 0}
			errorMessage={errorMessage.email}
			id="email"
			label="Email"
			name="email"
			on:change={validateEmail}
			placeholder="Email"
			required
		></TextField>

		<!--	Password field-->
		<TextField
			bind:value={password}
			error={errorMessage.password.length > 0}
			errorMessage={errorMessage.password}
			id="password"
			label="Password"
			name="password"
			on:change={validatePassword}
			placeholder="Password"
			required
			type="password"
		></TextField>

		<!--	Confirm password field-->
		<TextField
			bind:value={confirmPassword}
			error={errorMessage.confirmPassword.length > 0}
			errorMessage={errorMessage.confirmPassword}
			id="confirmPassword"
			label="Confirm Password"
			name="confirmPassword"
			on:change={validateConfirmPassword}
			placeholder="Confirm password"
			required
			type="password"
		></TextField>

		<!--		Submit button-->
		<Button
			design="filled"
			disabled={!(emailValid && passwordValid && passwordConfirmValid)}
			on:click={handleSignUp}
			type="submit"
			width="full"
			>Sign up
		</Button>
	</form>

	<Divider />

	<div>
		<Body>Already a member?</Body>
	</div>
	<Button design="outlined" href="sign-in" width="full">Sign in</Button>
</div>
