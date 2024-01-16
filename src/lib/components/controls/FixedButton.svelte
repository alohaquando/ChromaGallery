<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';

	export let icon: string | undefined;
	export let href: string = '';
</script>

<div class="sticky flex justify-end mt-10 bottom-28">
	<Fab class="bg-neutral-800 z-40" {href} {icon}></Fab>
</div>
