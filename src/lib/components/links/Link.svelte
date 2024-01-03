<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import Display from '$lib/components/typography/Display.svelte';

	let customClasses = '';
	export { customClasses as class };
	export let href: string | undefined = undefined;
	export let disabled: boolean = !href;
	let disableClass = disabled ? 'cursor-pointer' : 'cursor-default';
	export let type: 'body' | 'title' | 'headline' | 'display' = 'body';
	export let linkColor = 'from-white to-white';
	export let design: 'default' | 'destructive' = 'default';
	$: switch (design) {
		case 'default':
			break;
		case 'destructive':
			linkColor = 'from-red-500 to-red-300';
			break;
	}

	let componentOptions = [
		{
			type: 'body',
			component: Body,
			class: 'bg-[length:0_1.5px]',
			static: 'bg-[length:100%_1.5px]',
			hover: 'hover:bg-[length:100%_1.5px]'
		},
		{
			type: 'title',
			component: Title,
			class: 'bg-[length:0_1.5px]',
			static: 'bg-[length:100%_1.5px]',
			hover: 'hover:bg-[length:100%_1.5px]'
		},
		{
			type: 'headline',
			component: Headline,
			class: 'bg-[length:0_3px]',
			static: 'bg-[length:100%_3px]',
			hover: 'hover:bg-[length:100%_3px]'
		},
		{
			type: 'display',
			component: Display,
			class: 'bg-[length:0_4px]',
			static: 'bg-[length:100%_4px]',
			hover: 'hover:bg-[length:100%_4px]'
		}
	];

	let component = componentOptions.find((option) => option.type == type)?.component;
	let underlineClass = componentOptions.find((option) => option.type == type)?.class;
	let staticClass = componentOptions.find((option) => option.type == type)?.static;
	let hoverClass = componentOptions.find((option) => option.type == type)?.hover;

	export let isHovered: boolean | undefined;
</script>

<a class="{customClasses} {disableClass} relative max-w-fit cursor-pointer trim-both" {href}>
	<svelte:component
		class="{underlineClass} {isHovered? staticClass : hoverClass} bg-no-repeat bg-left-bottom duration-500 inline bg-gradient-to-r {linkColor}"
		this={component}>
		<slot />
	</svelte:component>
</a>
