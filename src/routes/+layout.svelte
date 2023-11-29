<script lang="ts">
	import '../app.postcss';

	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';

	let scrollY: number;
</script>

<svelte:head>
	<meta title="Chroma Gallery" />
	<meta content="#000000" name="theme-color" />
</svelte:head>
<svelte:window bind:scrollY />

<HeaderMain {scrollY}></HeaderMain>
<div class="container mx-auto px-6">
	<slot />
	<Footer></Footer>
</div>

<div class="h-32" />

<NavBar class="fixed bottom-0 left-0 z-40" />
