<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { onMount } from 'svelte';
	import { defaultLayout, modal } from '$lib/stores/pageLayout';

	defaultLayout();

	modal.update(modalData => ({
		...modalData,
		toggled: true,
		exit: true,
		href: '/account/me',
		title: 'Account setting',
		transition: true
	}));
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
		href="log-out"
		topDivider={false}
		trailingText="Log out"
	/>
</div>
