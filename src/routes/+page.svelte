<script lang="ts">
	import { itemStore } from '$lib/stores/itemStore';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { faCarTilt } from '@fortawesome/pro-solid-svg-icons';
	import { item1, item2, item3 } from '$lib/stores/data.js';
	import { setContext } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';

	let itemList = [];
	let isDataLoaded = false;

	onMount(async () => {
		itemStore
			.getFeaturedItems()
			.then((itemsData) => {
				itemList = itemsData;
				console.log(itemList);

				// Do something with the items data
			})
			.catch((error) => {
				// Handle errors
				console.error('Error:', error);
			});
	});

	// Check if Logged-in
	let userEmail;
	let userName;
	const authen = getAuth();
	onAuthStateChanged(authen, (user) => {
		if (user) {
			console.log(user);
			userName = user.displayName;
			userEmail = user.email;
		} else {
			console.log('Not signed in');
		}
	});
</script>

<div class="w-full h-[80vh] pt-[5vh] flex flex-col items-center justify-between">
	<div class="flex flex-col items-center gap-10 w-full grow justify-center">
		<DisplayLarge class="relative -left-[10%]">The place</DisplayLarge>
		<DisplayLarge class="relative -left-[2%]">for</DisplayLarge>
		<DisplayLarge class="relative left-[10%]">all things</DisplayLarge>
		<DisplayLarge class="relative">artistic</DisplayLarge>
	</div>
	<div class="flex w-full justify-between max-w-3xl mt-32">
		{#if userEmail}
			<Fab class="" href="/user/account/" icon="faUser" size="lg">My account</Fab>
		{:else}
			<Fab class="" href="/user/account/sign-in" icon="faUser" size="lg">Sign me<br />in</Fab>
		{/if}
		<Fab class="-mt-20" href="/browse" icon="faSearch" size="lg">Show me<br />more</Fab>
		<Fab class="mt-8" href="/" icon="faPlay" size="lg">Relax me</Fab>
	</div>
	<InfoChip class="opacity-50" design="text" icon="faAngleDown">Scroll for more</InfoChip>
</div>

<div class="w-full h-20 mt-7"></div>
<DisplayLarge class="mt-20"></DisplayLarge>
<!-- {#if itemList.length > 0}
	{#each itemList as item (item.id)}
		<HeroImage
			alt="#"
			author={item.artist}
			class="mt-12"
			year={item.year}
			name={item.title}
			src={item.src}
		></HeroImage>
	{/each}
{:else}

	<p>Loading...</p>
{/if} -->
<div class="flex flex-col gap-10">
	{#each itemList as item}
		{#if item.id}
			<HeroImage {item} hideYear></HeroImage>
		{/if}
	{/each}
</div>