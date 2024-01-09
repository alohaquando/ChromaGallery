<!--suppress ALL -->
<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import LogoCurator from '$lib/components/logo/LogoCurator.svelte';
	import Button from '$lib/components/controls/Button.svelte';

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

	let component;
	let text: string;
	let href: string;

	$: switch (type) {
		case 'default':
			component = Logo;
			text = 'Gallery';
			href = '/';
			break;
		case 'curator':
			component = LogoCurator;
			text = 'Curator';
			href = '/';
			break;
	}

	let customClass = '';
	export { customClass as class };

	let animationClass = 'scale-y-0 absolute';
	$: animationClass = toggled ? 'scale-y-100 duration-500' : 'scale-y-0 absolute';
</script>

<div
	class="{customClass} {animationClass} w-full px-6 py-10 bg-neutral-700/70 rounded-2xl backdrop-blur-lg flex-col justify-center items-center gap-6 inline-flex duration-0 ease-out origin-top"
>
	<svelte:component class="h-16" this={component} />
	<Button design="filled" {href} width="full">Go to Chroma&nbsp<b>{text}</b></Button>
</div>
