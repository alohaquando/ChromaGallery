<script lang="ts">
    import Headline from '$lib/components/typography/Headline.svelte';
    import Link from '$lib/components/links/Link.svelte';
    import Block from '$lib/components/item/Block.svelte';
    import type { Item } from '$lib/data/dataModels';

    export let imageFull: boolean = false;
    let heightClass = 'h-80';
    if (imageFull) {
        heightClass = 'h-auto';
    }
    export let hideYear: boolean = false;
    export let item: Item;
    export let hideInfo: boolean = false;
    let customClass = '';
    export { customClass as class };

    export let curator: boolean = false;
    let path = (curator ? '/curator' : '/user') + '/items/' + item?.id;
</script>

{#if item}
    <div class="w-full flex-col gap-6 inline-flex {customClass}">
        <div class="w-full {heightClass} rounded-lg flex overflow-hidden relative items-center">
            <Block class="object-cover rounded-lg" {item} stretch={false}></Block>
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
{/if}