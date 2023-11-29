<script lang="ts">
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';

	import { itemStore } from '$lib/stores/itemStore';
	import { onMount } from 'svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	onMount(() => {
		itemStore.getItem(data.slug);
	});
</script>

<BG />

{#if $itemStore}
	<HeroImage
		alt="Image Alt Text"
		artist={$itemStore.artist}
		class="my-4"
		href=""
		name={$itemStore.title}
		src={$itemStore.image}
		time={$itemStore.foundedYear}
	></HeroImage>

	<div class="flex justify-between items-end mb-12">
		<div class="flex space-x-2">
			<Button icon="faPlus" type="submit">Add to list</Button>
			<Button icon="faVolume" type="submit">Audio guide</Button>
		</div>
		<Fab icon="faStar"></Fab>
	</div>

	<BodyLarge>
		{$itemStore.description}
	</BodyLarge>

	<div class="mt-8">
		<ListItem href="/" leadingText="Object ID" trailingText="HEE-NC-57001" />
		<ListItem href="/" leadingText="Place made" trailingText={$itemStore.location} />
		<!--	<ListItem href="/" leadingText="Named collection" trailingText="Harold E. Edgerton Collection" />-->
	</div>

	<div class="mt-12 gap-y-8 flex flex-col">
		<BodyLarge class="mt-12">Related</BodyLarge>

		<HeroImage
			alt="Image Alt Text"
			artist="Srijon Chowdhury"
			class="my-4"
			href="item-link"
			name="Related Contents"
			src=""
			time="Circa 2315"
		></HeroImage>

		<HeroImage
			alt="Image Alt Text"
			artist="Srijon Chowdhury"
			class="my-4"
			href="item-link"
			name="Related Contents"
			src=""
			time="Circa 2315"
		></HeroImage>
	</div>
{/if}
