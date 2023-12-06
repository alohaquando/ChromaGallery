<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import type { Item } from '../../../model';

	export let data: Item[];
</script>

<div class="flex gap-4">
	<div class="flex flex-col w-1/2 gap-4">
		{#each data as item, index}
			{#if index % 2 === 0}
				<Block
					data={item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
	<div class="flex flex-col w-1/2 gap-4">
		{#each data as item, index}
			{#if index % 2 === 1}
				<Block
					data={item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
</div>