<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import { onMount } from 'svelte';

	export let data;

	// Scroll to featured items
	let root: HTMLElement;
	let featuredItemsElement: HTMLElement;
	onMount(() => {
		root = document.body.parentNode as HTMLElement;
	});
	const handleScrollForMoreClick = () => {
		root.scrollTo({
			top: featuredItemsElement.offsetTop - 32,
			behavior: 'smooth'
		});
	};

	// Switch images and text
	let visibleSlideshowClass = 'opacity-100 blur-none';
	let hiddenSlideshowClass = 'opacity-0 blur-xl';

	let beforeTextSlideshowClass = `${hiddenSlideshowClass} -translate-y-[40%]`;
	let currentTextSlideshowClass = visibleSlideshowClass;
	let afterTextSlideshowClass = `${hiddenSlideshowClass} -translate-y-[60%]`;

	let flavorText: string[] = [
		'creative',
		'captivating',
		'inspiring',
		'mesmerizing',
		'breathtaking',
		'exquisite',
		'phenomenal',
		'majestic',
		'enchanting',
		'splendid',
		'harmonious',
		'evocative',
		'masterful',
		'stunning',
		'dazzling',
		'transcendent',
		'awe-inspiring',
		'radiant',
		'spellbinding',
		'sensational',
		'magnificent',
		'riveting',
		'astounding',
		'marvelous',
		'elegant',
		'mind-blowing',
		'impressive',
		'exceptional',
		'riveting',
		'sublime',
		'mysterious',
		'glorious',
		'dynamic',
		'poignant',
		'serene',
		'awe-striking',
		'brilliant',
		'enrapturing',
		'lush',
		'innovative',
		'evocative',
		'rich',
		'vibrant',
		'surreal',
		'graceful',
		'whimsical',
		'ethereal',
		'delightful',
		'awe-inducing',
		'inventive'
	];
	let firstFlavorTextShown = Math.floor(Math.random() * flavorText.length);
	let secondFlavorTextShown = Math.floor(Math.random() * flavorText.length);
	let firstFlavorTextClass = visibleSlideshowClass;
	let secondFlavorTextClass = beforeTextSlideshowClass;

	let images: string[] = [
		'https://images.unsplash.com/photo-1703340020770-889bfc85f038?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1699180134120-fe19a5a775df?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1701762292571-2875f1e522b6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1703028408757-a95781e09832?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	];

	let firstImageClass = visibleSlideshowClass;
	let secondImageClass = hiddenSlideshowClass;
	let firstImageShown = 0;
	let secondImageShown = 1;

	const nextImage = () => {
		if (firstImageClass === visibleSlideshowClass) {
			firstImageClass = hiddenSlideshowClass;
			secondImageClass = visibleSlideshowClass;
			firstFlavorTextClass = afterTextSlideshowClass;
			secondFlavorTextClass = currentTextSlideshowClass;
			setTimeout(() => {
				firstImageShown = (firstImageShown + 2) % images.length;
				firstFlavorTextShown = Math.floor(Math.random() * flavorText.length);
				firstFlavorTextClass = beforeTextSlideshowClass;
			}, 1000);
		} else {
			firstImageClass = visibleSlideshowClass;
			secondImageClass = hiddenSlideshowClass;
			firstFlavorTextClass = currentTextSlideshowClass;
			secondFlavorTextClass = afterTextSlideshowClass;

			setTimeout(() => {
				secondImageShown = (secondImageShown + 2) % images.length;
				secondFlavorTextShown = Math.floor(Math.random() * flavorText.length);
				secondFlavorTextClass = beforeTextSlideshowClass;
			}, 1000);
		}
	};

	setInterval(function() {
		nextImage();
	}, 3000);
</script>

<!-- <div class="fixed z-50 top-0 left-0 flex flex-col space-y-6">
	<br />
	{data.session}
	{data.session?.uid}
	{data.session?.email}
	{data.session?.displayName}
	{data.session?.isCurator}

</div> -->

<!-- Background image -->
<div class="h-[110vh] w-screen absolute top-0 left-0">
	<img
		alt="set"
		class="h-full w-screen object-cover absolute [mask-image:linear-gradient(to_bottom,black,black,black,black,black,black,black,black,black,transparent)] transition duration-700 blur-fix {firstImageClass}"
		src={images[firstImageShown]}
	/>
	<img
		alt="set"
		class="h-full w-screen object-cover absolute [mask-image:linear-gradient(to_bottom,black,black,black,black,black,black,black,black,black,transparent)] transition duration-700 blur-fix {secondImageClass}"
		src={images[secondImageShown]}
	/>
</div>

<div class="w-screen mx-auto h-screen overflow-clip">
	<!--	Circle -->
	<div
		class=" w-[125vw] sm:w-[80vw] md:w-[70vw] max-w-lg rounded-full aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ring-white/30 ring-1 bg-gradient-to-t from-black/30 absolute backdrop-blur-lg will-change-transform shadow-inner blur-fix"
	>
		<!--		Text -->
		<DisplayLarge
			class="text-center leading-normal bg-gradient-to-b from-white/80 via-white/70 to-white/60 inline-block text-transparent bg-clip-text pt-10 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
		>
			The place <br />for all things<br /> <br />
		</DisplayLarge>
		<DisplayLarge
			class="text-center leading-normal inline-block bg-clip-text pt-10 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 {firstFlavorTextClass} text-white transition duration-700 blur-fix"
		>
			<br /><br />
			{flavorText[firstFlavorTextShown]}
		</DisplayLarge>

		<DisplayLarge
			class="text-center leading-normal inline-block bg-clip-text pt-10 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 {secondFlavorTextClass} text-white transition duration-700 blur-fix"
		>
			<br /><br />
			{flavorText[secondFlavorTextShown]}
		</DisplayLarge>

		<!--		Buttons-->
		<!--		<div-->
		<!--			class="flex absolute -bottom-12 px-5 left-1/2 transform -translate-x-1/2 justify-between w-screen max-w-lg h-fit items-end">-->
		<!--			<Fab class="bg-black/5 backdrop-blur sm:mb-16 mb-8" href="/" icon="faPlay" size="lg">Relax me</Fab>-->

		<!--			<Fab class="bg-black/5 backdrop-blur" href="/browse" icon="faSearch" size="lg">Show me<br />more-->
		<!--			</Fab>-->

		<!--			<Fab class="bg-black/5 backdrop-blur sm:mb-16 mb-8 "-->
		<!--					 href="{userEmail ? '/account/' : '/account/sign-in'}" icon="faUser" size="lg">-->
		<!--				{userEmail ? 'My account' : 'Sign me in'}-->
		<!--			</Fab>-->

		<!--		</div>-->
	</div>
</div>

<!--<div class="w-full flex flex-col items-center justify-between ">-->
<!--	<button class="opacity-40 pt-4 max-[460px]:pt-12" on:click={() => handleScrollForMoreClick()}>-->
<!--		<InfoChip design="text" icon="faAngleDown">Scroll for-->
<!--			more-->
<!--		</InfoChip>-->
<!--	</button>-->
<!--</div>-->

<div class="flex flex-col mt-32 gap-32">
	<DisplayLarge class="text-center">Featured artworks</DisplayLarge>
	<div bind:this={featuredItemsElement} class="contents">
		{#each data.featuredItems as item}
			{#if item.id}
				<HeroImage {item} hideYear imageFull></HeroImage>
			{/if}
		{/each}
	</div>
</div>
<!-- {#if itemList.length > 0}
	{#each itemList as item (item.id)}
		<HeroImage
			alt="#"
			author={item.artist}
			class="mt-12"
			year={item.year}
			displayName={item.title}
			src={item.src}
		></HeroImage>
	{/each}
{:else}

	<p>Loading...</p>
{/if} -->
