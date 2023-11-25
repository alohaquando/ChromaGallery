<script lang="ts">
	import '../app.postcss';

	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';

	let scrollY: number;
</script>

<svelte:head>
	<meta title="Chroma Gallery"/>
	<meta name="theme-color" content="#000000" >
</svelte:head>
<svelte:window bind:scrollY={scrollY} />

<HeaderMain {scrollY}></HeaderMain>
<div class="container mx-auto px-6">
	<slot />
</div>

<div class="h-32"/>

<NavBar class="fixed bottom-0 left-0 z-50"/>
