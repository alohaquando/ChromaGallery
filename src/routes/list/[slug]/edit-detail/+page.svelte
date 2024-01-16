<script lang="ts">
	import { toggleDialog } from '$lib/stores/dialog';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { handleDeleteList } from '$lib/data/list';
	import type { PageData } from './$types';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	export let data: PageData;

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
		function: () => {
			handleDeleteList(data.session.uid, data.listId);
		}
	};

	let isLoading = false;
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;
		formData.set('userId', data.userId);
		formData.set('listId', data.listId);

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};

	// onMount(()=> {
	// 	handleUpdateList2('rBushPkr0sed8hz3uFCh8F1P6UC3','VM4EHJKEc0DaO2che54N',{title:'Hello123',description:"asdasdadads"})
	// })

	let toggled: boolean = false;
</script>

<form
	action="?/edit"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}
>
	<div class="gap-8 flex flex-col">
		<TextField
			id="listName"
			label="Title"
			labelSize="lg"
			name="name"
			placeholder="List title"
			value={data.list.title}
		></TextField>
		<TextField
			id="listDesc"
			label="Description"
			labelSize="lg"
			name="desc"
			placeholder="List description"
			value={data.list.description}
		></TextField>

		<Divider />
		<LoadingOverlay bind:isLoading></LoadingOverlay>

		<Button design="filled" type="submit" width="full">Save</Button>
	</div>
</form>

<Dialog
	{button1}
	{button2}
	text="This cannot be undone"
	title="Delete “{data.list.title}”?"
	{toggled}
></Dialog>

<ListItem
	bottomDivider={false}
	class="mt-5"
	design="destructive"
	on:click={toggleDialog}
	text="Delete list"
	topDivider={false}
/>
