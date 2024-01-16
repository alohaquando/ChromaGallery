<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import { onMount } from 'svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let data;

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

	let allItems = data.allItems;
	let images = allItems.map((item) => item.image);

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

	setInterval(function () {
		nextImage();
	}, 3000);
</script>

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
	</div>
</div>

<div class="flex flex-col mt-32 gap-32">
	<DisplayLarge class="text-center">Featured artworks</DisplayLarge>
	<div class="contents">
		{#each data.featuredItems as item}
			{#if item.id}
				<HeroImage {item} hideYear imageFull></HeroImage>
			{/if}
		{/each}
	</div>
</div>
