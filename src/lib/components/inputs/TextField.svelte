<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let id: string;
	export let placeholder: string;
	export let name: string;
	export let label: string | undefined = undefined;
	export let error: boolean = false;
	export let errorMessage: string | undefined = 'Please check this input again';
	export let type:
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'month'
		| 'number'
		| 'password'
		| 'range'
		| 'search'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week' = 'text';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let autocomplete: string | null | undefined = undefined;
	export let form: string | undefined = undefined;
	export let min: number | any | undefined = undefined;
	export let max: number | any | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let pattern: any | undefined = undefined;
	export let size: number | undefined = undefined;
	export let value: string | Date | undefined | null = null;

	let stateClasses: string;
	if (error) {
		stateClasses = '!border-red-300';
	}

	let inputClass = 'bg-black/30 border border-white/30 rounded-xl placeholder-white/50 block w-full p-2.5 transition outline-none text-white font-sans trim-both focus:ring-white focus:ring-2 disabled:placeholder-white/30 disabled:text-white/70 read-only:focus:ring-0 read-only:text-white/70';
</script>

<div class="flex flex-col w-full relative">
	{#if label}
		<label class="block mb-2 text-sm font-sans trim-both pb-4" for={id}>{label}</label>
	{/if}
	<input
		{...{ type }}
		{autocomplete}
		bind:value
		class="{stateClasses} {inputClass}"
		{disabled}
		{form}
		{id}
		{max}
		{maxlength}
		{min}
		{minlength}
		{name}
		on:change
		{pattern}
		{placeholder}
		{readonly}
		{required}
		{size}

	/>

	{#if error}
		<div class="flex space-x-2 items-center text-red-300 pt-4">
			<Icon icon="faExclamationCircle" />
			<label class="block mb-2 text-sm font-sans trim-both" for={id}>{errorMessage}</label>
		</div>
	{/if}
</div>

<style>
    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>
