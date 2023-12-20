<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import GridCollection from '$lib/components/item/GridCollection.svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { defaultLayout, stateCheck } from '$lib/stores/pageLayout';
	import { modalData, previousState } from '$lib/stores/modal';
	import { onMount } from 'svelte';
	import { itemStore } from '$lib/stores/itemStore';
	import { allCollection } from '../../../data';
	import { listStore } from '$lib/stores/listStore';

	// account name
	let userEmail;
	let userName;

	const authen = getAuth();
	let itemList = [];
	let userId = authen.currentUser?.uid;
	onAuthStateChanged(authen, (user) => {
		if (user) {
			console.log(user);
			userName = user.displayName;
			userEmail = user.email;
		} else {
			console.log('Not sign in');
		}
	});

	onMount(async () => {
		itemStore
			.getUserLists(userId)
			.then((itemsData) => {
				itemList = itemsData;
				console.log(itemList);

				// Do something with the items data
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});
		listStore
		.getUserLists(userId);
		$listStore.subscribe((lists) => {
			console.log(lists);
		});
	});
</script>

{#if userEmail != null}
	<!-- Sign In -->
	<div class="w-full h-full flex flex-col justify-center items-center">
		<div class="w-full h-full flex flex-col justify-center items-center gap-8">
			<PageTitle>{userName}</PageTitle>
			<Button href="account/setting" icon="faGear">Account settings</Button>
		</div>

		<!-- My Lists -->
		<div class="w-full flex justify-between items-center pt-20 pb-4">
			<BodyLarge>My lists</BodyLarge>
			<Button href="/user/list/create" icon="faPlus">New lists</Button>
		</div>

		<!--	Bookmark -->
		<div class="w-full flex">
			<!-- <CollectionBlock ></CollectionBlock> -->
		</div>

		<GridCollection class="mt-10" data={allCollection}></GridCollection>
	</div>
{:else}
	<!-- Not Sign In -->
	<div class="w-full flex flex-col justify-center items-center relative">
		<DisplayLarge class="pt-14">Hi there</DisplayLarge>
		<div class="flex flex-col justify-center items-center text-center gap-8 mt-20">
			<BodyLarge>You’re not signed in yet</BodyLarge>
			<BodySmall>
				Sign in or become a member to manage your bookmarks and lists of your favorite piece of art
			</BodySmall>
		</div>
		<div class="pt-14 flex justify-center w-screen">
			<Fab class="relative -left-[10%]" icon="faCircleUser" size="lg" href="account/sign-in"
				>Sign me<br />in</Fab
			>
			<Fab class="mt-20 relative -right-[5%]" icon="faSparkles" size="lg" href="account/register"
				>Become a<br />member
			</Fab>
		</div>
	</div>
{/if}
