<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Headline from '$lib/components/typography/Headline.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import {allItem} from '$lib/../data';
</script>

<Modal button="Save">
    <Headline>Edit items</Headline>

    <Button class="mt-8 mb-6 w-full" icon="faMagifyingGlass">Find item</Button>

    <DragList data={allItem} type="edit" class="gap-4"></DragList>
</Modal>