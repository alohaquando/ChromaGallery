<script lang="ts">
	import BG from '$lib/components/backgrounds/BG.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import type { Item } from '../../../model';

	// data
	let items: Item[] = [
		{
			id: '1',
			title: '1st',
			subtitle: 'first',
			collection: 'nope',
			author: '',
			src: '',
			time: 'TOMORROW',
			description: 'idkman'
		},
		{
			id: '2',
			title: '2nd',
			subtitle: 'second',
			collection: 'nope',
			author: '',
			src: '',
			time: 'TOMORROW',
			description: 'idkman'
		},
		{
			id: '3',
			title: '3rd',
			subtitle: 'third',
			collection: 'nope',
			author: '',
			src: '',
			time: 'TOMORROW',
			description: 'idkman'
		},
		{
			id: '4',
			title: '4th',
			subtitle: 'fourth',
			collection: 'nope',
			author: '',
			src: '',
			time: 'TOMORROW',
			description: 'idkman'
		},
		{
			id: '5',
			title: '5th',
			subtitle: 'fifth',
			collection: 'nope',
			author: '',
			src: '',
			time: 'TOMORROW',
			description: 'idkman'
		}
	];

	let type = 'edit';

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
