<script lang="ts">
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
	import {allItem} from '$lib/../data';
    import Headline from '$lib/components/typography/Headline.svelte';
</script>

<Modal button="Save">

<Headline>Edit items</Headline>

<div class="mt-8 mb-6 w-full h-full">
<TextField id="" name="" value="Text" icon="faXmark"></TextField>
</div>

<DragList data={allItem} type="view" class="gap-4"></DragList>
</Modal>
