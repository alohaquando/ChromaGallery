<script lang="ts">
	import NavItem from '$lib/components/navigation/NavItem.svelte';
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
			<NavItem icon="faHome" href="/" active={currentUrl === '/'}>Home</NavItem>
			<NavItem icon="faSearch" href="/browse" active={currentUrl.startsWith('/browse')}>Browse</NavItem>
			<NavItem icon="faUserCircle" href="/account" active={currentUrl.startsWith('/account')}>Me</NavItem>
		</div>
	{:else if type === 'curator'}
		<div class="container mx-auto px-6 space-x-6 flex justify-center">
			<NavItem icon="faImage" href="/curator/items" active={currentUrl.startsWith('/curator/items')}>Items</NavItem>
			<NavItem icon="faRectangleHistory" href="/curator/collection"
							 active={currentUrl.startsWith('/curator/collection')}>
				Collections
			</NavItem>
			<NavItem icon="faUserCircle" href="/curator/account" active="{currentUrl.startsWith('/curator/account')}">Me</NavItem>
		</div>
	{/if}
	<div
		class="pointer-events-none absolute -bottom-1 -top-20 left-0 right-0 -z-20 touch-none transition-all"
	>
		<div
			class="'opacity-100' blur-fix absolute h-full w-full backdrop-blur-md [mask-image:linear-gradient(to_top,black,black,transparent)]"
		/>
	</div>
</div>
