<script lang="ts">
	import ModalInfo from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../data';
	import { modal } from '$lib/stores/pageLayout';

	export let number = 0;

	modal.update(modalData => ({
		...modalData,
		toggled: true,
		exit: true,
		title: 'Add to list',
		button: 'Add'
	}));
</script>

<TextField id="" name="" placeholder=""></TextField>
<DragList class="gap-4 mt-6 border-transparent" data={allItem}></DragList>

