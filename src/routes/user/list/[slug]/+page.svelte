<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';

	export let number = 0;
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6"
	>My list with a lovingly long displayName
</Headline>

<Headline class="text-white  text-opacity-50">{number} item{number > 1 ? 's' : ''}</Headline>
<BodyLarge class="pt-6">This is a special collection in which I collect special things</BodyLarge>

<div class="mt-10">
	<Button icon="faPen">Edit list</Button>
	<Button icon="faImage">Edit items</Button>
</div>
