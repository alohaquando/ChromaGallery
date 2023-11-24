<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let text = 'Text';
	export let icon;
	const Type = {
		Actionable: 'ACTIONABLE',
		ViewOnly: 'VIEW-ONLY'
	};
	const State = {
		Enabled: 'ENABLED',
		Active: 'ACTIVE'
	};
	export let type = Type.Actionable;
	export let state = State.Enabled;
</script>

<button
	class="px-3 py-2 rounded-full backdrop-blur-sm justify-center items-center gap-1.5 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-sm text-center leading-[14px]
        {type === Type.Actionable
		? 'hover:bg-white/60 hover:text-gray-900 hover:before:opacity-70 hover:after:opacity-70'
		: 'bg-gray-900 rounded-lg text-white'}
        {state === State.Active
		? 'bg-white/50 text-gray-900 active:bg-white/100'
		: 'border border-white border-opacity-30'}
        {state === State.Enabled && type === Type.Actionable ? 'text-opacity-70' : ''}
        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-lg after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/20 via-white/40 to-white/80 before:rounded-full before:blur-lg before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
"
>
	{#if state === State.Active}
		<Icon {icon} iconType="solid" size="sm"></Icon>
	{:else}
		<Icon {icon} size="sm"></Icon>
	{/if}
	<Body>{text}</Body>
</button>
