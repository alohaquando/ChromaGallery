<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdatePassword } from '$lib/data/auth.js';
	export let data;

	let currEmail = data.session?.email;
	let currPassword: string;
	let newPassword: string='';
	let confirmNewPassword: string ='';
</script>

<div class=" flex flex-col justify-center gap-8">
	<TextField
		bind:value={currEmail}
		disabled
		id="confirmEmail"
		label="Confirm old Email"
		labelSize="lg"
		name="confirmEmail"
		placeholder="Confirm Email"
	></TextField>
	<TextField
		bind:value={currPassword}
		id="confirmPassword"
		label="Confirm old password"
		labelSize="lg"
		name="confirmPassword"
		placeholder="Confirm password"
	></TextField>

	<Divider />

	<TextField
		bind:value={newPassword}
		id="newPassword"
		label="New password"
		labelSize="lg"
		name="newPassword"
		placeholder="New password"
	></TextField>
	<TextField
		bind:value={confirmNewPassword}
		id="confirmNewPassword"
		label="Confirm new password"
		labelSize="lg"
		name="confirmNewPassword"
		placeholder="Confirm new password"
	></TextField>
</div>
<button
	on:click={() => handleUpdatePassword(newPassword, confirmNewPassword, currEmail, currPassword)}
	>Save</button
>
