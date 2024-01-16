<script lang="ts">
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { resetDialog, toggleDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { authHandlers, updateCuratorState } from '$lib/data/auth';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import CuratorSwitch from '$lib/components/inputs/CuratorSwitch.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';
	import FormError from '$lib/components/inputs/FormError.svelte';
	import { invalidateAll } from '$app/navigation';

	let button1 = {
		option: 'Cancel',
		type: 'outlined',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Log out',
		type: 'filled',
		function: function () {
			authHandlers.logout();
			window.location.href = '/';
		}
	};

	export let data;
	let isCurator = data.session?.isCurator ?? false;

	let isLoading = false;
	let failed = false;
	let errorMessage: unknown;

	const handleCuratorUpdate = async () => {
		console.log('run');
		isLoading = true;

		if (data.session) {
			try {
				let res = await updateCuratorState(data.session.uid as string, isCurator);
				if (res) {
				}
			} catch (err) {
				failed = true;
				errorMessage = err;
			} finally {
				isLoading = false;
				await invalidateAll();
			}
		}
	};
</script>

<LoadingOverlay bind:isLoading />

<div class=" flex flex-col justify-center items-center">
	<ListItem
		bottomDivider={false}
		class="w-full"
		href="update/name"
		icon="faChevronRight"
		text="Update name"
		topDivider={false}
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		href="update/email"
		icon="faChevronRight"
		text="Update email"
		topDivider={false}
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		href="update/password"
		icon="faChevronRight"
		text="Update password"
		topDivider={false}
	/>

	<Divider />

	{#if failed}
		<FormError>
			{errorMessage}
		</FormError>
	{/if}

	<div class="flex flex-col items-start gap-4 {isCurator ? 'mb-6' : ''}">
		<CuratorSwitch bind:toggled={isCurator} toggleOnChange={handleCuratorUpdate} />
		<SiteSwitcher bind:toggled={isCurator} type="curator" />
	</div>

	<Divider />

	<Button class="w-full mt-4" design="destructive" on:click={toggleDialog}>Sign out</Button>
</div>
<Dialog {button1} {button2} text="Are you sure you want to log out?" title="Log out"></Dialog>
