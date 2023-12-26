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
	import { header } from '$lib/stores/header';
	import { navbar } from '$lib/stores/navbar';
	import { background } from '$lib/stores/background';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { generateModal } from '$lib/stores/modal';
	import type { PageData } from '../../.svelte-kit/types/src/routes/$types';

	/** @type {import('./$types').LayoutData} */
	export let data: PageData;

	$: modal = $page.data.modal ? generateModal($page.data.modal) : generateModal();
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

<BG
	class={modal.toggled === true ? 'h-[90vh]' : ''}
	color={$background.color}
	design={$background.design}
	randomized={$background.randomized}
/>

{#if modal.toggled}
	<Modal
		button={modal.button}
		buttonFunction={modal.buttonFunction}
		exit={modal.exit}
		href={modal.href}
		title={modal.title}
		animation={modal.animation}
	>
		<slot />
	</Modal>
{:else}
	{#if $header.type === 'main'}
		<HeaderMain {scrollY}></HeaderMain>
	{:else if $header.type === 'back'}
		<HeaderBack href={$header.href} button={$header.button} destructive={$header.destructive}
		></HeaderBack>
	{/if}
	<div class="container mx-auto px-6 max-w-3xl">
		<slot />
		<Footer></Footer>
	</div>
	<div class="h-32" />
	<NavBar class="fixed bottom-0 left-0 z-40" type={$navbar.type} />
{/if}
