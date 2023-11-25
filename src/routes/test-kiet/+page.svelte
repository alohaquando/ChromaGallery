<script>
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<BlockItem itemNum={1}></BlockItem>
<BlockItem itemNum={28} style='grid'></BlockItem>

<div class="gap-5 flex mt-5">
<Link type="body">display</Link>
<Link type="title">display</Link>
<Link type="headline">display</Link>
<Link type="display">display</Link>
</div>