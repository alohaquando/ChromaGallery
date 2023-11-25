<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	let customClasses = '';
	export { customClasses as class };
	export let href: string | undefined = undefined;
	export let type: 'body' | 'title' | 'headline' | 'display' = 'body';

	let typeClasses: string;
	switch (type) {
		case 'body': {
			typeClasses = 'before:-bottom-0.5 before:h-0.5';
			break;
		}
		case 'title': {
			typeClasses = 'before:-bottom-0.5 before:h-0.5';
			break;
		}
		case 'headline': {
			typeClasses = 'before:-bottom-1 before:h-1';
			break;
		}
		case 'display': {
			typeClasses = 'before:-bottom-1.5 before:h-1';
			break;
		}
	}
</script>

<a
	class="{typeClasses} {customClasses} relative max-w-fit  before:content-['']
    before:absolute before:w-full before:rounded-sm before:bg-white before:left-0 before:origin-right before:scale-x-0 before:ease-in-out before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
	{href}
>
	<span>
		{#if type === "body"}
			<span class="font-display trim-both text-base">
			<slot />
			</span>
			{:else if type === 'title'}
			<span class="font-display trim-both text-2xl">
			<slot />
			</span>
			{:else if type === 'headline'}
			<span class="font-display trim-both text-3xl">
			<slot />
			</span>
			{:else if type === 'display'}
			<span class="font-display trim-both text-5xl">
			<slot />
			</span>
			{/if}
	</span>
</a>
