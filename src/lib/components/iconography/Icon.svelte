<script>
	import Fa from 'svelte-fa';
	export let icon;
	export let iconType = 'regular';
	import * as solidModule from '@fortawesome/pro-solid-svg-icons';
	import * as regularModule from '@fortawesome/pro-regular-svg-icons';
	if (iconType === 'solid') {
		icon = solidModule[icon];
	} else if (iconType === 'regular') {
		icon = regularModule[icon];
	}
	export let iconSize = 'base';
</script>

<Fa {icon} class="text-{iconSize}" />

