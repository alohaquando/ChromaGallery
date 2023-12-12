<script lang="ts">
    import HeroImage from '$lib/components/item/HeroImage.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';

    import { item2 } from '../../../../data';
</script>

<HeroImage class="mb-8" data={item2}></HeroImage>
<BodyLarge>
    This ball sports a distinctive stripe pattern that results from an innovative manufacturing process. Plastic of two
    colours is blown into a mould using a method that prevents the colours from mixing. The ball is a by-product of a
    demonstration of the extrusion blow-mould machine invented by the Hong Kong engineer Chiang Chen. The development of
    the two-colour production technique is often attributed to Chiang as well. This process was inspired by his
    recollection of the confluence of the Yangtze River and its tributary, the Jialing, in mainland China: one was muddy
    and the other clear, but the two currents remained distinct rather than blending together. Despite the success of
    his
    manufacturing method, Chiang was never able to file a patent for it, and it was soon widely imitated to create other
    types of products.
</BodyLarge>
<div class="flex flex-col justify-center items-center mt-10">
    <ListItem class="w-full" leadingText="Object ID" trailingText={item2.id}></ListItem>
    <ListItem class="w-full" leadingText="Place made" trailingText={item2.location}></ListItem>
    <ListItem class="w-full" leadingText="Named collection" trailingText={item2.name}></ListItem>
</div>