<script lang="ts">
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { handleResetPassword } from '$lib/data/auth';
	import { onMount } from 'svelte';

	let emailToResetPassword: string;
</script>

<PageTitle>Reset my password</PageTitle>

<div class="flex items-center justify-center flex-col mt-12">
	<form action="" class="flex flex-col w-full gap-6">
		<!-- <TextField id="password" label="New password" name="password" placeholder="New password"
		></TextField>
		<TextField
			id="confirm-password"
			label="Confirm new password"s
			name="confirm-password"
			placeholder="Confirm new password"
		></TextField> -->
		<TextField
			bind:value={emailToResetPassword}
			id="emailToResetPassword"
			label="Email"
			name="emailToResetPassword"
			placeholder="abc@gmail.com"
		></TextField>
		<Button
			class="mt-8"
			design="filled"
			on:click={() => handleResetPassword(emailToResetPassword)}
			type="submit"
			width="full"
			>Reset password
		</Button>
	</form>
</div>
