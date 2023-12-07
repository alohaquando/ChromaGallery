<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';

	export let state: 'add' | 'edit' = 'add';

	let imgSrc = '';
	export { imgSrc as src };

	let edit = () => {
		state = 'edit';
	};

	let remove = () => {
		state = 'add';
	};
</script>

{#if state === 'add'}
	<button
		class="w-full py-11 px-24 rounded-2xl border border-white/50 border-dashed justify-center items-center inline-flex cursor-pointer"
		on:click
		on:keydown>
		<Button icon="faPlus" on:click={edit}>Add image</Button>
	</button>
{:else}
	<div class="w-full gap-6 inline-flex flex-col justify-center items-center">
		<div
			class="w-full bg-black bg-opacity-50 rounded-2xl border border-white border-opacity-30 justify-center items-center inline-flex">
			<img class="object-contain" src="{imgSrc}" alt="Your image" />
		</div>
		<div class="inline-flex gap-4">
			<Button icon="faImage">Change</Button>
			<Button icon="faTrash" on:click={remove}>Remove</Button>
		</div>
	</div>
{/if}
