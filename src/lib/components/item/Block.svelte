<script lang="ts">
    import Icon from '../iconography/Icon.svelte';
    import type { Item } from '$lib/data/dataModels';

    export let item: Item | null | undefined;
    export let bookmark: boolean = false;
    export let icon: boolean = false;
    export let link: boolean = true;
    if (!item) {
        link = false;
    }
    export let curator: boolean = false;
    let path = (curator ? '/curator' : '/user') + '/items/' + item?.id;

    let iconSize = '';
    iconSize = !icon ? '6xl' : 'base';

    export let stretch: boolean = true;

    let sizeClass = '';
    switch (stretch) {
        case false:
            sizeClass = 'w-full';
            break;
        case true:
            sizeClass = 'grow shrink basis-0 self-stretch w-full';
            break;
    }

    let typeClass = '';
    $: switch (bookmark) {
        case false:
            typeClass = 'bg-gradient-to-b from-neutral-600 to-neutral-800';
            break;
        case true:
            typeClass =
                'bg-gradient-to-b from-indigo-600 to-fuchsia-700 rounded-lg inline-flex justify-center items-center';
            break;
    }

    let customClass = '';
    export { customClass as class };
</script>

<svelte:element
        class="{!icon
		? sizeClass
		: 'h-14 w-14'} {typeClass} {customClass} relative overflow-hidden"
        href={item ? path : null}
        this={link ? 'a' : 'div'}
>

    {#if bookmark}
        <Icon icon="faStar" type="solid" class="absolute" size={iconSize}></Icon>
        {#if !icon}
            <div class="absolute h-16 w-16 blur-xl bg-white rounded-full"></div>
        {/if}
    {:else }
        {#if item}
            <img
                    alt={item.title}
                    class="{stretch ? 'w-full h-full' : 'h-auto w-full'} {icon ? 'absolute' : ''} object-cover"
                    src={item.image}
            />
        {/if}
    {/if}
</svelte:element>