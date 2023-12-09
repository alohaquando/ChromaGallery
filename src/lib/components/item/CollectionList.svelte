<!--suppress ALL -->

<script lang="ts">
	import type { Comment } from 'postcss';
	import type { Collection } from '../../../model';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';

	export let data: Collection[];
</script>

<div class="flex items-center overflow-y-clip overflow-x-scroll gap-4 scrollbar-none">
	{#each data as collection}
		<CollectionBlock class="shrink-0" data={collection} style="grid"></CollectionBlock>
	{/each}
	<Fab class="translate-y-[-25%] shrink-0" icon="" size="lg">View all</Fab>
</div>