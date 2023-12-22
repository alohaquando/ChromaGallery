<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { count } from '$lib/utils/countItem';
	import { collection1, item1 } from '$lib/stores/data';
	import { findItem } from '$lib/utils/filter';
	import { modal } from '$lib/stores/modal';
	import { resetDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';

	let itemList = findItem(collection1.items);
	let str = count(collection1.items);

	modal.set({
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

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{collection1.name}
</Headline>
<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6">
	{collection1.description}
</BodyLarge>

<Button class="mt-12 w-full" design='filled'>Add items</Button>
<Button class="mt-4 mb-6 w-full">Edit items</Button>

<DragList button="link" class="gap-4" items={itemList}></DragList>

<Dialog button1={button1} button2={button2} text="This cannot be undone" title='Delete “{item1.title}”?'></Dialog>