<script lang="ts">
    import Headline from '$lib/components/typography/Headline.svelte';
    import Link from '$lib/components/links/Link.svelte';
    import Block from '$lib/components/item/Block.svelte';
    import type { Item } from '$lib/data/dataModels';
    import ImageView from '$lib/components/item/ImageView.svelte';
    import { toggleImageFullView } from '$lib/stores/imageFullView';

    export let enableFSV: boolean = false;
    export let imageFull: boolean = false;
    let heightClass = '';
    if (imageFull) {
        heightClass = ' w-auto';
    }
    export let hideYear: boolean = false;
    export let item: Item;
    export let hideInfo: boolean = false;
    let customClass = '';
    export { customClass as class };

    export let curator: boolean = false;
    let path = (curator ? '/curator' : '') + '/items/' + item?.id;
</script>

<div class="w-full flex-col gap-6 inline-flex {customClass}">
    <div class="w-full {heightClass} rounded-lg flex relative justify-center items-center ">
        <Block bgTransparent display="full" {item} link={!enableFSV} on:click={toggleImageFullView} stretch={false} />
    </div>
    {#if !hideInfo}
        <div class="flex-col gap-6 flex">
            <Link href="{path}" type="headline">
                {item.title}
            </Link>
            <Headline>{item.author}</Headline>
            {#if !hideYear}
                <Headline class="!text-white/50">
                    {item.year}
                </Headline>
            {/if}
        </div>
    {/if}
</div>

{#if (enableFSV)}
    <ImageView src="{item.image}" alt="{item.title}" />
{/if}