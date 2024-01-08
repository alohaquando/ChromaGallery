<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Datalist from '$lib/components/inputs/Datalist.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { enhance } from '$app/forms';
	import Body from '$lib/components/typography/Body.svelte';
	import FormError from '$lib/components/inputs/FormError.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { storage } from '$lib/services/firebase/firebase';
	import { handleCreateItem, uploadFileGetUrl } from '$lib/data/item';
	import LoadingOverlay from '$lib/components/layouts/LoadingOverlay.svelte';

	let options: string[];

	let isLoading: boolean = false;
	export let form;

	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;
		const image: any = formData.get('image') as File;

		if (image.size !== 0) {
			const imageUrl: string = await uploadFileGetUrl(image);
			formData.set('imageUrl', imageUrl);
		} else {
			formData.set('imageUrl', '');
		}

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};
</script>

<LoadingOverlay bind:isLoading={isLoading}></LoadingOverlay>

<form
	action="?/add"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}>

	<FileInput id="image" name="image" state="add"></FileInput>

	<Divider></Divider>

	<TextField required id="name" label="Name" name="name" placeholder="Name"></TextField>

	<Datalist
		required
		id="artist"
		label="Artist"
		name="artist"
		{options}
		placeholder="Artist"
	></Datalist>

	<TextField required id="time" label="Time" name="time" placeholder="time" type="date"></TextField>

	<TextField required id="location" label="Location" name="location" placeholder="Location"></TextField>

	<TextArea required id="desc" label="Description" name="desc" placeholder="Description"></TextArea>


	{#if form}
		<FormError>{form.message}</FormError>
	{/if}

	<Button disabled={isLoading} sticky type="submit">
		{isLoading ? 'Loading...' : 'Add'}
	</Button>
</form>

<!--<Divider class="my-8"></Divider>-->

<!--<div class="w-full flex-col flex justify-center gap-6 mt-8">-->
<!--	<TextField id="" label="Extra field 1" name="" placeholder=""></TextField>-->
<!--	<TextField id="" label="Extra field 2" name="" placeholder=""></TextField>-->
<!--</div>-->
