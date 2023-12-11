<script>
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import { defaultLayout } from '$lib/stores/pageLayout.js';

	defaultLayout();
</script>

<BG randomized />

<PageTitle>Hi new friend</PageTitle>

<div class="mt-16 gap-8 flex flex-col items-center w-full">
	<div class="mb-4 items-center gap-4 flex flex-col w-full">
		<Socials design="facebook" href="/"></Socials>
		<Socials design="google" href="/"></Socials>
		<Socials design="apple" href="/"></Socials>
	</div>

	<Divider></Divider>

	<form class="contents">
		<TextField id="" name="" placeholder="Email"></TextField>
		<Button design="filled" type="submit" width="full">Sign up</Button>
	</form>

	<Divider></Divider>
	<div>
		<BodySmall>Already a member?</BodySmall>
	</div>
	<Button design="outlined">Sign in</Button>
</div>
