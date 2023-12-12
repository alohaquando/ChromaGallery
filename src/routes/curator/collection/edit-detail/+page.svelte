<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import TextArea from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { collection1, item1 } from '../../../../data';
	import { modalData } from '$lib/stores/modal';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog } from '$lib/stores/dialog';

	modalData.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Featured items',
		button: 'Save'
	}));

	modalData.set({
		modalPage: true,
		href: '/account/me',
		title: 'Account setting',
		exit: true,
		button: undefined,
		buttonFunction: function() {
		},
		animation: ''
	});

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

<div class="mt-8 w-full">
	<TextArea value={collection1.name}></TextArea>
</div>
<div class="my-8 w-full">
	<TextArea rows={2} value={collection1.description}></TextArea>
</div>

<ListItem bottomDivider={false}
					class="underline-offset-8 pt-8 pb-6"
					design="destructive"
					text="Delete collection"
					topDivider={false} />
<Dialog button1={button1} button2={button2} text="This cannot be undone" title='Delete “{item1.title}”?'></Dialog>