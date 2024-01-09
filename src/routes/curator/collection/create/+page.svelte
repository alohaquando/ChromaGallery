<script lang="ts">
    import TextArea from '$lib/components/inputs/TextArea.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import CollectionList from '$lib/components/item/CollectionList.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import { onMount } from 'svelte';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import { uploadFileGetUrl } from '$lib/data/item';
    import FormError from '$lib/components/inputs/FormError.svelte';

    let isLoading = false;
    export let form;

    const handleSubmit: SubmitFunction = async ({ formData }) => {
        isLoading = true;

        return async ({ update }) => {
            await update();
            isLoading = false;
        };
    };
</script>


<form
        action="?/add"
        class="w-full flex-col flex justify-center gap-10 mt-6"
        enctype="multipart/form-data"
        method="POST"
        use:enhance={handleSubmit}>
    <div class="gap-8 flex flex-col">

        <div class="w-full">
            <TextField id="create" label="Name" labelSize="lg" name="title" placeholder="Collection name"
            ></TextField>
        </div>

        <div class="w-full">
		<TextArea
                id="create"
                label="Description"
                labelSize="lg"
                name="desc"
                placeholder="Collection description"
                rows={2}
        ></TextArea>
        </div>

        {#if form}
            <FormError>{form.message}</FormError>
        {/if}

        <Button disabled={isLoading} sticky type="submit">
            {isLoading ? 'Loading...' : 'Add'}
        </Button>

    </div>
</form>