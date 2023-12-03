<script>
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<Modal buttonText="Save" title="Edit list">
	<div class="gap-6 flex flex-col">
		<TextField placeholder="Enter something..."></TextField>
		<TextField placeholder="Enter something..."></TextField>
	</div>
	<div class="pt-8">
		<ListItem leadingText="Delete list" bottomDivider={false} design="destructive" href="/" />
	</div>
</Modal>
