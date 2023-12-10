<script lang="ts">
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import { item1 } from '../../data';
</script>

<Dialog option1="Keep" option2="Delete" text="This cannot be undone" title='Delete “{item1.name}”'></Dialog>
