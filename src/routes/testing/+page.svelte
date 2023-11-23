<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Display from '$lib/components/typography/Display.svelte';
</script>

<div class="flex">
	<div class="bg-amber-400 my-2 py-5 px-5 mx-2 rounded-2xl
fill-amber-100 flex content-center justify-center items-center">
		<Display class="">Without trim</Display>
	</div>

	<div class="bg-amber-400 my-2 py-5 px-5 mx-2 rounded-2xl
fill-amber-100 flex content-center justify-center items-center">
		<Body>Testing</Body>
	</div>
</div>