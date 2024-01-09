<script lang="ts">
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
</script>

<div class="gap-8 flex flex-col">
	<div class="w-full">
		<TextField id="create" label="Name" labelSize="lg" name="name" placeholder="Collection name"
		></TextField>
	</div>

	<div class="w-full">
		<TextArea
			id="create"
			label="Description"
			labelSize="lg"
			name="description"
			placeholder="Collection description"
			rows={2}
		></TextArea>
	</div>
	<Button class="mt-16 mb-8"  width="full">Add</Button>

</div>
