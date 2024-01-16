<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';
	import CollectionList from '$lib/components/item/CollectionList.svelte';
	import { onMount } from 'svelte';
	import { handleAddToMultipleList } from '$lib/data/list';
	import type { PageData } from './$types';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import { goto } from '$app/navigation';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;

	let lists = data.lists;
	// onMount(async () => {
	// 	const authen = getAuth();
	// 	const userId = authen.currentUser?.uid;
	//
	// 	await listStore.getUserLists(userId);
	// 	listStore.subscribe((lists) => {
	// 		console.log(lists);
	// 	});
	// 	console.log($itemStore);
	// });
	//
	// let url = window.location.href;
	//
	// function extractItemIdFromUrl(url: string) {
	// 	// Define a regex pattern to match the item ID in the URL
	// 	const regex = /\/user\/item\/\$([A-Za-z0-9]+)\/add-to-list/;
	//
	// 	// Use the exec method to extract the match from the URL
	// 	const match = regex.exec(url);
	//
	// 	// Check if there is a match and return the captured item ID
	// 	return match && match[1];
	// }
	//
	// const handleAddToList = async () => {
	// 	const url = window.location.href;
	//
	// 	const itemId = extractItemIdFromUrl(url);
	//
	// 	const authen = getAuth();
	// 	const userId = authen.currentUser.uid;
	// 	console.log(userId);
	//
	// 	await setDoc(
	// 		doc(db, 'users', userId, 'lists', 'LgRY8ejhmwjI8Pp3Qai4'),
	// 		{
	// 			items: arrayUnion(itemId)
	// 		},
	// 		{ merge: true }
	// 	);
	// 	console.log('Bookmarked successfully');
	// };
	let selected: string[] = [];

	let searchToggled: boolean = false;
	$: searchToggled;

	let searchTerm = '';
	let searchResults: any; // Store search results

	async function fetchData() {
		try {
			const response = await fetch(
				`/items/${data.slug}/add-to-list?q=${searchTerm}&s=${data.session.uid}`
			);
			searchResults = await response.json(); // Store fetched search results
			lists = searchResults.lists.filter((list) => !list.items.includes(data.slug));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		fetchData();
	});

	const handleToggleSearch = () => {
		searchToggled = true;
	};

	const handleBlur = () => {
		searchToggled = Boolean(searchTerm);
	};
</script>

<div class="flex flex-col justify-center items-center gap-8">
	<Button href="/list/create" icon="faPlus">New list</Button>
	{#if !searchToggled}
		<Button class="w-full" icon="faSearch" on:click={handleToggleSearch}>Find list</Button>
	{:else}
		<TextField
			bind:value={searchTerm}
			id="search"
			name="search"
			placeholder="Search for list"
			on:blur={handleBlur}
			on:input={fetchData}
		></TextField>
	{/if}

	<CollectionList bind:selected class="gap-4" collections={lists} rowType type="checkbox"
	></CollectionList>
</div>
<div class="sticky bottom-6 py-4">
	<Button
		design="filled"
		on:click={async () => {
			await handleAddToMultipleList(data.session.uid, selected, data.slug);
			await goto(`/items/${data.slug}`);
		}}
		width="full"
	>
		Add To List
	</Button>
</div>
