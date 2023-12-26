<script lang="ts">
	import Headline from '$lib/components/typography/Headline.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let number = 0;
</script>

<Icon
	class=" absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-9xl text-white/10"
	icon="faStar"
	type="solid"
></Icon>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">Bookmarks</Headline>

<Headline class="text-white  text-opacity-50">{number} item{number > 1 ? 's' : ''}</Headline>
<Button class="mt-10" icon="faImage">Edit items</Button>
