<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import { handleAuthenticate, handleAuthenticateGoogle } from '$lib/data/auth';
	import FormError from '$lib/components/inputs/FormError.svelte';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	let email = '';
	let password = '';

	let failed = false;
	let errorMessage: unknown;

	let isLoading = false;

	const handleEmailSignIn = async () => {
		try {
			isLoading = true;
			await handleAuthenticate(email, password);
		} catch (err) {
			failed = true;

			if (err.message.includes('invalid-login-credentials')) {
				errorMessage = 'The entered email and password was not found';
			} else {
				errorMessage = 'An error occurred' + '\n' + err;
			}
			password = '';
		} finally {
			isLoading = false;
		}
	};
</script>

<LoadingOverlay bind:isLoading={isLoading} />

<PageTitle>Welcome back</PageTitle>
<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<!--		<Socials design="facebook" href="/" signup={false}></Socials>-->
		<Socials design="google" on:click={handleAuthenticateGoogle} signup={false}></Socials>
		<!--		<Socials design="apple" href="/" signup={false}></Socials>-->
	</div>

	<Divider />

	<form class="contents">
		{#if (failed)}
			<FormError>
				{errorMessage}
			</FormError>
		{/if}

		<TextField
			bind:value={email}
			id="email"
			label="Email"
			name="email"
			placeholder="Email"
			required
			type="email"
		></TextField>

		<TextField
			bind:value={password}
			id="password"
			label="Password"
			name="password"
			placeholder="Password"
			required
			type="password"
		></TextField>

		<Button
			design="filled"
			disabled={isLoading}
			on:click={handleEmailSignIn}
			type="submit"
			width="full">Sign in
		</Button
		>

		<!--        reset password button-->
		<Button design="outlined" href="reset">Reset my password</Button>
	</form>

	<Divider />
	<div>
		<BodySmall>Are you new here?</BodySmall>
	</div>
	<Button design="outlined" href="sign-up">Become a member</Button>
</div>
