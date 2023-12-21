<script lang="ts">
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import { allItem } from '$lib/stores/data';
	import { itemList2, itemList1 } from '$lib/stores/data';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Account setting',
		button: 'Save'
	}));
</script>
<DragList class="gap-4 my-8 w-full" data={itemList1} displayLimit={3} placeholder={3}></DragList>

<Divider></Divider>

<Button class="my-6 w-full px-6" icon="faMagnifyingGlass">Find item to feature</Button>
<DragList button="add" class="gap-4" data={allItem}></DragList>
