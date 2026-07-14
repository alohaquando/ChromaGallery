<script lang="ts">
	import NavItem from '$lib/components/navigation/NavItem.svelte';
	import HomeIcon from '$lib/assets/svgs/HomeIcon.svelte';
	import BrowseIcon from '$lib/assets/svgs/BrowseIcon.svelte';
	import { page } from '$app/stores';

	export let type: 'user' | 'curator' = 'user';

	let currentUrl: string;
	$: currentUrl = $page.url.pathname;

	let customClasses = '';
	export { customClasses as class };
</script>

<div
	class="h-16 w-full justify-center items-center inline-flex duration-500 ease-in-out {customClasses}"
>
	{#if type === 'user'}
		<div class="container mx-auto px-6 space-x-6 flex justify-center">
			<NavItem iconComponent={HomeIcon} href="/" active={currentUrl === '/'}>Home</NavItem>
			<NavItem iconComponent={BrowseIcon} href="/browse" active={currentUrl.startsWith('/browse')}
				>Browse</NavItem
			>
			<NavItem icon="faUserCircle" href="/account" active={currentUrl.startsWith('/account')}
				>Me</NavItem
			>
		</div>
	{:else if type === 'curator'}
		<div class="container mx-auto px-6 space-x-6 flex justify-center">
			<NavItem icon="faImage" href="/curator/items" active={currentUrl.startsWith('/curator/items')}
				>Items</NavItem
			>
			<NavItem
				icon="faLayerGroup"
				href="/curator/collection"
				active={currentUrl.startsWith('/curator/collection')}
			>
				Collections
			</NavItem>
			<NavItem
				icon="faUserCircle"
				href="/curator/account"
				active={currentUrl.startsWith('/curator/account')}>Me</NavItem
			>
		</div>
	{/if}

	<div
		class="block sm:hidden bg-black/20 backdrop-blur-md pointer-events-none absolute -inset-y-2 rounded-full mx-auto inset-x-10 -z-20 touch-none transition-all border border-white/20"
	></div>

	<div
		class="hidden sm:block pointer-events-none absolute -bottom-1 -top-20 left-0 right-0 -z-20 touch-none transition-all"
	>
		<div
			class="opacity-100 blur-fix absolute h-full w-full backdrop-blur-md [mask-image:linear-gradient(to_top,black,black,transparent)]"
		/>
	</div>
</div>
