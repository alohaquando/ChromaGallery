<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import CollectionBlock from '$lib/components/item/CollectionBlock.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';
	import Grid from '$lib/components/item/GridItem.svelte';
	import GridCollection from '$lib/components/item/GridCollection.svelte';
	import { user1 } from '$lib/../data';

	import { collection1, collection2, allCollection, allItem } from '$lib/../data';

	// account name
	// Sign In condition
	export let signIn = true;
</script>

<Bg randomized />
<!-- Sign In -->
<div class="w-full h-full flex flex-col justify-center items-center  {signIn ? '' : 'hidden'}">
	<div class="w-full h-full flex flex-col justify-center items-center gap-8">
		<PageTitle>{user1.name}</PageTitle>

		<Button href="../account/setting" icon="faGear">Account settings</Button>
	</div>

	<!-- My Lists -->
	<div class="w-full flex justify-between items-center pt-20 pb-4">
		<BodyLarge>My lists</BodyLarge>
		<Button icon="faPlus">New lists</Button>
	</div>

	<!--	Bookmark -->
	<div class="w-full flex">
		<CollectionBlock bookmark data={collection1}></CollectionBlock>
	</div>

	<GridCollection class="mt-10"></GridCollection>
</div>

<!-- Not Sign In -->
<div class="w-full flex flex-col justify-center items-center gap-20 {signIn ? 'hidden' : ''}">
	<DisplayLarge>Hi there</DisplayLarge>
	<div class="flex flex-col justify-center items-center text-center gap-8">
		<BodyLarge>You’re not signed in yet</BodyLarge>
		<BodySmall>
			Sign in or become a member to manage your bookmarks and lists of your favorite piece of art
		</BodySmall
		>
	</div>
	<div class="w-full h-60 relative">
		<Fab class="flex mx-1/2 absolute left-[20%]" icon="faCircleUser" size="lg">Sign me in</Fab>
		<Fab class="flex mx-1/2 absolute right-[15%] bottom-0" icon="faSparkles" size="lg"
		>Sign me in
		</Fab
		>
	</div>
</div>
