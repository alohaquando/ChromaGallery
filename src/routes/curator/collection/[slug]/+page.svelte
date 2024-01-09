<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { count } from '$lib/utils/countItem';
	import { handleDeleteCollection } from '$lib/data/collection';
	import { resetDialog, toggleDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import type { PageData } from './$types';
	import { extractItems } from '$lib/data/item';

	export let data: PageData;

	let itemList = extractItems(data.collection);

	let button1 = {
		option: 'Cancel',
		type: 'outlined',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Log out',
		type: 'filled',
		function: () => {
			handleDeleteCollection(data.slug);
		}
	};
</script>

<div class="flex justify-end gap-x-4 mb-6">
	<Button destructive on:click={toggleDialog}>Delete</Button>
	<Button design="filled" href="./{data.slug}/edit-detail">Edit</Button>
</div>
<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
	{data.collection.title}
</Headline>
<Headline class="text-white  text-opacity-50">{count(data.collection.items)}</Headline>
<BodyLarge class="pt-6">
	{data.collection.description}
</BodyLarge>

<Button class="mt-12 w-full" design="filled" href="./{data.slug}/add">Add items</Button>
<Button class="mt-4 mb-6 w-full" href="./{data.slug}/edit-items">Edit items</Button>

{#await itemList}
	<DragList class="gap-4" placeholder={3}></DragList>
{:then items}
	<DragList button="link" class="gap-4" items={items}></DragList>
{/await}

<Dialog {button1} {button2} text="This cannot be undone" title="Delete “{data.collection.title}”?"></Dialog>
