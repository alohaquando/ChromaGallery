<script lang="ts">
	import Block from '$lib/components/item/Block.svelte';
	import type { Item } from '$lib/data/dataModels';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let items: Item[] | undefined | null;
	export let itemLimit: number | undefined;
	if (itemLimit) {
		items = items?.slice(0, itemLimit);
	}

	let halfItems;

	let containerClass = 'flex flex-col gap-4 sm:w-1/2';

	// //lazy loading
	// const totalItems = items?.length; // Total number of items
	// const itemsPerPage = 3; // Number of items to display per page
	//
	// // Replace this with your actual array of items
	// const loadedItems = writable([]);
	//
	// let currentPage = 0;
	//
	// onMount(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					// Load more items when user scrolls to the bottom
	// 					loadMoreItems();
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 1 } // Trigger when the entire target is in view
	// 	);
	//
	// 	const target = document.querySelector('#loadMoreTrigger');
	// 	// @ts-ignore
	// 	observer.observe(target);
	//
	// 	return () => observer.disconnect(); // Cleanup when component is unmounted
	// });
	//
	// function loadMoreItems() {
	// 	const startIndex = currentPage * itemsPerPage;
	// 	const endIndex = startIndex + itemsPerPage;
	//
	// 	if (totalItems && startIndex < totalItems) {
	// 		const nextItems = getNextItems(startIndex, endIndex);
	// 		loadedItems.update((prevItems) => [...prevItems, ...nextItems]);
	// 		currentPage++;
	// 		console.log(nextItems);
	// 	}
	// }
	//
	// function getNextItems(startIndex: number, endIndex: number) {
	// 	// Replace this with your logic to get the next chunk of items
	// 	return items?.slice(startIndex, endIndex);
	// }
</script>

<div class="flex flex-col sm:flex-row gap-4">
	{#if items}
		<div class={containerClass}>
			{#each items as item, index}
				{#if index % 2 === 0}
					<Block {item} class="rounded-lg animate-fadeIn" stretch={false} />
				{/if}
			{/each}
		</div>
		<div class={containerClass}>
			{#each items as item, index}
				{#if index % 2 === 1}
					<Block {item} class="rounded-lg animate-fadeIn" stretch={false} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<!--<div class="relative -bottom-50 bg-black h-2" id="loadMoreTrigger"></div>-->