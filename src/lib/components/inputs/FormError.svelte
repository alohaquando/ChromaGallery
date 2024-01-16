<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
</script>

<div
	class="flex w-full border-white/20 border rounded-full items-center space-x-2 justify-center py-6 px-6 bg-red-900/30"
>
	<Icon icon="faExclamationCircle" />
	<Body>
		<slot />
	</Body>
</div>
