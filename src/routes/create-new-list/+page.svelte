<script>
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Block from '$lib/components/block/Block.svelte';
</script>

<Modal buttonText="Save" title="Create new list">
	<div class="gap-6 flex flex-col">
		<TextField placeholder="Enter something..."></TextField>
		<TextField placeholder="Enter something..."></TextField>
	</div>
</Modal>
