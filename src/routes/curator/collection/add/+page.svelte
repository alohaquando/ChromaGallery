<script lang="ts">
    import TextField from '$lib/components/inputs/TextField.svelte';
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { uploadFileGetUrl } from '$lib/data/item.js';
    import TextArea from '$lib/components/inputs/TextArea.svelte';
    import FormError from '$lib/components/inputs/FormError.svelte';
    import Button from '$lib/components/controls/Button.svelte';

    let options: string[];

    let isLoading: boolean = false;
    export let form;

    const handleSubmit: SubmitFunction = async ({ formData }) => {
        isLoading = true;
        const image: any = formData.get('image') as File;

        if (image.size !== 0) {
            const imageUrl: string = await uploadFileGetUrl(image);
            formData.set('imageUrl', imageUrl);
        } else {
            formData.set('imageUrl', '');
        }

        return async ({ update }) => {
            await update();
            isLoading = false;
        };
    };
</script>

<form action="?/add"
      class="w-full flex-col flex justify-center gap-10 mt-6"
      enctype="multipart/form-data"
      method="POST"
      use:enhance={handleSubmit}>
    <TextField id="name" label="Name" name="name" placeholder="Name" required></TextField>
    <TextArea id="desc" label="Description" name="desc" placeholder="Description" required></TextArea>

    {#if form}
        <FormError>{form.message}</FormError>
    {/if}

    <Button disabled={isLoading} sticky type="submit">
        {isLoading ? 'Loading...' : 'Add'}
    </Button>
</form>
