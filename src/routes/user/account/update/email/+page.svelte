<script lang="ts">
    import Divider from '$lib/components/layouts/Divider.svelte';
    import TextField from '$lib/components/inputs/TextField.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import { modal } from '$lib/stores/modal';
    import { getAuth, updateEmail } from 'firebase/auth';

    modal.update((modalData) => ({
        ...modalData,
        modalPage: true,
        href: '/user/account/setting',
        title: 'Account setting',
        button: 'Save'
    }));

    const auth = getAuth();
    let newEmail = '';
    updateEmail(auth.currentUser, 'user@example.com')
        .then(() => {
            console.log(auth.currentUser.email);
        })
        .catch((error) => {
            console.log(error);
        });
</script>

<div class=" flex flex-col justify-center gap-4">
    <TextField id="confirmOldPassword" label="Confirm old password" labelSize="lg" name="confirmOldPassword"
               placeholder="Confirm password"></TextField>
</div>

<Divider class="my-8"></Divider>

<div class=" flex flex-col justify-center gap-6">
    <TextField bind:value={newEmail} id="newEmail" label="New email" labelSize="lg"
               name="newEmail" placeholder="New email"></TextField>
    <TextField id="confirmNewEmail" label="Confirm new email" labelSize="lg" name="confirmNewEmail"
               placeholder="Confirm new email"></TextField>
</div>
