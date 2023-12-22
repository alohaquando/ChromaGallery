<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data.js';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Edit items',
		button: 'Save'
	}));
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<TextField id="1" name="1" placeholder="Find item"></TextField>
	<DragList class="gap-4 w-full" items={allItem}></DragList>
</div>
