<script>
    import Body from "$lib/components/typography/Body.svelte";
    import Fa from "svelte-fa";
    import {faCog} from "@fortawesome/pro-regular-svg-icons";
    export let text = "Text";
    const State = {
        Enabled: "ENABLED",
        Disabled: "DISABLED"
    }
    const Style = {
        Outlined: "OUTLINED",
        Default: "DEFAULT"
    }
    export let state = State.Enabled;
    export let style = Style.Outlined;
</script>

<button class="px-5 py-3 rounded-full border border-white border-opacity-30 backdrop-blur-sm justify-center items-center gap-2 inline-flex line-clamp-1 overflow-visible ease-out duration-3a00
        {state === State.Enabled ? 'hover:text-black hover:before:opacity-70 hover:after:opacity-70' : 'text-white/50'}
        {style === Style.Default ? 'bg-white text-gray-900 hover:bg-white/60' : 'hover:bg-white/40'}
        after:content-[''] after:h-full after:w-full after:rounded-full after:absolute after:top-auto after:bg-gradient-to-b from-white/0 to-white after:blur-md after:opacity-0 after:duration-1000 after:ease-out after:-z-10
        before:content-[''] before:h-full before:w-full before:bg-gradient-to-b from-white/20 via-white/40 to-white/80 before:rounded-full before:blur-md before:absolute before:opacity-0 before:duration-1000 before:ease-out before:-z-10
">
<Fa icon={faCog} class=""
    size="${16}x"
/>
    <Body {text}></Body>
</button>