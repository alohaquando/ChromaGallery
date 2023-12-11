<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import { onMount } from 'svelte';
</script>

<Bg randomized />

<Modal exit title="Account setting">
	<div class=" flex flex-col justify-center items-center">
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			href="update/name"
			icon="faChevronRight"
			topDivider={false}
			trailingText="Update name"
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			href="update/email"
			icon="faChevronRight"
			topDivider={false}
			trailingText="Update email"
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			href="update/password"
			icon="faChevronRight"
			topDivider={false}
			trailingText="Update password"
		/>
		<ListItem
			bottomDivider={false}
			class="w-full"
			clickable={true}
			design="destructive"
			topDivider={false}
			trailingText="Log out"
		/>
	</div>
</Modal>
