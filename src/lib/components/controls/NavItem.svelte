<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	let customClass = '';
	export { customClass as class };
	export let icon;
	const Active = {
		True: 'TRUE',
		False: 'FALSE'
	};
	export let active = Active.False;
</script>

<button
	class="px-3 py-2 flex-col justify-center items-center gap-1 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-white text-sm text-center leading-[14px] relative
        {active === Active.True ? '' : 'after:hidden'}
        after:content-[''] after:h-16 after:w-16 after:rounded-full after:absolute after:bg-gradient-to-b from-white/20 to-white after:duration-1000 after:ease-out after:-z-10 after:blur-lg
"
>
	<Icon {icon} iconSize="xl"></Icon>
	<Body class="{customClass}"><slot /></Body>
</button>
