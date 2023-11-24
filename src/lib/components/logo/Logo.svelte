<script>
	import Body from "$lib/components/typography/Body.svelte";
  let customClass = '';
  export { customClass as class };
</script>

<span class="justify-center items-center inline-flex">
  <Body class={customClass}><slot /></Body>
</span>