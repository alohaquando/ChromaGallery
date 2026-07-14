<script lang="ts">
	import { onMount } from 'svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	const storageKey = 'demoNoticeDismissed';
	let visible = false;

	onMount(() => {
		visible = localStorage.getItem(storageKey) !== 'true';
	});

	function dismiss() {
		visible = false;
		localStorage.setItem(storageKey, 'true');
	}
</script>

{#if visible}
	<div
		class="fixed bottom-24 right-4 z-50 bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-5 flex flex-col gap-3 max-w-[70vw] sm:max-w-sm"
	>
		<div class="flex items-end justify-between gap-4">
			<Body class="font-medium">This is a demo experience</Body>
			<button
				aria-label="Dismiss"
				class="p-2 size-8 flex justify-center aspect-square rounded-full hover:bg-white/20 transition duration-300"
				on:click={dismiss}
			>
				<Icon icon="faXmark" type="solid" />
			</button>
		</div>
		<BodySmall class="text-white/70">
			All features are available for you to try, but nothing will be saved upon exiting the demo.
		</BodySmall>
	</div>
{/if}
