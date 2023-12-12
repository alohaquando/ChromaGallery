<script lang="ts">
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

<div class=" flex flex-col justify-center gap-4 pb-8">
	<BodyLarge>New name</BodyLarge>
	<TextField id="" name="" placeholder="New name"></TextField>
</div>
