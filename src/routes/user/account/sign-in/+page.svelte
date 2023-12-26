<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import { handleAuthenticate, handleAuthenticateGoogle } from '$lib/data/auth';

	let email = '';
	let password = '';
</script>

<PageTitle>Welcome back</PageTitle>
<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href="/" signup={false}></Socials>
		<Socials design="google" on:click={handleAuthenticateGoogle}>Continue With Google</Socials>
		<Socials design="apple" href="/" signup={false}></Socials>
	</div>

	<Divider />

	<form class="contents">
		<!--        email field-->
		<TextField
			bind:value={email}
			id="email"
			label="Email"
			name="email"
			placeholder="Email"
			type="email"
		></TextField>

		<!--        password field-->
		<TextField
			bind:value={password}
			id="password"
			label="Password"
			name="password"
			placeholder="Password"
			type="password"
		></TextField>

		<!--        submit button-->
		<Button
			design="filled"
			on:click={() => handleAuthenticate(email, password)}
			type="submit"
			width="full">Sign in</Button
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
