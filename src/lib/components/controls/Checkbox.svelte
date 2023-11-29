<script lang="ts">
	export let id: string;
	export let name: string;
	export let value: string;
	export let checked: boolean = false;
	import Icon from '$lib/components/iconography/Icon.svelte';
</script>

<div class="inline-flex items-center">
	<label class="relative flex items-center rounded-full cursor-pointer" for={id}>
		<input
			{checked}
			class=" peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-white/50 transition-all checked:bg-white"
			{id}
			{name}
			type="checkbox"
			{value}
		/>

		<!-- Icon span	-->
		<span
			class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
		>
			<Icon icon="faCheck" size="sm" type="solid"></Icon>
		</span>
	</label>
</div>
