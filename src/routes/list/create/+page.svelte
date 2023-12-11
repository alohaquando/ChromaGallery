<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import { defaultLayout, modal } from '$lib/stores/pageLayout';

	defaultLayout();

	modal.update(modalData => ({
		...modalData,
		toggled: true,
		exit: true,
		href: '/account/me',
		title: 'Create new list',
		transition: true
	}));
</script>


<div class="gap-6 flex flex-col">
	<TextField id="" name="" placeholder="Enter something..."></TextField>
	<TextField id="" name="" placeholder="Enter something..."></TextField>
</div>
