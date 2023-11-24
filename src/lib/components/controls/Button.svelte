<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	export let textClass = '';
	let customClass = "";
	export {customClass as class}
	export let icon;
	const FullWidth = {
		True: 'TRUE',
		False: 'FALSE'
	};
	const State = {
		Enabled: 'ENABLED',
		Disabled: 'DISABLED'
	};
	const Style = {
		Outlined: 'OUTLINED',
		Default: 'DEFAULT'
	};
	export let fullWidth = FullWidth.False;
	export let state = State.Enabled;
	let style = Style.Outlined;
	export {style as buttonStyle}
</script>

<button
	class="{customClass} px-5 py-3 rounded-full backdrop-blur-sm justify-center items-center gap-2 inline-flex line-clamp-1 overflow-visible ease-out duration-300
        {fullWidth === FullWidth.True ? 'w-full' : ''}
        {state === State.Enabled
		? 'hover:bg-white/40 hover:text-gray-900 hover:before:opacity-100 hover:after:opacity-100'
		: 'text-white/50'}
        {style === Style.Default ? 'bg-white text-gray-900 active:bg-white/80 hover:bg-white/70'
		: 'border border-white border-opacity-30'}
        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/0 via-white/40 to-white before:rounded-full before:blur-md before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
">
	<Icon {icon}></Icon>
	<Body class="{textClass}"><slot /></Body>
</button>
