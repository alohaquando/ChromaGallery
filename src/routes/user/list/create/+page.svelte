<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	// import { auth, db } from '$lib/services/firebase/firebase';
	// import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
	// import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { handleCreateList } from '$lib/data/list';
	import Button from '$lib/components/controls/Button.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export const contextKey = {};

	export let data;
	export let userId = data.session?.uid;
	export let listName: string = '';
	export let listDescription: string = '';

	let errorMessage: string;
	const validateInput = () => {
		if (listName.length == 0) {
			errorMessage = '*List title is empty.';
		} else if (listDescription.length == 0) {
			errorMessage = '*List description is empty.';
		} else {
			errorMessage = '';
		}
	};

	$: errorMessage;
</script>

<div class="gap-6 flex flex-col">
	<TextField
		bind:value={listName}
		id="name"
		label="Title"
		labelSize="lg"
		name="name"
		on:change={validateInput}
		placeholder="List title"
	></TextField>
	<TextField
		bind:value={listDescription}
		id="description"
		label="Description"
		name="description"
		on:change={validateInput}
		placeholder="List description"
	></TextField>
	{#if errorMessage}
		<Body class="text-red-400"><i>{errorMessage}</i></Body>
	{/if}
	<Button on:click={() => handleCreateList(userId, listName, listDescription)} width="full">Craete list</Button>
</div>
