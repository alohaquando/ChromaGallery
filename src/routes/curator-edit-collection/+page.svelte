<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Headline from '$lib/components/typography/Headline.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
    import {collection1} from '../../data';
</script>

<Modal button="Save">
    <Headline>Featured items</Headline>

    <div class="mt-8 w-full">
    <TextField value={collection1.name}></TextField>
    </div>  
    <div class="my-8 w-full">
    <TextField value={collection1.description} ></TextField>
    </div>  

    <ListItem leadingText="Delete collection"  class="text-decoration-line: underline text-red-500 underline-offset-8 pt-8 pb-6" topDivider={false} bottomDivider={false} />
</Modal>
