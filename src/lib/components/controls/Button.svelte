<!--suppress JSUnreachableSwitchBranches -->
<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let icon: string | undefined = undefined;
	export let width: 'fit' | 'full' = 'fit';
	export let design: 'filled' | 'outlined' = 'outlined';
	export let type: 'button' | 'submit' | 'reset' | undefined = 'button';
	export let disabled: boolean = false;
	let textClass = '';
	let customClasses = '';
	export { customClasses as class };

	let widthClasses: string;
	switch (width) {
		case 'fit': {
			widthClasses = 'w-fit';
			break;
		}
		case 'full': {
			widthClasses = 'w-full';
			break;
		}
	}

	let designClasses: string;
	switch (design) {
		case 'outlined': {
			designClasses = 'border border-white border-opacity-30';
			break;
		}
		case 'filled': {
			designClasses = 'bg-white text-gray-900 active:bg-white/80 hover:bg-white/70';
		}
	}

</script>

<button on:click class="px-5 rounded-full backdrop-blur-sm justify-center items-center gap-2 inline-flex overflow-visible ease-out duration-300 h-10 line-clamp-1 truncate

disabled:text-white/50 disabled:hover:before:opacity-0 disabled:hover:after:opacity-0
disabled:hover:bg-transparent

hover:bg-white/40 hover:text-gray-900 hover:before:opacity-100 hover:after:opacity-100

        {widthClasses} {designClasses} {customClasses}

        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/0 via-white/40 to-white before:rounded-full before:blur-md before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
" {disabled}
				{type}>
	<Icon {icon} />
	<Body class="{textClass}">
	<slot />
	</Body>
</button>
