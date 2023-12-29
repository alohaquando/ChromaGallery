<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdateEmail } from '$lib/data/auth.js';
	export let data;
	let currEmail = data.session?.email;
	let currPassword: string;
	let newEmail: string;
	let confirmNewEmail: string;
</script>

<div class=" flex flex-col gap-8">
	<TextField
		id="confirmOldEmail"
		label="Confirm Old Email"
		disabled
		value={currEmail}
		labelSize="lg"
		name="confirmOldEmail"
		placeholder="Confirm Email"
	></TextField>
	<TextField
		id="confirmOldPassword"
		label="Confirm old password"
		bind:value={currPassword}
		labelSize="lg"
		name="confirmOldPassword"
		placeholder="Confirm password"
	></TextField>

	<Divider></Divider>

	<TextField
		bind:value={newEmail}
		id="newEmail"
		label="New email"
		labelSize="lg"
		name="newEmail"
		placeholder="New email"
	></TextField>
	<TextField
		id="confirmNewEmail"
		bind:value={confirmNewEmail}
		label="Confirm new email"
		labelSize="lg"
		name="confirmNewEmail"
		placeholder="Confirm new email"
	></TextField>
</div>
<button on:click={() => handleUpdateEmail(newEmail, confirmNewEmail, currEmail, currPassword)}
	>Save</button
>
