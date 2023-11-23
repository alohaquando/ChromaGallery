<script>
import Chip from "$lib/components/controls/Chip.svelte";
import Link from "$lib/components/links/Link.svelte";
import Icon from "$lib/components/Icon.svelte";
import NavItem from "$lib/components/controls/NavItem.svelte";
import Button from "$lib/components/controls/Button.svelte";
import Logo from "$lib/components/logo/Logo.svelte";
</script>

<div>Buttons</div>

<Button icon="faCog" state={"DISABLED"} text={"Button"}></Button>
<Button icon="faCog" style={"DEFAULT"} text={"Button"}></Button>
<Button icon="faCog" text={"Button"}></Button>

<div><span class="line-through">Fish&</span>Chips</div>

<Chip icon="faCircleInfo" type={"VIEW-ONLY"} text={"Chip"}></Chip>
<Chip icon="faCircleInfo" state={"ACTIVE"} text={"Chip"}></Chip>
<Chip icon="faCircleInfo" text={"Chip"}></Chip>

<div>Nav item</div>

<NavItem icon="faSearch" text="Search"></NavItem>
<NavItem icon="faSearch" active="TRUE" text="Search"></NavItem>

<div>Links</div>

<Link link="/" text="This is a link"></Link>
<div class="text-2xl"><Link link="/" size="MEDIUM" text="This is a bigger link"></Link></div>
<div class="text-4xl"><Link link="/" size="LARGE" text="This is an even bigger link"></Link></div>

<Logo></Logo>