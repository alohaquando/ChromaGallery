<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { allCollection } from '$lib/stores/data';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Add item to collection',
		button: 'Add'
	}));
</script>

<Button class="mt-8 mb-6" icon="faMagifyingGlass" width="full">Find item</Button>

<CollectionList class="gap-4" data={allCollection} rowType></CollectionList>
