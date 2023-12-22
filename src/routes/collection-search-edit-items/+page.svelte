<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
	import Headline from '$lib/components/typography/Headline.svelte';
</script>

<Modal button="Save">

	<Headline>Edit items</Headline>

	<div class="mt-8 mb-6 w-full h-full">
		<TextField icon="faXmark" id="" name="" value="Text"></TextField>
	</div>

	<DragList class="gap-4" items={allItem} type="delete"></DragList>
</Modal>
