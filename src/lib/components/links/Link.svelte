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
			class: 'bg-[length:_0_1.5px]',
			hoverClass: 'bg-[length:_100%_1.5px]'
		},
		{
			type: 'title',
			component: Title,
			class: 'bg-[length:_0_1.5px]',
			hoverClass: 'bg-[length:_100%_1.5px]'
		},
		{
			type: 'headline',
			component: Headline,
			class: 'bg-[length:_0_3px]',
			hoverClass: 'bg-[length:_100%_1.5px]'
		},
		{
			type: 'display',
			component: Display,
			class: 'bg-[length:_0_4px]',
			hoverClass: 'bg-[length:_100%_1.5px]'
		}
	];

	let component = componentOptions.find((option) => option.type == type)?.component;
	let underlineClass = componentOptions.find((option) => option.type == type)?.class;
	let animateClass = componentOptions.find((option) => option.type == type)?.hoverClass;

	export let isHovered: boolean | undefined;
	let hoverClass: string | undefined = '';
	$: isHovered, hoverClass = isHovered ? animateClass : 'hover:' + animateClass;

</script>

<a class="{customClasses} {disableClass} relative max-w-fit cursor-pointer trim-both" {href}>
	<svelte:component
		class="{underlineClass} {hoverClass} bg-no-repeat bg-left-bottom duration-500 inline bg-gradient-to-r {linkColor}"
		this={component}>
		<slot />
	</svelte:component>
</a>
