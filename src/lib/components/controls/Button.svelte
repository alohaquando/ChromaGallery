<script>
    import Body from "$lib/components/typography/Body.svelte";
    export let text;
</script>

<button class="px-5 py-3 rounded-full border border-white border-opacity-30 backdrop-blur-sm justify-center items-center gap-2 inline-flex">
    <div class="">

    </div>
    <Body {text}></Body>
</button>