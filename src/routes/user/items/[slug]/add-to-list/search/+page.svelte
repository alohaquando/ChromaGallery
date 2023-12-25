<script lang="ts">
	import TextField from '$lib/components/inputs/TextField.svelte';
	import DragList from '$lib/components/item/DragList.svelte';
	import { allItem } from '$lib/stores/data';
</script>

<TextField id="" name="" placeholder="Search list"></TextField>
<DragList class="gap-4 mt-6 border-transparent" items={allItem}></DragList>

