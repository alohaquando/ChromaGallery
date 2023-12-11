<script lang="ts">
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { defaultLayout, dialog, modal } from '$lib/stores/pageLayout';
	import { goto } from '$app/navigation';

	defaultLayout();

	modal.update(modalData => ({
		...modalData,
		toggled: true,
		exit: true,
		title: 'Account setting'
	}));

	dialog.update(dialogData => ({
		toggled: true,
		title: 'Log Out',
		text: 'Are you sure you want to log out?',
		button1: {
			option: 'Cancel',
			type: '',
			function: function() {
				goto('setting');
			}
		},
		button2: {
			option: 'Log out',
			type: 'filled',
			function: function() {
			}
		}
	}));
</script>
<div class=" flex flex-col justify-center items-center">
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		icon="faChevronRight"
		leadingText="Update name"
		topDivider={false}
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		icon="faChevronRight"
		leadingText="Update email"
		topDivider={false}
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		icon="faChevronRight"
		leadingText="Update password"
		topDivider={false}
	/>
	<ListItem
		bottomDivider={false}
		class="w-full"
		clickable={true}
		design="destructive"
		leadingText="Log out"
		topDivider={false}
	/>
</div>

