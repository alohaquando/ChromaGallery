<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import { auth, db } from '$lib/services/firebase/firebase';
	import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { handleCreateList } from '$lib/data/list';

	export let data;
	let userId = data.session?.uid;
	let listName: string;
	let listDescription: string;

	// handleCreateList(userId, 'Title1', 'Subtite')
</script>

<div class="gap-6 flex flex-col">
	<TextField
		bind:value={listName}
		id="name"
		label="Title"
		labelSize="lg"
		name="name"
		placeholder="List title"
	></TextField>
	<TextField
		bind:value={listDescription}
		id="description"
		label="Description"
		name="description"
		placeholder="List description"
	></TextField>
	<button on:click={() => handleCreateList(userId, listName, listDescription)}>Create List</button>
</div>
