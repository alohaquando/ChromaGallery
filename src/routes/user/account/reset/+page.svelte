<script lang="ts">
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Button from '$lib/components/controls/Button.svelte';
</script>

<PageTitle>Reset my password</PageTitle>

<div class="flex items-center justify-center flex-col	 mt-12 gap-4">
	<TextField label="New password" placeholder="New password"></TextField>
	<TextField label="Confirm new password" placeholder="Confirm new password"></TextField>
	<Button class="mt-8" design="filled" type="submit" width="full">Sign in
	</Button>
</div>

