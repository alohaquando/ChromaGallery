<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { itemList } from '../../data';

	export let number = 0;
</script>

<Modal buttonText="Add" title="Add to list">
	<TextField id="" name="" placeholder=""></TextField>
	<DragList class="gap-4 mt-6 border-transparent" data={itemList}></DragList>
</Modal>
