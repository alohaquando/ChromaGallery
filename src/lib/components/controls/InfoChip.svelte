<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let icon: string | undefined = undefined;
	export let width: 'fit' | 'full' = 'fit';
	let textClass = '';
	let customClasses = '';
	export { customClasses as class };

	let widthClasses: string;
	switch (width) {
		case 'fit': {
			widthClasses = 'w-fit';
			break;
		}
		case 'full': {
			widthClasses = 'w-full';
			break;
		}
	}
</script>

<div
	class="{customClasses} {widthClasses} px-3 py-2  backdrop-blur-sm justify-center items-center gap-1.5 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-sm text-center leading-[14px]

	bg-gray-900 rounded-lg text-white
">
	<Icon {icon} size="sm"></Icon>
	<BodySmall class="{textClass}">
		<slot />
	</BodySmall>
</div>
