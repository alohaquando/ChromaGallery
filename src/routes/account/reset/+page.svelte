<script lang="ts">
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Button from '$lib/components/controls/Button.svelte';
</script>

<PageTitle>Reset my password</PageTitle>

<div class="flex items-center justify-center flex-col mt-12">
	<form action="" class="flex flex-col w-full gap-6">
		<TextField id="password" label="New password" name="password" placeholder="New password"
		></TextField>
		<TextField
			id="confirm-password"
			label="Confirm new password"
			name="confirm-password"
			placeholder="Confirm new password"
		></TextField>
		<Button class="mt-8" design="filled" type="submit" width="full">Reset password</Button>
	</form>
</div>
