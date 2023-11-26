<script lang="ts">
	import Icon from '../iconography/Icon.svelte';

	export let size: 'small' | 'fit' = 'fit';
	export let iconSize = '';
	iconSize = (size === 'small' ? 'base' : '6xl');
	export let type: 'placeholder' | 'bookmark' = 'placeholder';
	let sizeClass = '';
	switch (size) {
		case 'small':
			sizeClass = 'w-14 h-14';
			break;
		case 'fit':
			sizeClass = 'grow shrink basis-0 self-stretch';
	}
	let typeClass = '';
	switch (type) {
		case 'placeholder':
			typeClass = 'bg-white/70';
			break;
		case 'bookmark':
			typeClass = 'bg-gradient-to-b from-indigo-600 to-fuchsia-700  rounded-lg';
			break;
	}
	let altImg: string;
	export { altImg as alt };
	let imgSrc: string;
	export { imgSrc as src };
</script>

<div
	class="{sizeClass} {typeClass} justify-center items-center inline-flex relative overflow-hidden">
	{#if type === 'placeholder'}
		<img
			alt="{altImg}"
			class="grow shrink basis-0 self-stretch flex"
			src="{imgSrc}"
		/>
	{/if}
	{#if type === 'bookmark'}
		<Icon icon="faStar" type="solid" class="absolute" size="{iconSize}"></Icon>
		{#if size === 'fit'}
			<div
				class="absolute h-16 w-16 blur-xl bg-white rounded-full">
			</div>
		{/if}
	{/if}
</div>