<script lang="ts">
	export let toggled: boolean;
	let buttonClass = '';
	let bgClass = '';

	$: if (toggled) {
		bgClass =
			'bg-gradient-to-r from-neutral-100 to-neutral-400 border-none before:opacity-100 after:opacity-100';
		buttonClass = 'translate-x-1/2 bg-gradient-to-r from-neutral-500 to-neutral-800 border-none ';
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
	class="{customClass} {bgClass} w-7 h-4 justify-center items-center inline-flex border-2 rounded-full bg-transparent grow-0 shrink-0 relative

			after:content-[''] after:h-4 after:w-full after:rounded-full after:absolute after:top-auto after:bg-white after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
      before:content-[''] before:h-4 before:w-full before:bg-gradient-to-b from-black/40 via-white/60 to-white before:rounded-full before:blur-sm before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
>
	<div
		class="{buttonClass} h-3 w-3 border-2 rounded-full transition duration-500 ease-out z-10 shrink-0 grow-0"
	></div>
	<button class="h-10 w-12 rounded-full z-10 absolute" on:click={handleToggle} type="button"
	></button>
</div>
