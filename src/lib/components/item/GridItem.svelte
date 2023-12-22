<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import type { Item } from '$lib/stores/model';

	export let items: Item[];
</script>

<div class="flex gap-4">
	<div class="flex flex-col w-1/2 gap-4">
		{#each items as item, index}
			{#if index % 2 === 0}
				<Block item={item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
	<div class="flex flex-col w-1/2 gap-4">
		{#each items as item, index}
			{#if index % 2 === 1}
				<Block item={item} class="rounded-lg" stretch={false} />
			{/if}
		{/each}
	</div>
</div>
