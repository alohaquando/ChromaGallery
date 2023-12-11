<script lang="ts">
	import '../app.postcss';
	import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
	import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
	import faviconIco from '$lib/assets/favicons/favicon.ico';
	import faviconSvg from '$lib/assets/favicons/icon.svg';
	import faviconApple from '$lib/assets/favicons/apple-touch-icon.png';
	import { getContext } from 'svelte';
	import { header, navbar, modal, background } from '$lib/stores/pageLayout';
	import { onMount } from 'svelte';
	import type { HeaderInfo, NavigationInfo, ModalInfo, BgInfo } from '../model';

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

<BG color={$background.color} design={$background.design} randomized={$background.randomized} />

{#if $header.type === 'main'}
	<HeaderMain {scrollY}></HeaderMain>
{:else if $header.type === 'back'}
	<HeaderBack button={$header.button} destructive={$header.destructive}></HeaderBack>
{/if}

{#if $modal.toggled === true}
	<Modal title={$modal.title} exit={$modal.exit} button={$modal.button} destructive={$modal.destructive}
				 transition={$modal.transition}>
		<slot />
	</Modal>
{:else}
	<div class="container mx-auto px-6">
		<slot />
		<Footer></Footer>
	</div>
{/if}

<div class="h-32" />

<NavBar class="fixed bottom-0 left-0 z-40" type={$navbar.type} />
