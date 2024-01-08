<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';

	export let icon: string | undefined;
	export let href: string = '';
</script>

<Fab class="!fixed bottom-[12%] right-6 bg-neutral-900 hover:bg-neutral-900 z-50" {href} {icon}></Fab>
