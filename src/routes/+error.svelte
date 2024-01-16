<script lang="ts">
	import LetterC from '$lib/assets/svgs/LetterC.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import { page } from '$app/stores';
	import Headline from '$lib/components/typography/Headline.svelte';
</script>

<div class="w-full flex flex-col h-screen items-center space-y-8">
	<!--		<div class=" h-16  ring w-16  my-12 ">-->
	<!--			<LetterC animation="spin" class="h-16 " />-->
	<!--		</div>-->

	<PageTitle>{$page?.status}</PageTitle>
	<Headline>{$page?.error?.message}</Headline>

	<Body class="text-center ">We sincerely apologize for this inconvenience</Body>

	<div class="flex flex-col space-y-4 items-center pt-4 w-full">
		<Button design="filled" href="/" width="full">Go to Chroma Gallery</Button>

		<Button design="filled" href="/curator/items" width="full">Go to Chroma Curator</Button>

		<Button
			design="outlined"
			on:click={() => {
				history.back();
			}}
			width="full"
		>
			Go back
		</Button>
	</div>
</div>
