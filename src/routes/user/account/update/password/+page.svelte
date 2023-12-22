<script lang="ts">
    import Divider from '$lib/components/layouts/Divider.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import { modal } from '$lib/stores/modal';
    import { getAuth, updatePassword } from 'firebase/auth';

    modal.update((modalData) => ({
        ...modalData,
        modalPage: true,
        href: '/user/account/setting',
        title: 'Account setting',
        button: 'Save'
    }));

    const auth = getAuth();

    let user = auth.currentUser;
    let newPassword = '';

    updatePassword(user, newPassword)
        .then(() => {
            console.log('Update successful');
        })
        .catch((error) => {
            console.log(error);
        });
</script>

<div class=" flex flex-col justify-center gap-4">
    <TextField id="confirmPassword" label="Confirm old password" labelSize="lg" name="confirmPassword"
               placeholder="Confirm password"></TextField>
</div>
<Divider class="my-8"></Divider>
<div class=" flex flex-col justify-center gap-6">
    <TextField bind:value={newPassword} id="newPassword" label="New password" labelSize="lg" name="newPassword"
               placeholder="New password"></TextField>
    <TextField id="confirmNewPassword" label="Confirm new password" labelSize="lg" name="confirmNewPassword"
               placeholder="Confirm new password"></TextField>
</div>
