<script lang="ts">
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import InfoRow from '$lib/components/item/InfoRow.svelte';
	import { item2 } from '../../../../data';
	import { modalData } from '$lib/stores/modal';
	import { resetDialog } from '$lib/stores/dialog';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';

	modalData.set({
		modalPage: true,
		href: '/account/me',
		title: 'Account setting',
		exit: true,
		button: undefined,
		buttonFunction: function() {
		},
		animation: ''
	});

	let button1 = {
		option: 'Stay and continue editing',
		type: '',
		function: () => {
			resetDialog();
		}
	};
	let button2 = {
		option: 'Leave nd discard changes',
		type: 'filled',
		function: function() {
		}
	};
</script>

<HeroImage class="mb-8" data={item2}></HeroImage>
<BodyLarge>
	{item2.description}
</BodyLarge>
<div class="flex flex-col justify-center items-center mt-10">
	<InfoRow class="w-full" href="" leadingText="Object ID" trailingText={item2.id}></InfoRow>
	<InfoRow class="w-full" href="" leadingText="Place made" trailingText={item2.location}></InfoRow>
	<InfoRow class="w-full" href="" leadingText="Named collection" trailingText={item2.title}></InfoRow>
</div>
<Dialog button1={button1} button2={button2} text="Any changes you've made won't be saved"
				title="Leave without saving?"></Dialog>