<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';

</script>

<BG randomized />

<Modal button="Save" title="Create new list">
	<div class="gap-6 flex flex-col">
		<TextField id="" name="" placeholder="Enter something..."></TextField>
		<TextField id="" name="" placeholder="Enter something..."></TextField>
	</div>
</Modal>
