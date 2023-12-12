<script lang="ts">
    import Button from '$lib/components/controls/Button.svelte';
    import PageTitle from '$lib/components/layouts/PageTitle.svelte';
    import Fab from '$lib/components/controls/Fab.svelte';
</script>

<PageTitle>Items</PageTitle>
<Button class="mb-10 mt-20" icon="faMagnifyingGlass" width="full">Search</Button>

<div class="text-center text-white text-opacity-50 text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">
    No item added yet
</div>

<Fab class="fixed bottom-[15%] right-6" icon="faPlus"></Fab>