<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let icon: string | undefined = undefined;
	export let width: 'fit' | 'full' = 'fit';
	export let design: 'filled' | 'text' = 'filled';
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

	let designClasses: string;
	switch (design) {
		case 'filled': {
			designClasses = 'bg-gray-900 rounded-lg';
			break;
		}
		case 'text': {
			designClasses = '';
			break;
		}
	}
</script>

<div
	class="{customClasses} {widthClasses} {designClasses} px-3 py-2 backdrop-blur-sm justify-center items-center gap-1.5 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-sm text-center leading-[14px]
	 text-white
"
>
	<Icon {icon} size="sm"></Icon>
	<BodySmall>
		<slot />
	</BodySmall>
</div>
