<script lang="ts">
	import Block from '$lib/components/block/Block.svelte';
	import Checkbox from '$lib/components/controls/Checkbox.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	let animation = '';
	export let type: 'checkbox' | 'edit' | 'view' = 'checkbox';
	switch (type) {
		case 'checkbox':
			break;
		case 'edit':
			animation = 'animate-flyRight40';
			break;
		case 'view':
			break;
	}

	let imgAlt: string;
	export { imgAlt as alt };
	let imgSrc = '';
	export { imgSrc as src };
	let customClass = '';
	export { customClass as class };
	export let id: string;
	export let name: string;
	export let value: string;
	export let checked: boolean = false;
	export let title: string = 'Title';
	export let subtitle: string = 'Subtitle';
</script>

<div class="{customClass} w-full h-auto flex items-center gap-4 overflow-hidden">
	{#if type === 'edit'}
		<Fab icon="faMinus" size="mini" hover={false} class="{animation} shrink-0 text-red-500 !border-red-500"></Fab>
	{/if}
	<Block alt="{imgAlt}" class="{animation} rounded-lg shrink-0 !h-16 !w-16" icon src="{imgSrc}"></Block>
	<div class="{animation} w-full gap-y-3 flex flex-col">
		<Body>{title}</Body>
		<Body class="opacity-50">{subtitle}</Body>
	</div>
	{#if type === 'checkbox'}
		<Checkbox {checked} class="shrink-0" {id} {name} {value}></Checkbox>
	{:else if type === 'edit'}
		<Icon icon="faEquals" class="shrink-0 w-6 h-6" />
	{/if}
</div>