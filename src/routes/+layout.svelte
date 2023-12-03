<script lang="ts">
	import '../app.postcss';

	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';

	import faviconIco from '$lib/assets/favicons/favicon.ico'
	import faviconSvg from '$lib/assets/favicons/icon.svg'
	import faviconApple from '$lib/assets/favicons/apple-touch-icon.png'

	let scrollY: number;
</script>

<svelte:head>
	<meta title="Chroma Gallery" />
	<meta content="#000000" name="theme-color" />

	<link rel="icon" href={faviconIco} sizes="32x32">
	<link rel="icon" href={faviconSvg} type="image/svg+xml">
	<link rel="apple-touch-icon" href={faviconApple}>
</svelte:head>
<svelte:window bind:scrollY />

<HeaderMain {scrollY}></HeaderMain>
<div class="container mx-auto px-6">
	<slot />
	<Footer></Footer>
</div>

<div class="h-32" />

<NavBar class="fixed bottom-0 left-0 z-40" />
