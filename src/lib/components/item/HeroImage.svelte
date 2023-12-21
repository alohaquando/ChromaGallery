<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import type { Item } from '../../stores/model';

	export let imageFull: boolean = false;
	let heightClass = 'h-80';
	if (imageFull) {
		heightClass = 'h-auto';
	}
	export let hideYear: boolean = false;
	export let data: Item;
	export let hideInfo: boolean = false;
	let customClass = '';
	export { customClass as class };
</script>

<div class="w-full flex-col gap-6 inline-flex {customClass}">
	<div class="w-full {heightClass} rounded-lg flex overflow-hidden relative items-center">
		<Block class="object-cover rounded-lg" {data} stretch={false}></Block>
	</div>
	{#if !hideInfo}
		<div class="flex-col gap-6 flex">
			<Link href="/user/items/{data.id}" type="headline">
				{data.title}
			</Link>
			<Headline>{data.author}</Headline>
			{#if !hideYear}
				<Headline class="!text-white/50">
					{data.year}
				</Headline>
			{/if}
		</div>
	{/if}
</div>
