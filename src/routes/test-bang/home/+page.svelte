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
	<TextField id="author" label="author" name="author" placeholder="author" bind:value={author}
	></TextField>
	<TextField
		id="description"
		label="description"
		name="description"
		placeholder="description"
		bind:value={description}
	></TextField>
	<TextField id="title" label="title" name="title" placeholder="title" bind:value={title}
	></TextField>
	<!-- <TextField
		id="subtitle"

		label="subtitle"
		name="subtitle"
		placeholder="subtitle"
		bind:value={subtitle}
	></TextField> -->
	<TextField
		id="location"
		label="location"
		name="location"
		placeholder="location"
		bind:value={location}
	></TextField>

	<TextField id="year" label="year" name="year" placeholder="year" bind:value={year}></TextField>
	<input type="file" on:change={(e) => (image = e.target.files[0])} />
	<button type="submit" class="bg-white text-black" on:click={() => handleCreateItem(author,description,image,isFeatured,location,title,year)}>Create</button>
</form>
