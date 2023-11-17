<script>
    import Button from "$lib/components/controls/Button.svelte";
</script>

<h1 class="text-3xl font-bold underline text-red-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button text={"Button"}></Button>
<Button state={State.Disabled} style={Style.Outlined} text={"Button"}></Button>

<p>Hello</p>