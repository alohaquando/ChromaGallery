<script lang="ts">
	import Icon from '../iconography/Icon.svelte';
	import type { Item } from '../../../model';

	export let data: Item | undefined;
	export let bookmark: boolean = false;
	export let icon: boolean = false;

	export let link: boolean = true;
	let path = '';

	let iconSize = '';
	iconSize = !icon ? '6xl' : 'base';

	export let stretch: boolean = true;

	let sizeClass = '';
	switch (stretch) {
		case false:
			sizeClass = '';
			break;
		case true:
			sizeClass = 'grow shrink basis-0 self-stretch';
			break;
	}

	let typeClass = '';
	switch (bookmark) {
		case false:
			typeClass = '';
			break;
		case true:
			typeClass =
				'bg-gradient-to-b from-indigo-600 to-fuchsia-700  rounded-lg inline-flex justify-center items-center';
			break;
	}

	let customClass = '';
	export { customClass as class };
</script>

<svelte:element
	this={link ? 'a' : 'div'}
	class="{!icon
		? sizeClass
		: 'h-14 w-14'} {typeClass} {customClass} relative overflow-hidden w-full"
	href="../item/{data.id}"
>
	{#if bookmark}
		<Icon icon="faStar" type="solid" class="absolute" size={iconSize}></Icon>
		{#if !icon}
			<div class="absolute h-16 w-16 blur-xl bg-white rounded-full"></div>
		{/if}
	{:else}
		<img
			alt={data.title}
			class="{stretch ? 'w-full h-full' : 'h-auto w-full'} {icon ? 'absolute' : ''} object-cover"
			src={data.image}
		/>
	{/if}
</svelte:element>
