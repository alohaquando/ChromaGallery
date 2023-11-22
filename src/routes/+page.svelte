<script>
    import Button from "$lib/components/controls/Button.svelte";
    import Chip from "$lib/components/controls/Chip.svelte";
    import { Fa } from "svelte-fa";
    import NavItem from "$lib/components/controls/NavItem.svelte";
</script>

<h1 class="text-3xl font-bold underline text-red-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>Buttons</div>

<Button state={"DISABLED"} text={"Button"}></Button>
<Button style={"DEFAULT"} text={"Button"}></Button>
<Button text={"Button"}></Button>

<div><span class="line-through">Fish&</span>Chips</div>

<Chip type={"VIEW-ONLY"} text={"Chip"}></Chip>
<Chip state={"ACTIVE"} text={"Chip"}></Chip>
<Chip text={"Chip"}></Chip>

<div>Nav item</div>

<NavItem text="Search"></NavItem>
<NavItem active="TRUE" text="Search"></NavItem>

<p>Hello</p>