<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Socials from "$lib/components/socials/Socials.svelte";
    import Divider from "$lib/components/layouts/Divider.svelte";
    import TextField from "$lib/components/inputs/TextField.svelte";
    import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import BodySmall from "$lib/components/typography/BodySmall.svelte";
</script>


<PageTitle>Hi New Friend</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
<div class="mb-4 items-center gap-4 flex flex-col">
    <Socials design='facebook'></Socials>
    <Socials design='google'></Socials>
    <Socials design='apple'></Socials>
</div>

<Divider></Divider>

<TextField placeholder="Email"></TextField>
<Button design='filled' width='full'>Sign up</Button>

<Divider></Divider>
<div>
    <BodySmall>Already a member?</BodySmall>
</div>
<Button design='outlined'>Sign in</Button>
</div>