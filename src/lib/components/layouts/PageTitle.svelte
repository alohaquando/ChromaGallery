<script lang="ts">
	import Display from '$lib/components/typography/Display.svelte';

	let customClass: string = '';
	export { customClass as class };
</script>

<div class="{customClass} pt-14 w-full flex justify-center items-center text-center">
	<Display>
		<slot />
	</Display>
</div>
