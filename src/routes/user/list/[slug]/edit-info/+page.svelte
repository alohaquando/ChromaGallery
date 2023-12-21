<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { modal } from '$lib/stores/modal';
	import { item1 } from '$lib/stores/data';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import { toggleDialog } from '$lib/stores/dialog';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '#',
		title: 'Edit list',
		button: 'Save'
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

<div class="gap-6 flex flex-col">
	<TextField id="" name="" placeholder="Enter something..."></TextField>
	<TextField id="" name="" placeholder="Enter something..."></TextField>
</div>
<div class="pt-8">
	<ListItem bottomDivider={false} design="destructive" href="/" on:click={toggleDialog} text="Delete list" />
</div>
<Dialog button1={button1} button2={button2} text="This cannot be undone" title='Delete “{item1.title}”?'></Dialog>