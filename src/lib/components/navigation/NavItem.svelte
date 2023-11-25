<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let textClass = '';
	let customClasses = '';
	export { customClasses as class };
	export let icon: string | undefined = undefined;
	export let active: boolean = false;
	export let href: string | undefined = undefined;

	let activeClasses: string;
	switch (active) {
		case true: {
			activeClasses = '';
			break;
		}
		case false: {
			activeClasses = 'opacity-60 hover:opacity-100 after:hidden';
			break;
		}
	}
</script>

<a
	{href}
	class="{customClasses} {activeClasses} px-3 py-2 flex-col justify-center items-center gap-1 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-white text-sm text-center relative w-fit space-y-0.5
        after:content-[''] after:h-16 after:w-16 after:rounded-full after:absolute after:bg-gradient-to-b from-white/20 to-white/40 after:duration-1000 after:ease-out after:-z-10 after:blur-lg
">
	<Icon {icon} size="xl"></Icon>
	<Body class="{textClass}">
	<slot />
	</Body>
</a>
