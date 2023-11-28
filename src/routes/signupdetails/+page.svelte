<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Socials from "$lib/components/socials/Socials.svelte";
    import Divider from "$lib/components/layouts/Divider.svelte";
    import TextField from "$lib/components/inputs/TextField.svelte";
    import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import BodySmall from "$lib/components/typography/BodySmall.svelte";
</script>


<div class="mb-4 text-center"><PageTitle>Let's get you ready</PageTitle></div>

<div class="mb-4"><TextField placeholder="myemail@google.com"></TextField></div>

<div class="mb-4"><Divider></Divider></div>

<div class="mb-4"><TextField placeholder="Password"></TextField></div>
<div class="mb-4"><TextField placeholder="Confirm password"></TextField></div>

<div class="mb-4"><Divider></Divider></div>

<div class="mb-4"><TextField placeholder="Full Name"></TextField></div>
<div class="mb-4 text-center"><Button design='filled'>Complete sign up</Button></div>