<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '../../../data';
</script>

<Modal buttonText="Save" title="Edit items">
	<div class="flex justify-center items-center flex-col gap-6">
		<Button class="w-full" icon="faSearch">Find item</Button>
		<DragList class="w-full gap-4 " data={allItem}></DragList>
	</div>
</Modal>
