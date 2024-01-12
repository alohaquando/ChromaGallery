<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdatePassword } from '$lib/data/auth.js';
	import Button from '$lib/components/controls/Button.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let data;

	let currEmail = data.session?.email;
	let currPassword: string;
	let newPassword: string = '';
	let confirmNewPassword: string = '';
	let error = undefined;
	let errorMessage: string;
</script>

<div class=" flex flex-col justify-center gap-8">
	<TextField
		bind:value={currPassword}
		id="confirmPassword"
		label="Confirm current password"
		labelSize="lg"
		name="confirmPassword"
		placeholder="Confirm password"
		required
	></TextField>

	<Divider />

	<TextField
		bind:value={newPassword}
		id="newPassword"
		label="New password"
		labelSize="lg"
		name="newPassword"
		placeholder="New password"
		required
	></TextField>
	<TextField
		bind:value={confirmNewPassword}
		id="confirmNewPassword"
		label="Confirm new password"
		labelSize="lg"
		name="confirmNewPassword"
		placeholder="Confirm new password"
		required
	></TextField>

	<!--	Handle error-->
	{#if error}
		<div>
			<Body class="text-red-400"><i>* {errorMessage}</i></Body>
		</div>
	{/if}

	<!--Submit button-->
	<Button on:click={() => handleUpdatePassword(newPassword, confirmNewPassword, currEmail, currPassword)}
					sticky>
		Save
	</Button>
</div>
