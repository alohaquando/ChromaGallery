<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<!--<div class="w-screen h-screen backdrop-blur-sm fixed"></div>-->
<Bg randomized />

<TextField id="" name="" placeholder="Search"></TextField>

<div class="mt-6">
	<ListItem bottomDivider={false} icon="faArrowUpLeft" leadingText="Suggestion 1" topDivider={false} />
	<ListItem bottomDivider={false} icon="faArrowUpLeft" leadingText="Suggestion 2" topDivider={false} />
	<ListItem bottomDivider={false} icon="faArrowUpLeft" leadingText="Suggestion 3" topDivider={false} />
</div>