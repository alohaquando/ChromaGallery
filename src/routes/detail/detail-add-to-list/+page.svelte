<script lang="ts">
	import ModalInfo from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../data.js';

</script>

<Modal button="Add" title="Add to list">
	<div class="flex flex-col justify-center items-center gap-8">
		<Button icon="faPlus">New list</Button>
		<Button class="w-full" icon="faSearch">Find list</Button>
	</div>
	<DragList class="gap-4 mt-6" data={allItem}></DragList>
</Modal>
