<script lang="ts">
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { goto } from '$app/navigation';
	import { modal } from '$lib/stores/modal';
	import { dialog } from '$lib/stores/dialog';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		exit: true,
		title: 'Account setting'
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

