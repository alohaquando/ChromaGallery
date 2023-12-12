<script lang="ts">
    import '../app.postcss';
    import HeaderMain from '$lib/components/navigation/HeaderMain.svelte';
    import HeaderBack from '$lib/components/navigation/HeaderBack.svelte';
    import NavBar from '$lib/components/navigation/NavBar.svelte';
    import Footer from '$lib/components/navigation/Footer.svelte';
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Dialog from '$lib/components/pop-up/Dialog.svelte';
    import BG from '$lib/components/backgrounds/BG.svelte';
    import faviconIco from '$lib/assets/favicons/favicon.ico';
    import faviconSvg from '$lib/assets/favicons/icon.svg';
    import faviconApple from '$lib/assets/favicons/apple-touch-icon.png';
    import { defaultLayout, generateModal, stateCheck } from '$lib/stores/pageLayout';
    import { onMount } from 'svelte';
    import { auth, db } from '$lib/services/firebase/firebase';
    import { doc, getDoc, setDoc } from 'firebase/firestore';
    import { authStore } from '$lib/stores/store';
    import { itemStore } from '$lib/stores/itemStore';
    import { header } from '$lib/stores/header';
    import { navbar } from '$lib/stores/navbar';
    import { modalData } from '$lib/stores/modal';
    import type { modal } from '$lib/stores/modal';
    import { background } from '$lib/stores/background';
    import { dialog } from '$lib/stores/dialog';
    import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';

    let scrollY: number;

    // ******Bookmark******
    onMount(() => {
        const bookmarkItem = auth.onAuthStateChanged(async (user) => {
            if (!user) {
                return;
            }
            let dataToSetToStore: any;
            const docRef = doc(db, 'users', user.uid, 'lists', 'NVdWTuqsEWR0CdJIsJ7R');
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                const userRef = doc(db, 'users', user.uid, 'lists', 'NVdWTuqsEWR0CdJIsJ7R');
                dataToSetToStore = {
                    email: user?.email,
                    items: []
                };
                await setDoc(userRef, dataToSetToStore, { merge: true });
            } else {
                const userData = docSnap.data();
                dataToSetToStore = userData;
            }
            authStore.update((curr: any) => {
                return {
                    ...curr,
                    user,
                    data: dataToSetToStore,
                    loading: false
                };
            });
        });
    });

    beforeNavigate(() => {
        console.log($modalData.modalPage);
    });

    afterNavigate(() => {
        console.log($modalData.modalPage);
        defaultLayout();
        stateCheck();
    });

</script>

<svelte:head>
    <meta title="Chroma Gallery" />
    <meta content="#000000" name="theme-color" />

    <link href={faviconIco} rel="icon" sizes="32x32">
    <link href={faviconSvg} rel="icon" type="image/svg+xml">
    <link href={faviconApple} rel="apple-touch-icon">
</svelte:head>
<svelte:window bind:scrollY />

<BG class="{$modalData.modalPage === true? 'h-[90vh]' : ''}" color={$background.color} design={$background.design}
    randomized={$background.randomized} />

{#if $modalData.modalPage === true}
    <Modal title={$modalData.title} href={$modalData.href} exit={$modalData.exit}
           button={$modalData.button}
           buttonFunction={$modalData.buttonFunction}
    >
        <slot />
    </Modal>
{:else}
    {#if $header.type === 'main'}
        <HeaderMain {scrollY}></HeaderMain>
    {:else if $header.type === 'back'}
        <HeaderBack button={$header.button} destructive={$header.destructive}></HeaderBack>
    {/if}
    <div class="container mx-auto px-6">
        <slot />
        <Footer></Footer>
    </div>
    <div class="h-32" />
    <NavBar class="fixed bottom-0 left-0 z-40" type={$navbar.type} />
{/if}