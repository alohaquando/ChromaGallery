<script lang="ts">
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import Datalist from '$lib/components/inputs/Datalist.svelte';
	import { resetDialog } from '$lib/stores/dialog';
	import type { PageData } from './$types';

	export let data: PageData;

	let item = data.item;

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
</script>

<!--Image input-->
<FileInput imageUrl="{data.item.image}" state="edit"></FileInput>

<Divider class="my-8" />

<!--ID field-->
<div class="w-full flex-col flex justify-center">
	<TextField id="" label="ID" name="" placeholder="" type="text"></TextField>
</div>

<Divider class="my-8" />

<!--Name & Time field-->
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

<Divider class="my-8" />

<!--Extra fields-->
<div class="w-full flex-col flex justify-center gap-6 mt-8">
	<TextField id="" label="Extra field 1" name="" placeholder=""></TextField>
	<TextField id="" label="Extra field 2" name="" placeholder=""></TextField>
</div>
