<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import SwitchCurator from '$lib/components/inputs/CuratorSwitch.svelte';
	import { authHandlers, completeAccount, handleSetDisplayName } from '$lib/data/auth';
	import Body from '$lib/components/typography/Body.svelte';
	import { signOut } from 'firebase/auth';
	import { redirect } from '@sveltejs/kit';
	import FormError from '$lib/components/inputs/FormError.svelte';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data;
	let isCurator: boolean = false;
	let currentEmail = data.session?.email;


	let fullName: string = '';
	let fullNameErrorMessage: string = '';

	onMount(async () => {
		if (data.session === null) {
			await goto('/account');
		}
	});
	const validateFullName = () => {
		if (fullName.length === 0) {
			fullNameErrorMessage = 'Please enter your full name';
		} else {
			fullNameErrorMessage = '';
		}
	};

	let failed = false;
	let errorMessage: unknown;

	let isLoading = false;

	const handleCompleteAccount = async () => {
		isLoading = true;

		if (data.session) {
			try {
				let res = await completeAccount(data.session.uid as string, isCurator, fullName);
				await goto('/account');
			} catch (err) {
				failed = true;
				errorMessage = err;
			} finally {
				isLoading = false;
			}
		} else {
			failed = true;
			errorMessage = 'Cannot get session';
		}
	};

	const handleLogOut = async () => {
		await authHandlers.logout();
		await goto('/account');
	};
</script>

<LoadingOverlay bind:isLoading={isLoading} />

<PageTitle>Let's get you ready</PageTitle>

<form class="mt-16 gap-8 flex flex-col items-center w-full">
	<Body>Please complete your account before using Chroma</Body>
	{#if (failed)}
		<FormError>
			{errorMessage}
		</FormError>
	{/if}

	<!--	Email field-->
	<TextField disabled id="email" label="Signed in as" name="email" placeholder="" readonly value={currentEmail}
	/>

	<Divider />

	<!--	FullName field-->
	<TextField
		bind:value={fullName}
		error={fullNameErrorMessage.length>0}
		errorMessage={fullNameErrorMessage}
		id="fullName"
		label="Full name"
		name="fullName"
		on:change={validateFullName}
		placeholder="Full name"
		required
	/>

	<Divider />

	<SwitchCurator bind:toggled={isCurator} />

	<!--	Submit button-->
	<Button
		design="filled"
		disabled={fullName.length===0}
		on:click={
			handleCompleteAccount
		}
		width="full"
	>Complete account
	</Button>

	<Divider />

	<Body>Don't want to continue?</Body>

	<Button
		design="outlined"
		destructive
		on:click={handleLogOut}
		width="full"
	>Sign out
	</Button>

</form>
