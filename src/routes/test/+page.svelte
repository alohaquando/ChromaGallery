<script>
	import Fab from '$lib/components/Fab/Fab.svelte';
	import Radio from '$lib/components/controls/Radio.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Chip from '$lib/components/controls/Chip.svelte';
</script>

<Button icon="faCog">Button</Button>
<Chip icon="faCircleInfo">Chip</Chip>

<Fab icon="faCircleInfo"></Fab>

<Fab icon="faCircleInfo" buttonSize="lg">hello</Fab>

<Radio id="1"></Radio>
