<script lang="ts">
	import ListItem from '$lib/components/item/ListItem.svelte';
</script>

<ListItem href="/" leadingText="df" trailingText="fajsdlf" />
<ListItem href="/" trailingText="fajsdlf" />
<ListItem
	clickable
	design="destructive"
	href="/"
	icon="faCar"
	leadingText="df"
	on:click={() => {
		window.alert('fsa');
	}}
	topDivider={false}
/>
