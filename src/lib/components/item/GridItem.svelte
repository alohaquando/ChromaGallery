<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import type { Item } from '$lib/data/dataModels';

	export let items: Item[] | undefined;
	let contentClass = 'flex flex-col gap-4 sm:w-1/2';
</script>

<div class="flex flex-col sm:flex-row gap-4">
	<div class={contentClass}>
		{#each items as item, index}
			{#if index % 2 === 0}
				<Block {item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
	<div class={contentClass}>
		{#each items as item, index}
			{#if index % 2 === 1}
				<Block {item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
</div>