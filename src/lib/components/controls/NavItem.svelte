<script>
  import Body from "$lib/components/typography/Body.svelte";
  import Fa from "svelte-fa";
  import {faSearch} from "@fortawesome/pro-regular-svg-icons";
  export let color = "white";
  export let text = "Text";
  const Active = {
    True: "TRUE",
    False: "FALSE"
  }
  export let active = Active.False;
</script>

<button
  class="px-3 py-2 flex-col justify-center items-center gap-1 inline-flex line-clamp-1 overflow-visible ease-out duration-300 text-white text-sm text-center leading-[14px] relative rounded-full
        {active === Active.True ? '' : 'after:hidden'}
        after:content-[''] after:h-16 after:w-16 after:rounded-full after:absolute after:bg-gradient-to-b from-white/20 to-white after:duration-1000 after:ease-out after:-z-10 after:blur-lg
">
  <Fa icon={faSearch} class="text-xl"/>
  <Body {text}></Body>
</button>