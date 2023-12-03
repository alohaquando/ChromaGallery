<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
</script>

<Bg randomized></Bg>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6"
	>My list with a lovingly long name</Headline
>
<Headline class="text-white  text-opacity-50">24 Items</Headline>
<BodyLarge class="pt-6">This is a special collection in which I collect special things</BodyLarge>

<div class="mt-10">
	<Button icon="faPen">Edit list</Button>
	<Button icon="faImage">Edit items</Button>
</div>
