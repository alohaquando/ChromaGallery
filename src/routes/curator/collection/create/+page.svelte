<script lang="ts">
    import TextArea from '$lib/components/inputs/TextArea.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import FormError from '$lib/components/inputs/FormError.svelte';

    export let form;
    let isLoading = false;

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

    <TextField id="create" label="Name" labelSize="lg" name="title" placeholder="Collection name"
    ></TextField>

    <TextArea
            id="create"
            label="Description"
            labelSize="lg"
            name="desc"
            placeholder="Collection description"
            rows={2}
    ></TextArea>

    {#if form}
        <FormError>{form.message}</FormError>
    {/if}

    <Button disabled={isLoading} sticky type="submit">
        {isLoading ? 'Loading...' : 'Add'}
    </Button>

</form>