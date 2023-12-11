<script lang="ts">
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import GridCollection from '$lib/components/item/GridCollection.svelte';
	import { user1 } from '../../../data';

	import { collection1, collection2, allCollection, allItem } from '../../../data';
	import { defaultLayout } from '$lib/stores/pageLayout';


	// account name
	// Sign In condition
	export let signIn = true;
</script>

{#if signIn}
	<!-- Sign In -->
	<div class="w-full h-full flex flex-col justify-center items-center">
		<div class="w-full h-full flex flex-col justify-center items-center gap-8">
			<PageTitle>{user1.name}</PageTitle>

			<Button href="../account/setting" icon="faGear">Account settings</Button>
		</div>

		<!-- My Lists -->
		<div class="w-full flex justify-between items-center pt-20 pb-4">
			<BodyLarge>My lists</BodyLarge>
			<Button href="/list/create" icon="faPlus">New lists</Button>
		</div>

		<!--	Bookmark -->
		<div class="w-full flex">
			<CollectionBlock bookmark data={collection1}></CollectionBlock>
		</div>

		<GridCollection data={allCollection} class="mt-10"></GridCollection>
	</div>
{:else}
	<!-- Not Sign In -->
	<div class="w-full flex flex-col justify-center items-center relative">
		<DisplayLarge class="pt-14">Hi there</DisplayLarge>
		<div class="flex flex-col justify-center items-center text-center gap-8 mt-20">
			<BodyLarge>You’re not signed in yet</BodyLarge>
			<BodySmall>
				Sign in or become a member to manage your bookmarks and lists of your favorite piece of art
			</BodySmall
			>
		</div>
		<div class="pt-14 flex justify-center w-screen">
			<Fab class="relative -left-[10%]" icon="faCircleUser" size="lg">Sign me<br>in</Fab>
			<Fab class="mt-20 relative -right-[5%]" icon="faSparkles" size="lg"
			>Become a<br>member
			</Fab
			>
		</div>
	</div>
{/if}