<script lang="ts">
	import Block from '$lib/components/block/Block.svelte';

	type Item = {
		href: string;
		src: string;
		title: string;
	};

	export let data: Item[] = [];
</script>

<div class="flex gap-4">
	<div class="flex flex-col w-1/2 gap-4">
		{#each data as data, index}
			{#if index % 2 === 0}
				<Block
					href={data.href}
					alt={data.title}
					src={data.src}
					stretch={false} class="rounded-lg" />
			{/if}
		{/each}
	</div>
	<div class="flex flex-col w-1/2 gap-4">
		{#each data as data, index}
			{#if index % 2 === 1}
				<Block
					href={data.href}
					alt={data.title}
					src={data.src}
					stretch={false} class="rounded-lg" />
			{/if}
		{/each}
	</div>
</div>