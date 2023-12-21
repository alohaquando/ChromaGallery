<script lang="ts">
	export let toggled: boolean = false;
	let buttonClass = '';
	let bgClass = '';

	$: if (toggled) {
		bgClass = 'bg-gradient-to-r from-neutral-100 to-neutral-400 border-none';
		buttonClass = 'translate-x-1/2 bg-gradient-to-r from-neutral-700 to-neutral-900 border-none ';
	} else {
		bgClass = 'bg-transparent border-white';
		buttonClass = '-translate-x-1/2 bg-transparent border-white';
	}

	let customClass = '';
	export { customClass as class };

	const handleToggle = () => {
		toggled = !toggled;
	};
</script>

<div
	class="{customClass} {bgClass} w-7 h-4 justify-center items-center inline-flex border-2 rounded-full bg-transparent grow-0 shrink-0"
>
	<div
		class="{buttonClass} h-3 w-3 border-2 rounded-full transition duration-500 ease-out z-10 shrink-0 grow-0">
	</div>
	<button class="h-10 w-12 rounded-full z-10 absolute" on:click={handleToggle} type="button"></button>
</div>