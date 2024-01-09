<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';

	export let icon: string | undefined;
	export let href: string = '';
</script>

<Fab class="!fixed bottom-[12%] right-[5%] bg-neutral-900 z-40" {href} {icon}></Fab>
