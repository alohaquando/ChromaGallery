<script lang="ts">
	import Icon from '../iconography/Icon.svelte';

	export let bookmark: boolean = false;
	export let icon: boolean = false;
	let iconSize = '';
	iconSize = (!icon ? '6xl' : 'base');
	let stretchClass = 'grow shrink basis-0 self-stretch';
	let typeClass = '';
	switch (bookmark) {
		case false:
			typeClass = '';
			break;
		case true:
			typeClass = 'bg-gradient-to-b from-indigo-600 to-fuchsia-700  rounded-lg';
			break;
	}
	let altImg: string;
	export { altImg as alt };
	let imgSrc = '';
	export { imgSrc as src };
	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{!icon ? stretchClass : 'h-14 w-14'} {typeClass} {customClass} justify-center items-center inline-flex relative overflow-hidden">
	{#if bookmark}
		<Icon icon="faStar" type="solid" class="absolute" size="{iconSize}"></Icon>
		{#if !icon}
			<div
				class="absolute h-16 w-16 blur-xl bg-white rounded-full">
			</div>
		{/if}
	{:else}
		<img
			alt={altImg}
			class="h-full w-full object-contain absolute ring"
			src="{imgSrc}" />
	{/if}
</div>