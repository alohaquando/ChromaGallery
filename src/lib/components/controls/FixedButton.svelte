<script lang="ts">
    import Fab from '$lib/components/controls/Fab.svelte';

    export let icon: string | undefined;
</script>

<Fab class="!fixed bottom-[12%] right-6 bg-neutral-900 hover:bg-neutral-900" {icon}></Fab>