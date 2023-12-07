<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<Modal exit title="Account setting">
	<div class=" flex flex-col justify-center items-center">
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			icon="faChevronRight"
			leadingText="Update name"
			topDivider={false}
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			icon="faChevronRight"
			leadingText="Update email"
			topDivider={false}
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			icon="faChevronRight"
			leadingText="Update password"
			topDivider={false}
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			design="destructive"
			leadingText="Log out"
			topDivider={false}
		/>
	</div>
</Modal>
