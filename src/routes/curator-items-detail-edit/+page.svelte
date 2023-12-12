<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextArea from '$lib/components/inputs/TextArea.svelte';

	import { item2 } from '../../data';
</script>

<Modal button="Save" title="Edit item">
	<div class="w-full flex-col flex justify-center">
		<HeroImage data={item2} hideInfo='true'></HeroImage>
		<FileInput state="edit"></FileInput>

		<div class="w-full flex-col flex justify-center mt-12">
			<Divider></Divider>
			<div class="w-full flex-col flex justify-center mt-6 mb-10">
				<TextField id='' label="ID" name="" placeholder='' type="text"></TextField>
			</div>
			<Divider></Divider>
		</div>

		<div class="w-full flex-col flex justify-center gap-6 mt-6">
			<TextField id='' label="Name" name="" placeholder='' type="name"></TextField>
			<TextField id='' label="Artist" name="" placeholder='' type="text"></TextField>
			<TextField id='' label="Time" name="" placeholder='' type="date"></TextField>
			<TextArea id="" label="Description" placeholder=""></TextArea>

		</div>

		<div class="w-full flex-col flex justify-center gap-6 mt-8">
			<Divider />
			<TextField id='' label="Extra field 1" name="" placeholder=''></TextField>
			<TextField id='' label="Extra field 2" name="" placeholder=''></TextField>
		</div>

	</div>

</Modal>
