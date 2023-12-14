<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import { modalData } from '$lib/stores/modal';

	modalData.set({
		modalPage: true,
		href: '/account/setting',
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
