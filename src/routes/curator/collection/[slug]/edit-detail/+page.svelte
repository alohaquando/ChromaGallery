<script lang="ts">
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog, toggleDialog } from '$lib/stores/dialog';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import type { PageData } from './$types';
	import { handleDeleteCollection } from '$lib/data/collection';
	import Button from '$lib/components/controls/Button.svelte';

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
			handleDeleteCollection(data.slug);
		}
	};
</script>

<div class="gap-4 flex flex-col">
	<TextField id="name" label="Name" labelSize="lg" name="name" value={data.collection.title}
	></TextField>

	<TextArea
		class="mt-4"
		id="description"
		label="Description"
		labelSize="lg"
		name="description"
		placeholder="Collection name"
		rows={2}
		value={data.collection.description}
	></TextArea>

	<Button sticky>Save</Button>

	<ListItem
		bottomDivider={false}
		class="mt-2"
		design="destructive"
		on:click={toggleDialog}
		placeholder="Collection description"
		text="Delete collection"
		topDivider={false}
	/>
</div>

<Dialog {button1} {button2} text="This cannot be undone" title="Delete “{data.collection.title}”?"></Dialog>
