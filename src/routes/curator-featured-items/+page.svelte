<script lang="ts">
    import DragList from '$lib/components/item/DragList.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Headline from '$lib/components/typography/Headline.svelte';
    import Divider from '$lib/components/layouts/Divider.svelte';
	import {allItem} from '$lib/../data';
    import {itemList2} from '$lib/../data';
</script>

<Modal button="Save">
    <Headline>Featured items</Headline>

    <DragList data={itemList2} button="destructive" class="gap-4 my-8 w-full"></DragList>
    
    <Divider></Divider>

    <Button class="my-6 w-full px-6" icon="faMagnifyingGlass">Find item to feature</Button>
    <DragList data={allItem} button="add" class="gap-4"></DragList>
</Modal>
