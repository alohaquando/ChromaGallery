<!--suppress ALL -->
<script lang="ts">
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';

	export let id: string;
	export let placeholder: string;
	export let name: string;
	export let label: string | undefined = undefined;
	export let labelSize: 'base' | 'lg' | undefined = 'base';
	let labelComponent = Body;
	switch (labelSize) {
		case 'base':
			labelComponent = Body;
			break;
		case 'lg':
			labelComponent = BodyLarge;
			break;
	}
	export let error: boolean = false;
	export let errorMessage: string | undefined = 'Please check this input again';
	// export let icon: string | undefined = undefined;
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
	let requiredClass = required ? ' after:text-3xl after:absolute after:-right-4 after:-top-2' : '';
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
	export let value: string | undefined | null = null;

	let stateClasses: string;
	$: if (error) {
		stateClasses = '!border-red-300';
	} else {
		stateClasses = ''
	}

	let isFocused: boolean = false;
	const handleInputFocus = () => {
		isFocused = !isFocused;
	};

	let focusedClass = '';
	$: isFocused, focusedClass = isFocused ? 'border border-opacity-100' : 'border border-opacity-30';
</script>

<div class="relative flex w-full flex-col">
	{#if label}
		<label class="relative w-fit block mb-2 trim-both pb-6 {requiredClass}" for={id}>
			<svelte:component this={labelComponent}>{label}</svelte:component>
		</label>
	{/if}

	<input
		{...{ type }}
		{autocomplete}
		bind:value
		class="w-full disabled:placeholder-white/30 disabled:text-white/70 placeholder-white/50 outline-none text-white font-sans focus:right-0 bg-black/30 {stateClasses} {focusedClass} flex rounded-xl w-full p-2.5 trim-both border-white transition read-only:bg-black/10"
		{disabled}
		{form}
		{id}
		{max}
		{maxlength}
		{min}
		{minlength}
		{name}
		on:blur={handleInputFocus}
		on:change
		on:focus={handleInputFocus}
		on:input
		{pattern}
		{placeholder}
		{readonly}
		{required}
		{size}
	/>
	<!--{#if value && !disabled}-->
	<!--	<Fab on:click={clearValue} size="mini" noOutline icon="faXmark" class="" />-->
	<!--{/if}-->
	{#if error}
		<div class="flex items-center pt-4 text-red-300 space-x-2">
			<Icon icon="faExclamationCircle" />
			<label class="mb-2 block font-sans text-sm trim-both" for={id}>{errorMessage}</label>
		</div>
	{/if}
</div>

<style>
    ::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>
