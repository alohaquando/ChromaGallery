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

	$: errorMessage;
</script>

<form class="gap-6 flex flex-col">
	<TextField
		bind:value={listName}
		id="name"
		label="Title"
		labelSize="lg"
		name="name"
		placeholder="List title"
		required
	></TextField>
	<TextField
		bind:value={listDescription}
		id="description"
		label="Description"
		name="description"
		placeholder="List description"
		required
	></TextField>
	{#if errorMessage}
		<Body class="text-red-400"><i>{errorMessage}</i></Body>
	{/if}
	<Button class="mt-6" design="filled" on:click={() => handleCreateList(userId, listName, listDescription)}
					type="submit"
					width="full">Create list
	</Button>
</form>
