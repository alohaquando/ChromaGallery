<script lang="ts">
	import '../app.postcss';
	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import faviconIco from '$lib/assets/favicons/favicon.ico';
	import faviconSvg from '$lib/assets/favicons/icon.svg';
	import faviconApple from '$lib/assets/favicons/apple-touch-icon.png';
	import { getContext } from 'svelte';
	import { header, navbar } from '$lib/stores/store';
	import { onMount } from 'svelte';
	import type { Header, Navigation } from '../model';

	let headerInfo: Header;
	let navbarInfo: Navigation;

	const unsubscribeHeader = header.subscribe(value => {
		headerInfo = value;
	});

	const unsubscribeNavigation = navbar.subscribe(value => {
		navbarInfo = value;
	});

	let scrollY: number;
</script>

<svelte:head>
	<meta title="Chroma Gallery" />
	<meta content="#000000" name="theme-color" />

	<link href={faviconIco} rel="icon" sizes="32x32">
	<link href={faviconSvg} rel="icon" type="image/svg+xml">
	<link href={faviconApple} rel="apple-touch-icon">
</svelte:head>
<svelte:window bind:scrollY />

{#if headerInfo.type === 'main'}
	<HeaderMain {scrollY}></HeaderMain>
{:else if headerInfo.type === 'back'}
	<HeaderBack button={headerInfo.button} destructive={headerInfo.destructive}></HeaderBack>
{/if}
<div class="container mx-auto px-6">
	<slot />
	<Footer></Footer>
</div>

<div class="h-32" />

<NavBar class="fixed bottom-0 left-0 z-40" type={navbarInfo.type} />
