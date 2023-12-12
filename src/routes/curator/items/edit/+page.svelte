<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import { item2 } from '../../../../data';
	import { modalData } from '$lib/stores/modal';
	import Datalist from '$lib/components/inputs/Datalist.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';

	modalData.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Edit item',
		button: 'Save'
	}));

	let options: string[];

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

<FileInput state="edit"></FileInput>
<Divider class="my-8" />
<div class="w-full flex-col flex justify-center">
	<TextField id='' label="ID" name="" placeholder='' type="text"></TextField>
</div>
<Divider class="my-8" />

<div class="w-full flex-col flex justify-center gap-6 mt-6">
	<TextField id='' label="Name" name="" placeholder=''></TextField>
	<Datalist id="" label="Label" name="" {options}
						placeholder="Select an option or enter your own value"></Datalist>
	<TextField id='' label="Time" name="" placeholder='' type="date"></TextField>
	<TextArea id="" label="Description" name="" placeholder=""></TextArea>
</div>
<Divider class="my-8" />
<div class="w-full flex-col flex justify-center gap-6 mt-8">
	<TextField id='' label="Extra field 1" name="" placeholder=''></TextField>
	<TextField id='' label="Extra field 2" name="" placeholder=''></TextField>
</div>
<Dialog button1={button1} button2={button2} text="Any changes you've made won't be saved"
				title="Leave without saving"></Dialog>