<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
</script>

<BG randomized />

<Modal button="Update" title="Update name" transition={false}>
	<div class=" flex flex-col justify-center gap-4 pb-8">
		<BodyLarge>New name</BodyLarge>
		<TextField id="" name="" placeholder="New name"></TextField>
	</div>
</Modal>
