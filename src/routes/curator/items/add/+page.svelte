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

	let options: string[];

	export let form;
</script>

<form
	action="?/add"
	class="w-full flex-col flex justify-center gap-10 mt-6"
	enctype="multipart/form-data"
	method="POST"
	use:enhance>

	<FileInput id="image" name="image" state="add"></FileInput>

	<Divider></Divider>

	<TextField id="name" label="Name" name="name" placeholder="Name"></TextField>

	<Datalist
		id="artist"
		label="Artist"
		name="artist"
		{options}
		placeholder="Artist"
	></Datalist>

	<TextField id="time" label="Time" name="time" placeholder="" type="date"></TextField>

	<TextField id="location" label="Location" name="location" placeholder="Location"></TextField>

	<TextArea id="desc" label="Description" name="desc" placeholder="Description"></TextArea>


	{#if form}
		<FormError>{form.message}</FormError>
	{/if}

	<Button sticky type="submit">
		Add
	</Button>
</form>

<!--<Divider class="my-8"></Divider>-->

<!--<div class="w-full flex-col flex justify-center gap-6 mt-8">-->
<!--	<TextField id="" label="Extra field 1" name="" placeholder=""></TextField>-->
<!--	<TextField id="" label="Extra field 2" name="" placeholder=""></TextField>-->
<!--</div>-->
