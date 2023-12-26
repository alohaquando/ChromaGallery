<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { handleSignUpAuthenticate } from '$lib/stores/dataLoad.js';

	let email = '';
	let password = '';
	let confirmPassword = '';
</script>

<PageTitle>Hi new friend</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href=""></Socials>
		<Socials design="google" href=""></Socials>
		<Socials design="apple" href=""></Socials>
	</div>

	<Divider />

	<form class="contents">
		<!--	Email field-->
		<TextField bind:value={email} id="email" label="Email"
							 name="email" placeholder="myemail@google.com"></TextField>

		<!--	Password field-->
		<TextField bind:value={password}
							 id="password"
							 label="Password"
							 name="password"
							 placeholder="Password"
							 type="password"
		></TextField>

		<!--	Confirm password field-->
		<TextField bind:value={confirmPassword}
							 id="confirmPassword"
							 label="Confirm Password"
							 name="confirmPassword"
							 placeholder="Confirm password"
							 type="password"
		></TextField>

		<!--		Submit button-->
		<Button design="filled" on:click={() => handleSignUpAuthenticate(email, password, confirmPassword)} type="submit"
						width="full">Sign up
		</Button>
	</form>

	<Divider />

	<div>
		<BodySmall>Already a member?</BodySmall>
	</div>
	<Button design="outlined" href="sign-in">Sign in</Button>
</div>
