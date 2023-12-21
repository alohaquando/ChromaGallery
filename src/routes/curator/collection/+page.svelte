<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';
</script>

<PageTitle>Collections</PageTitle>

<Button class="mt-16 mb-8" icon="faMagnifyingGlass" width="full">Search</Button>
<DragList button="link" class="gap-4" data={allItem}></DragList>

<FixedButton icon="faPlus"></FixedButton>

