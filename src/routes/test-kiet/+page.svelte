<script>
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import Block from '$lib/components/block/Block.svelte';
	import Modal from '$lib/components/pop-up/Modal.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
</script>

<HeroImage src="https://via.placeholder.com/342x272" name="Shrimp" artist="Shrimp" time="1:43 AM 11/26/2023"></HeroImage>

<BlockItem itemNum={1} title="My collection" subtitle="Single collection"></BlockItem>
<BlockItem itemNum={28} style='grid' title="Grid collection" subtitle=""></BlockItem>

<div class="gap-5 flex mt-5">
<Link type="body">display</Link>
<Link type="title">display</Link>
<Link type="headline">display</Link>
<Link type="display">display</Link>
</div>

<Block type="placeholder" size="small"></Block>
<Block type="bookmark" size="small"></Block>
<div class="h-28 w-36 flex">
	<Block type="bookmark" size="fit"></Block>
</div>
<div class="h-32 w-44 flex">
	<Block type="placeholder" size="fit"></Block>
</div>

<!--<Modal buttonText="Buton" title="Modao"></Modal>-->

<Socials design='facebook'></Socials>
<Socials design='google' signup= {false}></Socials>
<Socials design='apple'></Socials>

<!--<Dialog title="Warning" text="COOKIES!!!!! !!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!!" option1="Ignore" option2="Accept"></Dialog>-->