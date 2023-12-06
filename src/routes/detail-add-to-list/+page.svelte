<script>
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
	export let number = 21;
</script>

<Modal title="Add to list" buttonText="Add">
	<div class="flex flex-col justify-center items-center gap-8">
		<Button icon="faPlus">New list</Button>
		<Button icon="faSearch" class="w-full">Find list</Button>
	</div>
	<div class="w-full flex flex-col justify-center items-center gap-4 pt-4">
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
		<RowItem subtitle="{number} item{number > 1 ? 's' : ''}"></RowItem>
	</div>
</Modal>
