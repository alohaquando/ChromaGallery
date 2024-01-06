<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdateDisplayName } from '$lib/data/auth.js';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import Body from '$lib/components/typography/Body.svelte';

	export let data;

	let userEmail;
	let userName;
	let currEmail = data.session?.email;
	let currPassword: string;
	let error = undefined;
	let errorMessage: string;

	let displayName = data.auth.currentUser
		? data.auth.currentUser.displayName
		: 'Your account does not have a name yet.';
	console.log();
	let newDisplayName: string = '';
</script>

<div class=" flex flex-col justify-center gap-8 pb-8">
	<!--	<TextField-->
	<!--		bind:value={currEmail}-->
	<!--		disabled-->
	<!--		id="confirmEmail"-->
	<!--		label="Confirm Email"-->
	<!--		labelSize="lg"-->
	<!--		name="confirmEmail"-->
	<!--		placeholder="confirmEmail"-->
	<!--	></TextField>-->
	<TextField
		bind:value={currPassword}
		id="confirmPassword"
		label="Confirm password"
		labelSize="lg"
		name="confirmPassword"
		placeholder="confirmPassword"
		required
	></TextField>

	<Divider></Divider>

	<TextField
		disabled
		id="currentName"
		label="Current name"
		labelSize="lg"
		name="currentName"
		placeholder="{displayName}"
	></TextField>
	<TextField
		bind:value={newDisplayName}
		id="newName"
		label="New name"
		labelSize="lg"
		name="newName"
		placeholder="New name"
		required
	></TextField>

	<!--	Handle error-->
	{#if error}
		<div>
			<Body class="text-red-400"><i>* {errorMessage}</i></Body>
		</div>
	{/if}

	<!--	Submit button -->
	<Button on:click={() => handleUpdateDisplayName(newDisplayName, currEmail, currPassword)}
					sticky>
		Save
	</Button>
</div>
