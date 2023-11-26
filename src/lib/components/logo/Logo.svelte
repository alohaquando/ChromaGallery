<script>
	import Body from "$lib/components/typography/Body.svelte";
  let customClasses = '';
  export { customClasses as class };
</script>

<span class="flex-col w-fit justify-center text-center {customClasses}">
  <Body>that online</Body>
  <Body>museum</Body>
</span>