<script>
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	export let icon;
	let customClass = '';
	export { customClass as class };
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
		? 'hover:bg-white/30 hover:text-gray-900 hover:before:opacity-100 hover:after:opacity-100'
		: 'bg-gray-900 rounded-lg text-white'}
        {state === State.Active ? 'bg-white/50 text-gray-900 active:bg-white/100' : 'border border-white border-opacity-30'}
        {state === State.Enabled && type === Type.Actionable ? 'text-opacity-70' : ''}
   after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
   before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/0 via-white/40 to-white before:rounded-full before:blur-md before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
">
	{#if state === State.Active}
		<Icon {icon} iconType="solid" iconSize="sm"></Icon>
	{:else}
		<Icon {icon} iconSize="sm"></Icon>
	{/if}
	<BodySmall class="{customClass}"><slot /></BodySmall>
</button>
