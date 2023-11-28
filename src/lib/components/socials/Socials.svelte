<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Google from '$lib/assets/svgs/Google.svelte';
	import Button from '$lib/components/controls/Button.svelte';

	let component = Button;
	let customClasses = '';
	export { customClasses as class };
	export let href = '';
	export let design: 'facebook' | 'google' | 'apple';
	export let signup: boolean = true;
	let buttonClass: string, text: string, icon = '';
	switch (design) {
		case 'facebook': {
			buttonClass = '!bg-blue-600 hover:!bg-blue-700 active:!bg-blue-800 !text-white hover:!text-white';
			text = 'Facebook';
			icon = 'faFacebook';

			break;
		}
		case 'google': {
			buttonClass = '!bg-white hover:!bg-neutral-300 active:!bg-neutral-400 !text-black hover:!text-black !text-opacity-60 hover:!text-opacity-60';
			text = 'Google';
			break;
		}
		case 'apple': {
			buttonClass = '!bg-black hover:!bg-neutral-900 active:!bg-neutral-800 !text-white hover:!text-white';
			text = 'Apple';
			icon = 'faApple';
			break;
		}
	}
	let txt: string;
	if (signup) {
		txt = 'Sign up with';
	} else {
		txt = 'Continue with';
	}
</script>

<Button
	class="{customClasses} {buttonClass} h-12 !px-6 !duration-200 !border-none hover:after:!opacity-0 hover:before:!opacity-0 font-bold w-full"
	{icon} iconSize="xl" iconType="brands">
	{#if design === 'google'}
		<div class="text-xl w-8 pr-2">
			<Google />
		</div>
	{/if}
	{txt} {text}
</Button>

