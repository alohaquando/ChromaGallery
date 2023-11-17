<script>
    import Body from "$lib/components/typography/Body.svelte";
    import Fa from "svelte-fa";
    import {faCog} from "@fortawesome/pro-regular-svg-icons";
    export let text = "Text";
    export const State = {
        Enabled: "ENABLED",
        Disabled: "DISABLED"
    }
    export const Style = {
        Outlined: "OUTLINED",
        Default: "DEFAULT"
    }
    export let state = State.Enabled;
    export let style = Style.Outlined;
</script>

<button class="px-5 py-3 rounded-full border border-white border-opacity-30 backdrop-blur-sm justify-center items-center gap-2 inline-flex
        {state === State.Enabled ? 'text-opacity-50' : ''}
        {style === Style.Default ? 'bg-white text-gray-900' : ''}">
<Fa icon={faCog}
    size="${16}x"
    color="{style === Style.Default ? 'black' : 'white'}" />
    <Body {text}></Body>
</button>