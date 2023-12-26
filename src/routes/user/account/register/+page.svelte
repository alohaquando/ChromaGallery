<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import SwitchCurator from '$lib/components/inputs/CuratorSwitch.svelte';
	import { handleUpdateDisplayName } from '$lib/data/auth';

	let displayName = '';
	let isCurator: boolean;
</script>

<PageTitle>Let's get you ready</PageTitle>

<form class="mt-16 gap-8 flex flex-col items-center w-full">
	<!--	Email field-->
	<TextField disabled id="email" label="Email" name="email" placeholder="myemail@google.com"
	></TextField>

	<Divider></Divider>

	<!--	FullName field-->
	<TextField
		bind:value={displayName}
		id="fullName"
		label="Full name"
		name="fullName"
		placeholder="Full name"
	></TextField>

	<Divider></Divider>

	<SwitchCurator bind:toggled={isCurator} />

	<!--	Submit button-->
	<Button
		design="filled"
		on:click={() => handleUpdateDisplayName(displayName)}
		type="button"
		width="full"
		>Complete sign up
	</Button>
</form>
