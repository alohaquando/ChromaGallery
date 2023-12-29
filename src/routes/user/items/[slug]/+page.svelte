<script lang="ts">
    import HeroImage from '$lib/components/item/HeroImage.svelte';
    import InfoRow from '$lib/components/item/InfoRow.svelte';
    import Fab from '$lib/components/controls/Fab.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import { auth, db } from '$lib/services/firebase/firebase';
    import { arrayUnion, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
    import { checkIfBookmarked, handleBookmark } from '$lib/data/item';
    import type { PageData } from './$types';
	import { onMount } from 'svelte';

    /** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
    export let data: PageData;

    let item = data.item;
    console.log(data.slug)
    onMount(async () => {
        checkIfBookmarked(data.slug)
    })
</script>

<HeroImage imageFull {item}></HeroImage>

<div class="flex justify-between items-end mb-12">
    <div class="flex space-x-2">
        <Button href="/user/items/${item.id}/add-to-list" icon="faPlus" type="submit"
        >Add to list
        </Button
        >
        <Button icon="faVolume" type="submit">Audio guide</Button>
    </div>
    <Fab icon="faStar" on:click={() => handleBookmark(data.slug)} toggled></Fab>
</div>

<BodyLarge>
    {item.description}
</BodyLarge>

<div class="mt-8">
    <InfoRow href="#" leadingText="Object ID" trailingText={item.id} />
    <InfoRow href="#" leadingText="Place made" trailingText={item.location} />
    <!--	<ListItem href="/" leadingText="Named collection" trailingText="Harold E. Edgerton Collection" />-->
</div>

<div class="mt-12 gap-y-8 flex flex-col">
    <BodyLarge class="mt-12">Related</BodyLarge>

    <HeroImage {item}></HeroImage>

    <HeroImage {item}></HeroImage>
</div>
