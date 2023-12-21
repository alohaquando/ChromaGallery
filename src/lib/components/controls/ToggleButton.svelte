<script lang="ts">
	export let toggled: boolean = true;
	let transitionClass = '';
	let buttonClass = '';
	let bgClass = '';
	let borderClass = '';
	$: if (toggled) {
		transitionClass = 'translate-x-1/2';
		borderClass = 'border-transparent';
		bgClass = 'bg-gradient-to-r from-neutral-100 to-neutral-400';
		buttonClass = 'bg-gradient-to-r from-neutral-700 to-neutral-900 border-none ';
	} else {
		transitionClass = '-translate-x-1/2';
		borderClass = 'border-white';
		bgClass = '';
		buttonClass = 'bg-transparent border-white';
	}

	const handleToggle = () => {
		toggled = !toggled;
	};
</script>

<div
	class="{borderClass} w-7 h-4 justify-center items-center inline-flex border-2 rounded-full bg-transparent"
>
	<div
		class="{bgClass} w-7 h-4 absolute rounded-full duration-500 ease-out bg-left-full"></div>
	<div
		class="{transitionClass} {buttonClass} h-3 w-3 border-2 rounded-full transition duration-500 ease-out z-10 shrink-0 grow-0">
	</div>
	<button class="h-10 w-12 rounded-full z-10 absolute" on:click={handleToggle}></button>
</div>