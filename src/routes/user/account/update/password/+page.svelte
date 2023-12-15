<script lang="ts">
    import Divider from '$lib/components/layouts/Divider.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import { modalData } from '$lib/stores/modal';

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        href: '/user/account/setting',
        title: 'Account setting',
        button: 'Save'
    }));
</script>
<div class=" flex flex-col justify-center gap-4">
    <BodyLarge>Confirm old password</BodyLarge>
    <TextField id="" name="" placeholder="Confirm password"></TextField>
</div>
<Divider class="my-8"></Divider>
<div class=" flex flex-col justify-center gap-4">
    <BodyLarge>New password</BodyLarge>
    <div class="flex justify-center items-center flex-col gap-6">
        <TextField id="" name="" placeholder="New password"></TextField>
        <TextField id="" name="" placeholder="Confirm new password"></TextField>
    </div>
</div>
