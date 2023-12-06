<script>
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
	export let number = 0;
</script>

<Modal title="Add to list" buttonText="Add">
	<TextField></TextField>
	<div class="w-full flex flex-col justify-center items-center gap-4 pt-6">
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
	</div>
</Modal>
