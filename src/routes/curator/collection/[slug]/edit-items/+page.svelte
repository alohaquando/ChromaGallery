<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Account setting',
		button: 'Save'
	}));
</script>

<Button class="mt-8 mb-6" icon="faMagifyingGlass" width="full">Find item</Button>
<DragList class="gap-4" items={allItem} type="edit"></DragList>