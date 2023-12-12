<script lang="ts">
	import Button from '$lib/components/controls/Button.svelte';

	export let state: 'add' | 'edit' = 'add';
	export let id: string = 'imageInput';

	export let fileInput;

	let selectedImage: File | null = null;
	let imageUrl: string | null = null;

	const handleGetImage = () => {
		fileInput = document.getElementById(id);
		fileInput?.click(); // Trigger the file input click event
	};

	const handleFileChange = (event: Event & { target: HTMLInputElement }) => {
		fileInput = event.target;

		if (fileInput.files && fileInput.files[0]) {
			selectedImage = fileInput.files[0];
			imageUrl = URL.createObjectURL(selectedImage);
		}
		state = 'edit';
	};

	let handleRemoveImage = () => {
		// Reset selectedImage and imageUrl
		selectedImage = null;
		imageUrl = null;

		// Clear the file input value
		fileInput = document.getElementById(id) as HTMLInputElement;
		fileInput.value = '';
		state = 'add';
	};
</script>

<input accept="image/*" class="hidden" id="{id}"
			 on:change={handleFileChange}
			 type="file" />
{#if state === 'add'}
	<label for="{id}"
				 class="w-full h-40 rounded-2xl border border-white/50 border-dashed justify-center items-center inline-flex cursor-pointer relative">
		<Button icon="faPlus" on:click={handleGetImage} class="z-10">Add image</Button>
	</label>

{:else}
	<div class="w-full gap-6 inline-flex flex-col justify-center items-center">
		<div
			class="w-full bg-black bg-opacity-50 rounded-2xl border border-white border-opacity-30 justify-center items-center inline-flex overflow-hidden">
			<img class="object-contain" src="{imageUrl}" alt="{selectedImage ? selectedImage.name : ''}" />
		</div>
		<div class="inline-flex gap-4">
			<Button icon="faImage" on:click={handleGetImage}>Change</Button>
			<Button icon="faTrash" on:click={handleRemoveImage}>Remove</Button>
		</div>
	</div>
{/if}
