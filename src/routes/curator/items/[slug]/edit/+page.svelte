<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import Datalist from '$lib/components/inputs/Datalist.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { uploadFileGetUrl } from '$lib/data/item';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/controls/Button.svelte';

	let options: string[];
	let button1 = {
		option: 'Cancel',
		type: '',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Log out',
		type: 'filled',
		function: function() {
		}
	};
	let isLoading = false;
	export let data;
	const handleSubmit: SubmitFunction = async ({ formData }) => {
		isLoading = true;
		const image: any = formData.get('image') as File;

		// if (image.size !== 0 || !image) {
		// 	const imageUrl: string = await uploadFileGetUrl(image);
		// 	formData.set('imageUrl', imageUrl);
		//
		// } else {
		// 	formData.set('imageUrl', '');
		// }
		formData.set("imageUrl","https://firebasestorage.googleapis.com/v0/b/thatonlinemuseum.appspot.com/o/images%2Fdog1.webp?alt=media&token=69847608-f488-4d60-a54a-6721cbc8f691" )

		formData.set("itemID",data.id)

		return async ({ update }) => {
			await update();
			isLoading = false;
		};

	};

</script>

<!--Image input-->


<form
	action="?/edit"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance={handleSubmit}>

	<FileInput state="edit"></FileInput>

	<Divider class="my-8" />

	<!--ID field-->
	<!--<div class="w-full flex-col flex justify-center">-->
	<!--	<TextField id="" label="ID" name="" placeholder="" type="text"></TextField>-->
	<!--</div>-->

	<Divider class="my-8" />

	<!--Name & Time field-->
	<div class="w-full flex-col flex justify-center gap-6 mt-6">
		<TextField id="artist" label="Artist" name="artist" value={data.item.author}></TextField>

		<TextField id="Location" label="Location" name="location" value={data.item.location}></TextField>

		<TextField id="time" label="Time" name="time" value={data.item.year} type="date"></TextField>

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

	<!--Dialog-->
	<Dialog
		{button1}
		{button2}
		text="Any changes you've made won't be saved"
		title="Leave without saving"
	></Dialog>
	<Button disabled={isLoading} sticky type="submit">
		{isLoading ? 'Loading...' : 'Edit'}
	</Button>
</form>