<script lang="ts">
	import ToggleButton from '$lib/components/controls/ToggleButton.svelte';
	import Body from '$lib/components/typography/Body.svelte';

	export let toggled: boolean;
	export let toggleOnChange = () => {
	};
</script>

<div class="w-full inline-flex gap-4 flex-col py-5">
	<div class="justify-between items-center inline-flex relative">
		<Body class="font-bold">Curator account</Body>
		<ToggleButton bind:toggled {toggleOnChange}/>
	</div>
	<Body
		>A Curator account allows you to manage items and collections within Chroma Gallery using a
		separate site.
	</Body>
</div>
