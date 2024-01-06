<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdateDisplayName } from '$lib/data/auth.js';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	export let data;

	let userEmail;
	let userName;
	let currEmail = data.session?.email;
	let currPassword: string;

	let displayName = data.auth.currentUser
		? data.auth.currentUser.displayName
		: 'Your account does not have a name yet.';
	console.log();
	let newDisplayName: string = '';
</script>

<div class=" flex flex-col justify-center gap-8 pb-8">
	<TextField
		id="confirmEmail"
		label="Confirm Email"
		labelSize="lg"
		name="confirmEmail"
		placeholder="confirmEmail"
		bind:value={currEmail}
		disabled
	></TextField>
	<TextField
		id="confirmPassword"
		label="confirmPassword"
		bind:value={currPassword}
		labelSize="lg"
		name="confirmPassword"
		placeholder="confirmPassword"
	></TextField>

	<Divider></Divider>

	<TextField
		disabled
		id="currentName"
		label="Current name"
		labelSize="lg"
		name="currentName"
		placeholder=""
		value={displayName}
	></TextField>
	<TextField
		id="newName"
		label="New name"
		bind:value={newDisplayName}
		labelSize="lg"
		name="newName"
		placeholder="New name"
	></TextField>
</div>

<button on:click={() => handleUpdateDisplayName(newDisplayName, currEmail, currPassword)}
	>Save</button
>
