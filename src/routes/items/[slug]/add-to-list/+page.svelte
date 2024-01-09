<script lang="ts">
    import Button from '$lib/components/controls/Button.svelte';
    import CollectionList from '$lib/components/item/CollectionList.svelte';
    import { onMount } from 'svelte';
    import { getAuth } from 'firebase/auth';
    // import { listStore } from '$lib/stores/listStore.js';
    // import { itemStore } from '$lib/stores/itemStore.js';
    import { db } from '$lib/services/firebase/firebase.js';
    import { handleAddToMultipleList } from '$lib/data/list';
    import type { PageData } from './$types';
    import type { List } from '$lib/data/dataModels';

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
    console.log(lists);

    let selected: string[] = [];

</script>

<div class="flex flex-col justify-center items-center gap-8">
    <Button href="/list/create" icon="faPlus">New list</Button>
    <Button class="w-full" href="add-to-list/search" icon="faSearch">Find list</Button>
</div>
<div class="mt-6">
    <CollectionList bind:selected={selected} class="gap-4" collections={lists} rowType type="checkbox"></CollectionList>
</div>
<div class="sticky bottom-6 py-4">
    <Button design="filled" on:click={()=>handleAddToMultipleList(data.session.uid, selected, data.slug)} width="full">
        Add
        To List
    </Button>
</div>
