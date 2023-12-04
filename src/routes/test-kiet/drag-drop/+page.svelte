<script lang="ts">
	import BG from '$lib/components/backgrounds/BG.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';

	// data
	let items = [
		{
			id: 1,
			title: '1st',
			subtitle: 'first',
			src: ''
		},
		{
			id: 2,
			title: '2nd',
			subtitle: 'second',
			src: ''
		},
		{
			id: 3,
			title: '3rd',
			subtitle: 'third',
			src: ''
		},
		{
			id: 4,
			title: '4th',
			subtitle: 'fourth',
			src: ''
		},
		{
			id: 5,
			title: '5th',
			subtitle: 'fifth',
			src: ''
		}
	];

	let type = 'checkbox';

	// function for toggle button
	function onClick() {
		if (type === 'checkbox') {
			type = 'edit';
		} else {
			type = 'checkbox';
		}
	}
</script>

<BG randomized />

<Button on:click={onClick}>toggle</Button>
<DragList bind:data={items} {type}></DragList>
