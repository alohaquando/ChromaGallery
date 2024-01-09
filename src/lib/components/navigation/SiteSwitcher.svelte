<!--suppress ALL -->
<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import LogoCurator from '$lib/components/logo/LogoCurator.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { fade } from 'svelte/transition';

	export let type: 'default' | 'curator' = 'default';
	export let toggled: boolean | undefined;
	// let options = [
	// 	{
	// 		type: 'default',
	// 		component: Logo,
	// 		text: 'Gallery',
	// 		href: '/'
	// 	},
	// 	{
	// 		type: 'curator',
	// 		component: LogoCurator,
	// 		text: 'Curator',
	// 		href: ''
	// 	}
	// ];
	//
	// let component = options.find(option => option.type == type)?.component;
	// let text = options.find(option => option.type == type)?.text;
	// let href = options.find(option => option.type == type)?.href;

	let component: unknown;
	let text: string;
	let href: string;
	let logoClasses = '';

	$: switch (type) {
		case 'default':
			component = Logo;
			text = 'Gallery';
			href = '/';
			logoClasses = 'w-full px-16 py-4 max-w-sm';
			break;
		case 'curator':
			component = LogoCurator;
			text = 'Curator';
			href = '/curator/items';
			logoClasses = 'w-full px-8 py-6 max-w-lg';
			break;
	}

	let customClass = '';
	export { customClass as class };

	// let animationClass = 'scale-y-0 absolute';
	// $: animationClass = toggled ? 'scale-y-100 duration-500' : 'scale-y-0 absolute';
</script>

{#if toggled}
	<div
		transition:fade={{ duration: 100 }}
		class="{customClass} w-full px-6 py-10 bg-white/10 ring-1 ring-white/30 rounded-2xl backdrop-blur-lg flex items-center justify-center"
	>
		<div class="flex origin-top flex-col items-center justify-center gap-6 w-full  duration-0">
			<svelte:component class={logoClasses} this={component} />
			<Button design="filled" {href} width="full">Go to Chroma&nbsp<b>{text}</b></Button>
		</div>
	</div>
{/if}

