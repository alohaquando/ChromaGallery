<script>
	import TextField from '$lib/components/inputs/TextField.svelte';
	import { handleCreateItem } from '$lib/data/item';

	let author;
	let title;
	let isFeatured = true;
	let location;
	let year;
	let description;
	let image;
</script>

<form>
	<TextField bind:value={author} id="author" label="author" name="author" placeholder="author"
	></TextField>
	<TextField
		bind:value={description}
		id="description"
		label="description"
		name="description"
		placeholder="description"
	></TextField>
	<TextField bind:value={title} id="title" label="title" name="title" placeholder="title"
	></TextField>
	<!-- <TextField
		id="subtitle"

		label="subtitle"
		name="subtitle"
		placeholder="subtitle"
		bind:value={subtitle}
	></TextField> -->
	<TextField
		bind:value={location}
		id="location"
		label="location"
		name="location"
		placeholder="location"
	></TextField>

	<TextField bind:value={year} id="year" label="year" name="year" placeholder="year"></TextField>
	<input on:change={(e) => (image = e.target.files[0])} type="file" />
	<button
		class="bg-white text-black"
		on:click={() => handleCreateItem(author, description, image, isFeatured, location, title, year)}
		type="submit"
		>Create
	</button>
</form>
