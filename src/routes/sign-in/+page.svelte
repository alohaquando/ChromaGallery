<script>
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import BG from '$lib/components/backgrounds/BG.svelte';
</script>

<BG color="1877F2"/>

<PageTitle>Welcome back</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full ">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design='facebook' href="/" signup={false}></Socials>
		<Socials design='google' href="/" signup={false}></Socials>
		<Socials design='apple' href="/" signup={false}></Socials>
	</div>

	<Divider />

	<form class="contents">
		<TextField id="" name="" placeholder="Email" type="email"></TextField>
		<TextField id="" name="" placeholder="Password" type="password"></TextField>
		<Button design='filled' width='full' type="submit">Sign in</Button>
		<Button design='outlined'>Reset my password</Button>
	</form>

	<Divider />
	<div>
		<BodySmall>Are you new here?</BodySmall>
	</div>
	<Button design='outlined'>Become a member</Button>
</div>