<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { handleUpdateEmail } from '$lib/data/auth.js';
	import Button from '$lib/components/controls/Button.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let data;
	let currEmail = data.session?.email;
	let currPassword: string;
	let newEmail: string;
	let confirmNewEmail: string;
	let error = undefined;
	let errorMessage: string;
</script>

<div class=" flex flex-col gap-8">
	<TextField
		disabled
		id="currentEmail"
		label="Current Email"
		labelSize="lg"
		name="currentEmail"
		placeholder="{currEmail}"
	></TextField>
	<TextField
		bind:value={currPassword}
		id="confirmOldPassword"
		label="Confirm old password"
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
		bind:value={confirmNewEmail}
		id="confirmNewEmail"
		label="Confirm new email"
		labelSize="lg"
		name="confirmNewEmail"
		placeholder="Confirm new email"
	></TextField>

	<!--	Handle error-->
	{#if error}
		<div>
			<Body class="text-red-400"><i>* {errorMessage}</i></Body>
		</div>
	{/if}

	<!--Submit button-->
	<Button on:click={() => handleUpdateEmail(newEmail, confirmNewEmail, currEmail, currPassword)}
					sticky>
		Save
	</Button>
</div>
