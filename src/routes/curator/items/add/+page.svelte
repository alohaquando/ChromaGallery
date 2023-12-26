<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Datalist from '$lib/components/inputs/Datalist.svelte';

	let options: string[];
</script>

<FileInput state="add"></FileInput>

<Divider class="my-8"></Divider>

<div class="w-full flex-col flex justify-center gap-6 mt-6">
	<TextField id="" label="Name" name="" placeholder=""></TextField>
	<Datalist
		id=""
		label="Label"
		name=""
		{options}
		placeholder="Select an option or enter your own value"
	></Datalist>
	<TextField id="" label="Time" name="" placeholder="" type="date"></TextField>
	<TextArea id="" label="Description" name="" placeholder=""></TextArea>
</div>

<Divider class="my-8"></Divider>

<div class="w-full flex-col flex justify-center gap-6 mt-8">
	<TextField id="" label="Extra field 1" name="" placeholder=""></TextField>
	<TextField id="" label="Extra field 2" name="" placeholder=""></TextField>
</div>
