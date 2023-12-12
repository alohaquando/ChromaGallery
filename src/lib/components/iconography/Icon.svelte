<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	// noinspection ES6UnusedImports
	import Fa from 'svelte-fa';
	import * as solidModule from '@fortawesome/pro-solid-svg-icons';
	import * as regularModule from '@fortawesome/pro-regular-svg-icons';
	import * as brandModule from '@fortawesome/free-brands-svg-icons';

	export let icon: string | undefined | null = undefined;
	export let type: 'regular' | 'solid' | 'brands' = 'regular';
	export let size = 'base';
	let customClasses = '';
	export { customClasses as class };

	$:switch (type) {
		case 'solid':
			icon = solidModule[icon as keyof unknown];
			break;
		case 'regular':
			icon = regularModule[icon as keyof unknown];
			break;
		case 'brands':
			icon = brandModule[icon as keyof unknown];
			break;
	}
</script>

{#if icon}
	<Fa class="text-{size} {customClasses}" {icon} />
{/if}
