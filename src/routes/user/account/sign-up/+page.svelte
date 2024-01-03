<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { handleAuthenticateGoogle, handleSignUpAuthenticate } from '$lib/data/auth';

	let email = '';
	let password = '';
	let confirmPassword = '';

	let errorMessage = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		errorMessage.email = !emailRegex.test(email) ? '*Please enter a valid email address.' : '';
	};

	const validatePassword = () => {
		errorMessage.password = password.length < 6 ? '*Password must have 6 or more characters.' : '';
	};

	const validateConfirmPassword = () => {
		errorMessage.confirmPassword = confirmPassword != password ? '*Password does not match.' : '';
	};
</script>

<PageTitle>Hi new friend</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href=""></Socials>
		<Socials design="google" href="" on:click={handleAuthenticateGoogle}></Socials>
		<Socials design="apple" href=""></Socials>
	</div>

	<Divider />

	<form class="contents">
		<!--	Email field-->
		<TextField
			bind:value={email}
			id="email"
			label="Email"
			name="email"
			on:change={validateEmail}
			placeholder="myemail@google.com"
		></TextField>
		{#if errorMessage.email}
			<Body class="text-red-400"><i>{errorMessage.email}</i></Body>
		{/if}

		<!--	Password field-->
		<TextField
			bind:value={password}
			id="password"
			label="Password"
			name="password"
			on:change={validatePassword}
			placeholder="Password"
			type="password"
		></TextField>
		{#if errorMessage.password}
			<Body class="text-red-400"><i>{errorMessage.password}</i></Body>
		{/if}

		<!--	Confirm password field-->
		<TextField
			bind:value={confirmPassword}
			id="confirmPassword"
			label="Confirm Password"
			name="confirmPassword"
			on:change={validateConfirmPassword}
			placeholder="Confirm password"
			type="password"
		></TextField>
		{#if errorMessage.confirmPassword}
			<Body class="text-red-400"><i>{errorMessage.confirmPassword}</i></Body>
		{/if}

		<!--		Submit button-->
		<Button
			design="filled"
			on:click={() => handleSignUpAuthenticate(email, password, confirmPassword)}
			type="submit"
			width="full"
		>Sign up
		</Button>
	</form>

	<Divider />

	<div>
		<BodySmall>Already a member?</BodySmall>
	</div>
	<Button design="outlined" href="sign-in" width="full">Sign in</Button>
</div>
