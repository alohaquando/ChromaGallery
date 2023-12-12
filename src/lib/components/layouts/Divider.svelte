<script lang="ts">
	export let full: boolean = false;
	let customClass = '';
	export { customClass as class };

	let widthClasses: string;
	if (full) {
		widthClasses = 'w-screen -translate-x-6';
	} else {
		widthClasses = 'w-full';
	}
</script>

<div class=" h-px bg-white opacity-[15%] {customClass} {widthClasses}"></div>
