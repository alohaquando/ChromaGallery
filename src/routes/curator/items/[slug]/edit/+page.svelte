<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { uploadFileGetUrl } from '$lib/data/item';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/controls/Button.svelte';

	let isLoading = false;
	export let data;
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;

		const image: any = formData.get('image') as File;

		if (image != null) {
			const imageUrl: string = await uploadFileGetUrl(image);
			formData.set('imageUrl', imageUrl);
		} else {
			formData.set('imageUrl', '');
		}

		formData.set('itemID', data.id);

		console.log('hello');

		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};
	console.log(data);
</script>

<!--Image input-->

<form
	action="?/edit"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}
>
	<FileInput id="image" imageUrl={data.item.image} name="image" state="edit"></FileInput>

	<!--	<Divider class="my-8" />-->

	<!--ID field-->
	<!--<div class="w-full flex-col flex justify-center">-->
	<!--	<TextField id="" label="ID" name="" placeholder="" type="text"></TextField>-->
	<!--</div>-->

	<Divider class="my-8" />

	<!--Name & Time field-->
	<div class="w-full flex-col flex justify-center gap-6 mt-6">
		<TextField id="artist" label="Artist" name="artist" value={data.item.author}></TextField>

		<TextField id="Location" label="Location" name="location" value={data.item.location}
		></TextField>

		<TextField id="time" label="Time" name="time" type="date" value={data.item.year}></TextField>

		<TextField id="Title" label="Title" name="name" value={data.item.title}></TextField>

		<TextArea id="desc" label="Description" name="desc" value={data.item.description}></TextArea>

		<!--		-		<Datalist&ndash;&gt;-->
		<!--			id=""-->
		<!--			label="Label"-->
		<!--			name=""-->
		<!--			{options}-->
		<!--			placeholder="Select an option or enter your own value"-->
		<!--		></Datalist>-->
	</div>

	<Divider class="my-8" />

	<!--Extra fields-->
	<!--	<div class="w-full flex-col flex justify-center gap-6 mt-8">-->
	<!--		<TextField id="" label="Extra field 1" name="" placeholder=""></TextField>-->
	<!--		<TextField id="" label="Extra field 2" name="" placeholder=""></TextField>-->
	<!--	</div>-->

	<Button disabled={isLoading} sticky type="submit">
		{isLoading ? 'Loading...' : 'Edit'}
	</Button>
</form>
