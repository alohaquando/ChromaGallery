<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Socials from "$lib/components/socials/Socials.svelte";
    import Divider from "$lib/components/layouts/Divider.svelte";
    import TextField from "$lib/components/inputs/TextField.svelte";
    import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import BodySmall from "$lib/components/typography/BodySmall.svelte";
</script>


<PageTitle>Welcome Back</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
<div class="mb-4 items-center gap-4 flex flex-col">
    <Socials design='facebook' signup={false}></Socials>
    <Socials design='google' signup={false}></Socials>
    <Socials design='apple' signup={false}></Socials>
</div>

<Divider></Divider>

<TextField placeholder="Email"></TextField>
<TextField placeholder="Password"></TextField>
<Button design='filled' width='full'>Sign in</Button>
<Button design='outlined'>Reset my password</Button>

<Divider></Divider>
<div>
    <BodySmall>Are you new here?</BodySmall>
</div>
<Button design='outlined'>Become a member</Button>
</div>