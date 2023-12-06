<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Item from '$lib/wip/backend/Item.svelte';
	export let data: Item = {};
</script>

<Modal title="Account setting">
	<div class=" flex flex-col justify-center items-center">
		<ListItem
			leadingText="Update name"
			icon="faChevronRight"
			topDivider={false}
			bottomDivider={false}
			clickable={true}
			data={Item}
		/>
		<ListItem
			leadingText="Update email"
			icon="faChevronRight"
			topDivider={false}
			bottomDivider={false}
			clickable={true}
			data={Item}
		/>
		<ListItem
			leadingText="Update password"
			icon="faChevronRight"
			topDivider={false}
			bottomDivider={false}
			clickable={true}
			data={Item}
		/>
		<ListItem
			leadingText="Log out"
			design="destructive"
			topDivider={false}
			bottomDivider={false}
			clickable={true}
			data={Item}
		/>
	</div>
</Modal>
