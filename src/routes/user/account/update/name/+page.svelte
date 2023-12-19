<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { modal } from '$lib/stores/modal';

	modal.set({
		modalPage: true,
		href: '/user/account/setting',
		title: 'Account setting',
		button: 'Save',
		buttonFunction: function() {
		},
		animation: ''
	});
</script>

<div class=" flex flex-col justify-center gap-4 pb-8">
	<BodyLarge>New name</BodyLarge>
	<TextField id="" name="" placeholder="New name"></TextField>
</div>
