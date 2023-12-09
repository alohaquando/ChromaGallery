<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	import { itemList2 } from '../../data';
	import { count } from '$lib/utils/countItem';
	import { allItem } from '../../data';

	let str = count(allItem);

</script>

<Bg randomized />

<PageTitle>Items</PageTitle>
<Button class="mb-10 mt-20" icon="faMagnifyingGlass" width="full">Search</Button>
<div class="flex  justify-between items-center">
	<BodyLarge>Featured</BodyLarge>
	<Button icon="faPen">Manage</Button>
</div>
<DragList class="mt-6 gap-4" data={itemList2}></DragList>

<div class="mt-16  flex justify-between items-center">
	<BodyLarge>All items</BodyLarge>
	<Body>{str}</Body>
</div>
<DragList class="gap-4 mt-8" data={allItem}></DragList>
<Fab class="fixed bottom-[15%] right-6" icon="faPlus"></Fab>