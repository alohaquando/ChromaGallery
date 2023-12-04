<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Collection, Item } from '../../../model';

	export let data: Item;
	export let hideInfo: boolean = false;
	let customClass = '';
	export { customClass as class };
</script>

<div class="w-full flex-col gap-6 inline-flex {customClass}">
	<div class="w-full h-80 rounded-lg flex overflow-hidden relative">
		<Block alt={data.title} class="" src={data.src}></Block>
	</div>
	{#if !hideInfo}
		<div class="flex-col gap-6 flex">
			<Link href="../routes/item/{data.id}" type="headline">
				{data.title}
			</Link>
			<Headline>{data.author}</Headline>
			<Headline class="!text-white/50">
				{data.time}
			</Headline>
		</div>
	{/if}
</div>
