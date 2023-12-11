<script>
	import Button from '$lib/components/controls/Button.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import { defaultLayout } from '$lib/stores/pageLayout.js';

	defaultLayout();
</script>

<PageTitle>Let's get you ready</PageTitle>

<form class="mt-16 gap-8 flex flex-col items-center w-full">
	<TextField id="" name="" placeholder="myemail@google.com"></TextField>
	<Divider></Divider>

	<TextField id="" name="" placeholder="Password"></TextField>
	<TextField id="" name="" placeholder="Confirm password"></TextField>

	<Divider></Divider>
	<TextField id="" name="" placeholder="Full Name"></TextField>
	<Button design="filled" type="submit" width="full">Complete sign up</Button>
</form>
