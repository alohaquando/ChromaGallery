<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { item1 } from '$lib/data/exampleData';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import { toggleDialog } from '$lib/stores/dialog';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Button from '$lib/components/controls/Button.svelte';

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

<div class="gap-8 flex flex-col">
	<TextField id="listName" label="Title" labelSize="lg" name="listName" placeholder="List title"
	></TextField>
	<TextField
		id="listDesc"
		label="Description"
		labelSize="lg"
		name="listDesc"
		placeholder="List description"
	></TextField>

	<Divider />

	<Button design="filled" width="full">Save</Button>

	<ListItem
		bottomDivider={false}
		design="destructive"
		on:click={toggleDialog}
		text="Delete list"
		topDivider={false}
	/>
</div>
<Dialog {button1} {button2} text="This cannot be undone" title="Delete “{item1.title}”?"></Dialog>
