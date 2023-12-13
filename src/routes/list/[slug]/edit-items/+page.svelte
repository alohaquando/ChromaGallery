<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../../data';
	import { modalData } from '$lib/stores/modal';

	modalData.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Edit items',
		button: 'Save'
	}));
</script>

<div class="flex justify-center items-center flex-col gap-6">
	<Button class="w-full" icon="faSearch">Find item</Button>
	<DragList class="w-full gap-4 " data={allItem}></DragList>
</div>
