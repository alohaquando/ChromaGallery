<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let text = 'Text';
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
	export let style = Style.Outlined;
</script>

<button
	class="px-5 py-3 rounded-full backdrop-blur-sm justify-center items-center gap-2 inline-flex line-clamp-1 overflow-visible ease-out duration-300
        {fullWidth === FullWidth.True ? 'w-full' : ''}
        {state === State.Enabled
		? 'hover:bg-white/60 hover:text-gray-900 hover:before:opacity-70 hover:after:opacity-70'
		: 'text-white/50'}
        {style === Style.Default
		? 'bg-white text-gray-900 active:bg-white/80'
		: 'border border-white border-opacity-30'}
        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/20 via-white/40 to-white/80 before:rounded-full before:blur-lg before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
>
	<Icon {icon}></Icon>
	<Body>{text}</Body>
</button>
