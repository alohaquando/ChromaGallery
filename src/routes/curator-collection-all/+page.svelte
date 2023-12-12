<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import {allItem} from '$lib/../data';
</script>

<Bg randomized></Bg>

<PageTitle>Collections</PageTitle>

<Button class="mt-16 mb-8 w-full" icon="faMagifyingGlass">Search</Button>
<DragList data={allItem} button="link" class="gap-4"></DragList>

<Fab class="fixed bottom-[15%] right-6" icon="faPlus"></Fab>

