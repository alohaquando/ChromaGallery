<script lang="ts">
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';

	import { itemStore } from '$lib/stores/itemStore';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { arrayUnion, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/store';
	import { getAuth } from 'firebase/auth';

	/** @type {import('./$types').PageLoad} */
	export let data: any;

	onMount(async () => {
		itemStore.getItem(data.slug);

		const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			let preLoad = docSnap.data().item;
			console.log(preLoad);
		} else {
			console.log('No such document!');
		}
	});

	const authen = getAuth();
	const userId = authen.currentUser.uid;
	console.log(authen.currentUser.uid);

	const handleBookmark = async () => {
		await setDoc(
			doc(db, 'users', userId, 'lists', 'bookmark'),
			{
				item: arrayUnion(data.slug),
			},
			{ merge: true }
		);
		console.log('scu');

		// let dataToSetToStore;
		// const docRef = doc(db, 'users', userId, 'lists', 'bookmark');
		// const docSnap = await getDoc(docRef);
		// if (!docSnap.exists()) {
		// 	const userRef = doc(db, 'users', userId, 'lists', 'bookmark');
		// 	dataToSetToStore = {
		// 		item: [data.slug]
		// 	};
		// 	await setDoc(userRef, dataToSetToStore, { merge: true });
		// } else {
		// 	const userData = docSnap.data();
		// 	dataToSetToStore = userData;
		// }
	};
</script>

{#if $itemStore}
	<HeroImage data={$itemStore}></HeroImage>

	<div class="flex justify-between items-end mb-12">
		<div class="flex space-x-2">
			<Button icon="faPlus" type="submit">Add to list</Button>
			<Button icon="faVolume" type="submit">Audio guide</Button>
		</div>
		<Fab icon="faStar" on:click={handleBookmark}></Fab>
	</div>

	<BodyLarge>
		{$itemStore.description}
	</BodyLarge>

	<div class="mt-8">
		<ListItem href="/" leadingText="Object ID" trailingText={data.slug} />
		<ListItem href="/" leadingText="Place made" trailingText={$itemStore.location} />
		<!--	<ListItem href="/" leadingText="Named collection" trailingText="Harold E. Edgerton Collection" />-->
	</div>

	<div class="mt-12 gap-y-8 flex flex-col">
		<BodyLarge class="mt-12">Related</BodyLarge>

		<HeroImage data={$itemStore}></HeroImage>

		<HeroImage data={$itemStore}></HeroImage>
	</div>
{/if}
