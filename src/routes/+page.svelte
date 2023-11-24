<script>
<<<<<<< Updated upstream
    import Link from "$lib/components/links/Link.svelte";
=======
	import Button from '$lib/components/controls/Button.svelte';
	import Chip from '$lib/components/controls/Chip.svelte';
	import { Fa } from 'svelte-fa';
	import NavItem from '$lib/components/controls/NavItem.svelte';
	import Links from '$lib/components/links/Links.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Background from '$lib/components/pages/Background.svelte';
	import FAB1 from '$lib/components/FAB/FAB1.svelte';
>>>>>>> Stashed changes
</script>

<h1 class="text-3xl font-bold underline text-red-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<<<<<<< Updated upstream
<Link link="/test" text="Test page here."></Link>
=======
<div>Buttons</div>

<Button icon="faCog" state={'DISABLED'} text={'Button'}></Button>
<Button icon="faCog" style={'DEFAULT'} text={'Button'}></Button>
<Button icon="faCog" text={'Button'}></Button>

<div><span class="line-through">Fish&</span>Chips</div>

<Chip icon="faCircleInfo" type={'VIEW-ONLY'} text={'Chip'}></Chip>
<Chip icon="faCircleInfo" state={'ACTIVE'} text={'Chip'}></Chip>
<Chip icon="faCircleInfo" text={'Chip'}></Chip>

<div>Nav item</div>

<NavItem icon="faSearch" text="Search"></NavItem>
<NavItem icon="faSearch" active="TRUE" text="Search"></NavItem>

<div>Links</div>

<Links link="/" text="This is a link"></Links>
<div class="text-2xl"><Links link="/" size="MEDIUM" text="This is a bigger link"></Links></div>
<div class="text-4xl"><Links link="/" size="LARGE" text="This is an even bigger link"></Links></div>

<Icon></Icon>

<!-- <Background /> -->

<FAB1 />
>>>>>>> Stashed changes
