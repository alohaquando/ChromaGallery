<script>
	import Fab from '$lib/components/Fab/Fab.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Chip from '$lib/components/controls/Chip.svelte';
</script>

<Button icon="faCog">Button</Button>
<Chip icon="faCircleInfo">Chip</Chip>

<Fab icon="faCircleInfo"></Fab>

<Fab icon="faCircleInfo" size='lg' text>hello</Fab>

<div class="h-screen w-full bg-amber-500 flex">a</div>