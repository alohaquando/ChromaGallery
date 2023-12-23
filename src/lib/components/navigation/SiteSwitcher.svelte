<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import LogoCurator from '$lib/components/logo/LogoCurator.svelte';
	import Button from '$lib/components/controls/Button.svelte';

	export let type: 'default' | 'curator' = 'default';
	let options = [
		{
			type: 'default',
			component: Logo,
			text: 'Gallery',
			href: ''
		},
		{
			type: 'curator',
			component: LogoCurator,
			text: 'Curator',
			href: ''
		}
	];

	let component = options.find(option => option.type == type)?.component;
	let text = options.find(option => option.type == type)?.text;
	let href = options.find(option => option.type == type)?.href;

	let customClass = '';
	export { customClass as class };
</script>

<div
	class="{customClass} w-full px-6 py-10 bg-neutral-700 bg-opacity-50 rounded-2xl backdrop-blur-lg flex-col justify-center items-center gap-6 inline-flex duration-300 ease-out">
	<svelte:component class="h-16" this={component} />
	<Button design="filled" {href} width="full">Go to Chroma {text}</Button>
</div>