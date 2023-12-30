<script lang="ts">
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import { collection1, item1 } from '$lib/data/exampleData';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { resetDialog, toggleDialog } from '$lib/stores/dialog';
	import TextField from '$lib/components/inputs/TextField.svelte';

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
	<div class="w-full">
		<TextField id="name" label="Name" labelSize="lg" name="name" value={collection1.title}
		></TextField>
	</div>

	<div class="w-full">
		<TextArea
			id="description"
			label="Description"
			labelSize="lg"
			name="description"
			rows={2}
			value={collection1.description}
		></TextArea>
	</div>

	<ListItem
		bottomDivider={false}
		class="underline-offset-8 pt-8 pb-6"
		design="destructive"
		on:click={toggleDialog}
		text="Delete collection"
		topDivider={false}
	/>
</div>
<Dialog {button1} {button2} text="This cannot be undone" title="Delete “{item1.title}”?"></Dialog>
