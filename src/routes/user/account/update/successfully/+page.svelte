<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { modal } from '$lib/stores/modal';

	modal.update(modalData => ({
		...modalData,
		modalPage: true,
		href: '/user/account/setting',
		title: 'Account setting'
	}));
</script>

<div class="">
	<div class="w-full h-full pt-[20vh] flex flex-col justify-center items-center gap-6">
		<Icon icon="faCheck" size="6xl"></Icon>
		<BodyLarge>Update successful</BodyLarge>
		<Button class="mt-20" design="filled" href="/account/setting">Back to settings</Button>
	</div>
</div>
