<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../../../../data';

	import { modal } from '$lib/stores/modal';

	export let number = 0;

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		exit: true,
		title: 'Add to list',
		button: 'Add'
	}));
</script>

<TextField id="" name="" placeholder="Search list"></TextField>
<DragList class="gap-4 mt-6 border-transparent" data={allItem}></DragList>

