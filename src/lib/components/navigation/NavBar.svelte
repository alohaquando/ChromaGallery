<script lang="ts">
    // noinspection ES6UnusedImports
    import NavItem from '$lib/components/navigation/NavItem.svelte';

    export let type: 'user' | 'admin' = 'user';

    let customClasses = '';
    export { customClasses as class };
</script>

<div
        class="h-16 w-full justify-center items-center inline-flex duration-500 ease-in-out {customClasses}"
>
    {#if type === 'user'}
        <div class="container mx-auto px-6 space-x-6 flex justify-center">
            <NavItem icon="faHome" href="/">Home</NavItem>
            <NavItem icon="faSearch" href="/">Browse</NavItem>
            <NavItem icon="faUserCircle" href="/">Me</NavItem>
        </div>
    {:else}
        <div class="container mx-auto px-6 space-x-6 flex justify-center">
            <NavItem icon="faImage" href="/">Items</NavItem>
            <NavItem icon="faRectangleHistory" href="/">Collections</NavItem>
        </div>
    {/if}
    <div
            class="pointer-events-none absolute -bottom-1 -top-20 left-0 right-0 -z-20 touch-none transition-all"
    >
        <div
                class="'opacity-100' blur-fix absolute h-full w-full backdrop-blur-lg [mask-image:linear-gradient(to_top,black,black,transparent)]"
        />
    </div>
</div>
