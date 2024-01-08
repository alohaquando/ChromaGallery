<script lang="ts">
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import InfoRow from '$lib/components/item/InfoRow.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import type { PageData } from './$types';
	import { toggleDialog } from '$lib/stores/dialog';

	export let data: PageData;

	let button1 = {
		option: 'Cancel',
		type: 'outlined',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Delete item',
		type: 'filled',
		function: function() {
		}
	};
</script>

<div class="flex justify-end gap-x-4 mb-6">
	<Button destructive on:click={toggleDialog}>Delete</Button>
	<Button design="filled" href="./{data.slug}/edit">Edit</Button>
</div>
<HeroImage class="mb-8" item={data.item}></HeroImage>
<BodyLarge>
	{data.item.description}
</BodyLarge>
<div class="flex flex-col justify-center items-center mt-10">
	<InfoRow class="w-full" href="" leadingText="Place made" trailingText={data.item.location}></InfoRow>
</div>
<Dialog
	{button1}
	{button2}
	text="The item will be deleted pernamently"
	title="Delete {data.item.title}?"
></Dialog>
