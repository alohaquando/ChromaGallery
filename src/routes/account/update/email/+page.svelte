<script lang="ts">
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/account/setting',
		title: 'Account setting',
		button: 'Save'
	}));
</script>

<div class=" flex flex-col justify-center gap-4">
	<BodyLarge>Confirm old password</BodyLarge>
	<TextField id="" name="" placeholder="Confirm password"></TextField>
</div>
<Divider class="my-8"></Divider>
<div class=" flex flex-col justify-center gap-4">
	<BodyLarge>New email</BodyLarge>
	<div class="flex justify-center items-center flex-col gap-6">
		<TextField id="" name="" placeholder="New email"></TextField>
		<TextField id="" name="" placeholder="Confirm new email"></TextField>
	</div>
</div>
