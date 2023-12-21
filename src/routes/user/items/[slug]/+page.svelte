<script lang="ts">
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import InfoRow from '$lib/components/item/InfoRow.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { itemStore } from '$lib/stores/itemStore';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { arrayUnion, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
	import { authStore } from '$lib/stores/store';
	import { getAuth } from 'firebase/auth';
	import { header } from '$lib/stores/header';

	header.update(modalData => ({
		...modalData,
		type: 'back',
		href: '/browse'
	}));

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
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

	const handleBookmark = async () => {
		const authen = getAuth();
		const userId = authen.currentUser.uid;
		console.log(authen.currentUser.uid);

		await setDoc(
			doc(db, 'users', userId, 'lists', 'bookmark'),
			{
				items: arrayUnion(data.slug)
			},
			{ merge: true }
		);
		console.log('Bookmarked successfully');
	};
</script>

{#if $itemStore}
	<HeroImage imageFull data={$itemStore}></HeroImage>

	<div class="flex justify-between items-end mb-12">
		<div class="flex space-x-2">
			<Button icon="faPlus" type="submit" href='/user/items/${data.slug}/add-to-list'>Add to list</Button>
			<Button icon="faVolume" type="submit">Audio guide</Button>
		</div>
		<Fab icon="faStar" on:click={handleBookmark}></Fab>
	</div>

	<BodyLarge>
		{$itemStore.description}
	</BodyLarge>

	<div class="mt-8">
		<InfoRow href="#" leadingText="Object ID" trailingText={data.slug} />
		<InfoRow href="#" leadingText="Place made" trailingText={$itemStore.location} />
		<!--	<ListItem href="/" leadingText="Named collection" trailingText="Harold E. Edgerton Collection" />-->
	</div>

	<div class="mt-12 gap-y-8 flex flex-col">
		<BodyLarge class="mt-12">Related</BodyLarge>

		<HeroImage data={$itemStore}></HeroImage>

		<HeroImage data={$itemStore}></HeroImage>
	</div>
{/if}