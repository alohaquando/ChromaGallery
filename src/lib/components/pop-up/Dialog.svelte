<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import { dialog } from '$lib/stores/dialog';

	export let title = '';
	export let text = '';
	export let button1 = {
		option: '',
		type: '',
		function: function () {}
	};
	export let button2 = {
		option: '',
		type: 'filled',
		function: function () {}
	};

	const goBack = () => {
		window.history.back();
	};
</script>

{#if $dialog.toggled}
	<div
		class="fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-sm bg-black/50 flex justify-center items-center px-10"
	>
		<div
			class="max-w-full px-10 pt-14 pb-10 bg-neutral-700 bg-opacity-50 rounded-md flex flex-col gap-14"
		>
			<div class="max-w-3xl flex flex-col justify-center items-center gap-8">
				<Headline>{title}</Headline>
				<Body class="max-w-full break-all">{text}</Body>
			</div>
			<div class="flex flex-col justify-center gap-4 items-center">
				<Button design={button1.type} on:click={button1.function} width="full">
					{button1.option}
				</Button>
				<Button design={button2.type} on:click={button2.function} width="full">
					{button2.option}
				</Button>
			</div>
		</div>
	</div>
{/if}
