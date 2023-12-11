<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import Display from '$lib/components/typography/Display.svelte';

	let customClasses = '';
	export { customClasses as class };
	export let href: string | undefined = undefined;
	export let type: 'body' | 'title' | 'headline' | 'display' = 'body';
	export let linkColor = 'from-white to-white';
	let componentOptions = [
		{
			type: 'body',
			component: Body,
			class: 'bg-link-sm'
		},
		{
			type: 'title',
			component: Title,
			class: 'bg-link-sm'
		},
		{
			type: 'headline',
			component: Headline,
			class: 'bg-link-md'
		},
		{
			type: 'display',
			component: Display,
			class: 'bg-link-lg'
		}
	];

	let component = componentOptions.find((option) => option.type == type)?.component;
	let typeClass = componentOptions.find((option) => option.type == type)?.class;
</script>

<a class="{customClasses} relative max-w-fit cursor-pointer trim-both" {href}>
	<svelte:component
		class="{typeClass} inline bg-gradient-to-r {linkColor}"
		this={component}
	>
		<slot />
	</svelte:component>
</a>
