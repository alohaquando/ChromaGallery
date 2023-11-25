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

	let typeClasses: string;
	switch (type) {
		case 'body': {
			typeClasses = 'before:translate-y-2.5 before:h-0.5';
			break;
		}
		case 'title': {
			typeClasses = 'before:translate-y-3 before:h-0.5';
			break;
		}
		case 'headline': {
			typeClasses = 'before:translate-y-5 before:h-1';
			break;
		}
		case 'display': {
			typeClasses = 'before:translate-y-7 before:h-1';
			break;
		}
	}
</script>

<a
	class="{typeClasses} {customClasses} relative max-w-fit flex items-center
    before:absolute before:w-full before:rounded-sm before:bg-white before:left-0 before:origin-right before:scale-x-0 before:ease-in-out before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
	{href}
>
	<span>
		{#if type === "body"}
			<Body>
			<slot />
			</Body>
			{:else if type === 'title'}
			<Title>
			<slot />
			</Title>
			{:else if type === 'headline'}
			<Headline>
			<slot />
			</Headline>
			{:else if type === 'display'}
			<Display>
			<slot />
			</Display>
			{/if}
	</span>
</a>
