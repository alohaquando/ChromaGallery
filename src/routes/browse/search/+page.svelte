<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<TextField id="" name="" placeholder="Text"></TextField>

<div class="mt-6">
	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 1" topDivider={false} />
	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 2" topDivider={false} />
	<ListItem bottomDivider={false} icon="faArrowUpLeft" text="Suggestion 3" topDivider={false} />
</div>
