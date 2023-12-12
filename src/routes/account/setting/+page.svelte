<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { onMount } from 'svelte';
	import { modal, previousState } from '$lib/stores/modal';
	import { resetDialog, toggleDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { goto } from '$app/navigation';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/me',
		title: 'Account setting'
	}));
	let button1 = {
		option: 'Cancel',
		type: '',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Log out',
		type: 'filled',
		function: function() {
		}
	};
</script>

<div class=" flex flex-col justify-center items-center">
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		href="update/name"
		icon="faChevronRight"
		topDivider={false}
		trailingText="Update name"
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		href="update/email"
		icon="faChevronRight"
		topDivider={false}
		trailingText="Update email"
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		href="update/password"
		icon="faChevronRight"
		topDivider={false}
		trailingText="Update password"
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		design="destructive"
		on:click={toggleDialog}
		topDivider={false}
		trailingText="Log out"
	/>
</div>
<Dialog button1={button1} button2={button2} text="Are you sure you want to log out?" title="Log out"></Dialog>