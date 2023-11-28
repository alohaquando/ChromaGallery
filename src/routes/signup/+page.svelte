<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Socials from "$lib/components/socials/Socials.svelte";
    import Divider from "$lib/components/layouts/Divider.svelte";
    import TextField from "$lib/components/inputs/TextField.svelte";
    import PageTitle from "$lib/components/layouts/PageTitle.svelte";
    import BodySmall from "$lib/components/typography/BodySmall.svelte";
</script>


<div class="mb-4 text-center"><PageTitle>Hi New Friend</PageTitle></div>

<div class="mb-4 text-center">
    <Socials design='facebook'></Socials>
</div>

<div class="mb-4 text-center">
    <Socials design='google'></Socials>
</div>

<div class="mb-4 text-center">
    <Socials design='apple'></Socials>
</div>

<div class="mb-4"><Divider></Divider></div>

<div class="mb-4"><TextField placeholder="Email"></TextField></div>
<div class="mb-4 text-center"><Button design='filled' class=" w-[342px]">Sign up</Button></div>

<div class="mb-4"><Divider></Divider></div>
<div class="mb-4 w-[174px] text-center text-white text-opacity-70 text-base leading-normal">
    <BodySmall>Already a member?</BodySmall>
</div>
<div class="mb-4 text-center"><Button design='outlined'>Sign in</Button></div>