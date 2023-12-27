<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import GridCollection from '$lib/components/item/GridCollection.svelte';
	import type { PageData } from './$types';

	/** @type {import('../../../../../.svelte-kit/types/src/routes').PageLoad} */
	export let data: PageData;
	let lists = data.lists ? data.lists.filter((list) => list.id !== 'bookmark') : undefined;
	console.log(lists);
	let bookmark = data.lists ? data.lists.find((list) => list.id === 'bookmark') : undefined;
</script>


{#if data.session}
	<!-- Sign In -->
	<div class="w-full h-full flex flex-col justify-center items-center">
		<div class="w-full h-full flex flex-col justify-center items-center gap-8 mb-20">
			<PageTitle>{data.session.displayName}</PageTitle>
			<Button href="account/setting" icon="faGear">Account settings</Button>
		</div>

		{#if data.session.isCurator}
			<!--Curator Site-->
			<SiteSwitcher toggled={data.session.isCurator} class=""></SiteSwitcher>
			<Divider class="my-10"></Divider>
		{/if}

		<!-- My Lists -->
		<div class="w-full flex justify-between items-center mb-4">
			<BodyLarge>My lists</BodyLarge>
			<Button href="/user/list/create" icon="faPlus">New lists</Button>
		</div>

		<!--	Bookmark -->
		<div class="w-full flex">
			<CollectionBlock collection={bookmark} bookmark></CollectionBlock>
		</div>

		<GridCollection class="mt-10" collections={lists}></GridCollection>
	</div>
{:else}
	<!-- Not Sign In -->
	<div class="w-full flex flex-col justify-center items-center relative">
		<DisplayLarge class="pt-14">Hi there</DisplayLarge>
		<div class="flex flex-col justify-center items-center text-center gap-8 mt-20">
			<BodyLarge>You’re not signed in yet</BodyLarge>
			<BodySmall>
				Sign in or become a member to manage your bookmarks and lists of your favorite piece of art
			</BodySmall>
		</div>
		<div class="pt-14 flex justify-center w-screen">
			<Fab class="relative -left-[10%]" icon="faCircleUser" size="lg" href="account/sign-in"
			>Sign me<br />in
			</Fab>
			<Fab class="mt-20 relative -right-[5%]" icon="faSparkles" size="lg" href="account/register"
			>Become a<br />member
			</Fab>
		</div>
	</div>
{/if}
