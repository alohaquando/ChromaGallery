<script>
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
</script>

<Modal title="Edit items" buttonText="Save">
	<div class="flex justify-center items-center flex-col gap-6">
		<Button icon="faSearch" class="w-full">Find item</Button>
		<div class="flex flex-col justify-center items-center w-full gap-4">
			<RowItem type="edit"></RowItem>
			<RowItem type="edit"></RowItem>
			<RowItem type="edit"></RowItem>
			<RowItem type="edit"></RowItem>
			<RowItem type="edit"></RowItem>
		</div>
	</div>
</Modal>
