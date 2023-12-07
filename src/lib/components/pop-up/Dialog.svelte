<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let title = '';
	export let text = '';
	export let option1 = '';
	export let type1: undefined;
	export let option2 = '';
	export let type2 = 'filled';
</script>

<div
	class="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm bg-black/50 flex justify-center items-center px-10"
>
	<div
		class="max-w-full px-10 pt-14 pb-10 bg-neutral-700 bg-opacity-50 rounded-md flex flex-col gap-14"
	>
		<div class="max-w-3xl flex flex-col justify-center items-center gap-8">
			<Headline>{title}</Headline>
			<Body class="max-w-full break-all">{text}</Body>
		</div>
		<div
			class="flex flex-col justify-center gap-4 items-center"
		>
			<Button design={type1} width="full">
				{option1}
			</Button>
			<Button design={type2} width="full">
				{option2}
			</Button>
		</div>
	</div>
</div>
