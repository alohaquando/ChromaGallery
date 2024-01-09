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
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import {} from '$lib/stores/header';
	import { generateHeader, generateModal, generateNavbar, generateBackground } from '$lib/stores/pageLayout';
	import HeaderCurator from '$lib/components/navigation/HeaderCurator.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data: PageData;

	$: modal = $page.data.modal ? generateModal($page.data.modal) : generateModal();
	$: header = $page.data.header ? generateHeader($page.data.header) : generateHeader();
	$: navbar = $page.data.navbar ? generateNavbar($page.data.navbar) : generateNavbar();
	$: background = $page.data.background ? generateBackground($page.data.background) : generateBackground();
	onMount(() => {
		modal = $page.data.modal ? generateModal($page.data.modal) : generateModal();
	});

	let scrollY: number;

	// ******Set Default Account with Bookmark list ******

	// onMount(() => {
	// 	const bookmarkItem = auth.onAuthStateChanged(async (user) => {
	// 		if (!user) {
	// 			return;
	// 		}
	//
	// 		let dataToSetToStore: any;
	// 		const docRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
	// 		const docSnap = await getDoc(docRef);
	//
	// 		if (!docSnap.exists()) {
	// 			const userRef = doc(db, 'users', user.uid, 'lists', 'bookmark');
	// 			dataToSetToStore = {
	// 				email: user?.email,
	// 				title: 'Bookmarks',
	// 				items: []
	// 			};
	// 			await setDoc(userRef, dataToSetToStore, { merge: true });
	// 			// Set Default Account as notCurrator
	// 			await setDoc(doc(db, 'users', user.uid),
	// 				{
	// 					isCurrator:false,
	// 				}
	// 				, { merge: true });
	// 		} else {
	// 			const userData = docSnap.data();
	// 			dataToSetToStore = userData;
	// 		}
	// 		authStore.update((curr: any) => {
	// 			return {
	// 				...curr,
	// 				user,
	// 				data: dataToSetToStore,
	// 				loading: false
	// 			};
	// 		});
	// 	});
	// });
</script>


<svelte:head>
	<meta title="Chroma Gallery" />
	<meta content="#000000" name="theme-color" />

	<link href={faviconIco} rel="icon" sizes="32x32" />
	<link href={faviconSvg} rel="icon" type="image/svg+xml" />
	<link href={faviconApple} rel="apple-touch-icon" />
</svelte:head>
<svelte:window bind:scrollY />

{#if background.toggled}
	<BG
		class={modal.toggled === true ? 'h-[90vh]' : ''}
		design={background.design}
		hue={background.hue}
		lightness={background.lightness}
		randomized={background.randomized}
		saturation={background.saturation}
	/>
{/if}

{#if modal.toggled}
	<Modal
		button={modal.button}
		buttonFunction={modal.buttonFunction}
		exit={modal.exit}
		href={modal.href}
		title={modal.title}
	>
		<slot />
	</Modal>
{:else}
	{#if header.type === 'main'}
		<HeaderMain {scrollY}></HeaderMain>
	{:else if header.type === 'back'}
		<HeaderBack {scrollY} href={header.href} button={header.button} destructive={header.destructive}
		></HeaderBack>
	{:else if header.type === 'curator'}
		<HeaderCurator {scrollY} />
	{/if}
	<div class="container mx-auto px-6 lg:max-w-5xl">
		<slot />
		<Footer loggedIn={!data.session}></Footer>
	</div>
	<div class="h-32" />
	<NavBar class="fixed bottom-0 left-0 z-40" type={navbar.type} />
{/if}