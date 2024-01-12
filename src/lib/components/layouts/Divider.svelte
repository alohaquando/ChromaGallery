<script lang="ts">
	export let full: boolean = false;
	let customClass = '';
	export { customClass as class };

	let widthClasses: string;
	if (full) {
		widthClasses = 'w-screen -translate-x-6 max-w-5xl';
	} else {
		widthClasses = 'w-full';
	}
</script>

<div class="{customClass} {widthClasses} h-px bg-white opacity-[15%]"></div>
