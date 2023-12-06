<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { itemList } from '../../data.js';
</script>

<Modal buttonText="Save" title="Edit items">
	<div class="flex justify-center items-center flex-col gap-6">
		<TextField id="1" name="1" placeholder="q"></TextField>
		<DragList class="" data={itemList}></DragList>

	</div>
</Modal>
