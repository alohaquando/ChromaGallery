<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
</script>

<Modal title="Update password" buttonText="Update">
	<div class=" flex flex-col justify-center gap-4 pb-8">
		<BodyLarge>Confirm old password</BodyLarge>
		<TextField placeholder="Confirm password"></TextField>
	</div>
	<Divider></Divider>
	<div class=" flex flex-col justify-center gap-4 pt-8">
		<BodyLarge>New password</BodyLarge>
		<div class="flex justify-center items-center flex-col gap-6">
			<TextField placeholder="New password"></TextField>
			<TextField placeholder="Confirm new password"></TextField>
		</div>
	</div>
</Modal>
