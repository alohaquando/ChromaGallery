<script lang="ts">
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import HeroImage from '$lib/components/item/HeroImage.svelte';
	import Dialog from '$lib/components/pop-up/Dialog.svelte';
	import Block from '$lib/components/item/Block.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Socials from '$lib/components/socials/Socials.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import GridItem from '$lib/components/item/GridItem.svelte';
	import RowItem from '$lib/components/item/RowItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import FileInput from '$lib/components/inputs/FileInput.svelte';
	import TextField from '$lib/components/inputs/TextField.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
	import LogoCurator from '$lib/components/logo/LogoCurator.svelte';
	import ImageView from '$lib/components/item/ImageView.svelte';
	import ToggleButton from '$lib/components/controls/ToggleButton.svelte';
	import SwitchCurator from '$lib/components/inputs/CuratorSwitch.svelte';
	import FixedButton from '$lib/components/controls/FixedButton.svelte';
	import InfoChip from '$lib/components/controls/InfoChip.svelte';
	import CuratorSwitch from '$lib/components/inputs/CuratorSwitch.svelte';
	import Datalist from '$lib/components/inputs/Datalist.svelte';
	import { getItem } from '$lib/data/item';
	import DragList from '$lib/components/item/DragList.svelte';

	export let data;
</script>

<div class="h-[150vh]"></div>

<div class="flex flex-col justify-center mx-auto gap-5">
	<div class="flex gap-5 items-center [&>p]:shrink-0 [&>p]:grow-0">
		<Button class="ml-5" icon="faCog">Text</Button>
		<Fab></Fab>
		<!--	<FixedButton></FixedButton>-->
		<InfoChip class="grow-0 shrink-0">Text</InfoChip>
		<ToggleButton class="mx-5"></ToggleButton>
	</div>

	<div class="flex justify-between">
		<div class="flex flex-col gap-5 items-center [&>p]:shrink-0 [&>p]:grow-0 w-[47%]">
			<CuratorSwitch></CuratorSwitch>
			<TextField placeholder="Text"></TextField>
			<FileInput></FileInput>
		</div>

		<div class="flex flex-col gap-5 items-center [&>p]:shrink-0 [&>p]:grow-0 w-[47%]">
			<Block item={data.item1}></Block>
		</div>
	</div>

	<div class="flex gap-10">
		<HeroImage class="w-1/2" item={data.item2}></HeroImage>
		<div class="flex flex-col gap-16">
			<CollectionBlock collection={data.list} design="grid"></CollectionBlock>
			<DragList items={data.itemList1}></DragList>
			<CollectionBlock bookmark collection={data.bookmark}></CollectionBlock>
		</div>
	</div>
</div>

<!--<Fab size="md"></Fab>-->

<!--<ToggleButton />-->
<!--<SwitchCurator />-->

<!--<ImageView></ImageView>-->
<!--<LogoCurator></LogoCurator>-->
<!--<SiteSwitcher></SiteSwitcher>-->
<!--<TextField type="date"></TextField>-->
<!--<TextField></TextField>-->

<!--<FileInput></FileInput>-->

<!--<PageTitle>A Title</PageTitle>-->
<!--<HeroImage data={item1}></HeroImage>-->

<!--<Block data={item1} stretch={false}></Block>-->
<!--<CollectionBlock style="grid" data={collection1}></CollectionBlock>-->

<!--<div class="gap-5 flex mt-5">-->
<!--<Link type="body">display</Link>-->
<!--<Link type="title">display</Link>-->
<!--<Link type="headline">display</Link>-->
<!--<Link type="display">display</Link>-->
<!--</div>-->

<!--<Block icon></Block>-->
<!--<Block icon bookmark></Block>-->
<!--<div class="h-28 w-36 flex">-->
<!--	<Block bookmark></Block>-->
<!--</div>-->
<!--<div class="h-72 w-96 flex">-->
<!--	<Block src="https://via.placeholder.com/342x272"></Block>-->
<!--</div>-->

<!--<ModalInfo buttonText="Buton" title="Modao"></ModalInfo>-->

<!--<Socials design="facebook"></Socials>-->
<!--<Socials design="google" signup={false}></Socials>-->
<!--<Socials design="apple"></Socials>-->

<!--<Dialog title="Warning" text="COOKIES!!!!! !!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!!!!" option1="Ignore" option2="Accept"></Dialog>-->

<!--<Grid data={dataInput}></Grid>-->
