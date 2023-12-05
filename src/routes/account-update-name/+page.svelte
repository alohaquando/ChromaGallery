<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
</script>

<Modal title="Update name" buttonText="Update">
	<div class=" flex flex-col justify-center gap-4 pb-8">
		<BodyLarge>New name</BodyLarge>
		<TextField placeholder="New name"></TextField>
	</div>
</Modal>
