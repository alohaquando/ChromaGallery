<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Socials from "$lib/components/socials/Socials.svelte";
    import Divider from "$lib/components/layouts/Divider.svelte";
    import TextField from "$lib/components/inputs/TextField.svelte";
    import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import BodySmall from "$lib/components/typography/BodySmall.svelte";
</script>


<PageTitle>Let's get you ready</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
<TextField placeholder="myemail@google.com"></TextField>
<Divider></Divider>

<TextField placeholder="Password"></TextField>
<TextField placeholder="Confirm password"></TextField>

<Divider></Divider>
<TextField placeholder="Full Name"></TextField>
<Button design='filled' width='full'>Complete sign up</Button>
</div>