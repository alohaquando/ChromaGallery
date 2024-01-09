<script lang="ts">
	import Display from '$lib/components/typography/Display.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	let customClass: string = '';
	export { customClass as class };
</script>

<div class="{customClass} pt-14 w-full flex flex-col gap-8 justify-center items-center text-center">
	<Display>
		<slot />
	</Display>
</div>
