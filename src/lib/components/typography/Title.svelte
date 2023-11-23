<script>
	let customClass = '';
	export { customClass as class };
</script>

<p class="font-sans trim-both text-xl {customClass}">
	<slot />
</p>