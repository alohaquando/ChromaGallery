<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Google from '$lib/assets/svgs/Google.svelte';

	let customClasses = '';
	export { customClasses as class };
	export let href = '';
	export let design: 'facebook' | 'google' | 'apple';
	export let signup: boolean = true;

	let bg: string, text: string, icon: string, tc: string;
	switch (design) {
		case 'facebook': {
			bg = 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800';
			text = 'Facebook';
			icon = 'faFacebook';
			tc = 'text-white';
			break;
		}
		case 'google': {
			bg = 'bg-white hover:bg-neutral-200 active:bg-neutral-300';
			text = 'Google';
			icon = 'faGoogle';
			tc = 'text-black text-opacity-60';
			break;
		}
		case 'apple': {
			bg = 'bg-black hover:bg-neutral-900 active:bg-neutral-800 outline outline-white/20';
			text = 'Apple';
			icon = 'faApple';
			tc = 'text-white';
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


<svelte:element
	this={href? 'a':'button'}
	on:click
	on:keydown
	tabindex="0"
	role="button"
	class="px-6 h-12 rounded-[99px] shadow justify-start items-center gap-4 inline-flex transition {bg} {customClasses}">

	{#if design === 'google'}
		<div class="text-xl w-6 flex justify-center">
			<Google />
		</div>
	{:else }
		<Icon class={tc} {icon} size="2xl" type="brands"></Icon>
	{/if}
	<Body class="grow shrink basis-0 text-center {tc}">{txt} {text}</Body>
</svelte:element>
  
