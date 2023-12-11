<script lang="ts">
    import Modal from '$lib/components/pop-up/Modal.svelte';
    import Divider from '$lib/components/layouts/Divider.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
</script>

<Modal button="Update" title="Update password" transition={false}>
    <div class=" flex flex-col justify-center gap-4">
        <BodyLarge>Confirm old password</BodyLarge>
        <TextField id="" name="" placeholder="Confirm password"></TextField>
    </div>
    <Divider padding="8"></Divider>
    <div class=" flex flex-col justify-center gap-4">
        <BodyLarge>New password</BodyLarge>
        <div class="flex justify-center items-center flex-col gap-6">
            <TextField id="" name="" placeholder="New password"></TextField>
            <TextField id="" name="" placeholder="Confirm new password"></TextField>
        </div>
    </div>
</Modal>
