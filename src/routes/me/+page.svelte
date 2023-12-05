<script>
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import BodySmall from '$lib/components/typography/BodySmall.svelte';
	import BlockItem from '$lib/components/item/BlockItem.svelte';
	import Fab from '$lib/components/controls/Fab.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';

	// account name
	export let name = 'Sheen Hahn';
	// Sign In condition
	export let signIn = true;
</script>

<Bg />
<!-- Sign In -->
<div class="w-full h-full flex flex-col justify-center items-center  {signIn ? '' : 'hidden'}">
	<div class="w-full h-full flex flex-col justify-center items-center gap-8">
		<PageTitle>{name}</PageTitle>

		<Button icon="faGear">Account settings</Button>
	</div>

	<!-- My Lists -->
	<div class="w-full flex justify-between items-center pt-20 pb-4">
		<BodyLarge>My lists</BodyLarge>
		<Button icon="faPlus">New lists</Button>
	</div>

	<!--	Bookmark -->
	<div class="w-full flex pb-10">
		<BlockItem itemNum={12} title="Bookmark"></BlockItem>
	</div>

	<div class="w-full flex flex-col items-start justify-center gap-10 ">
		<div class="w-full flex justify-center gap-4">
			<BlockItem itemNum={12} title="Title"></BlockItem>
			<BlockItem itemNum={12} title="Title"></BlockItem>
		</div>
		<div class="w-full flex justify-center gap-4">
			<BlockItem itemNum={12} title="Title"></BlockItem>
			<BlockItem itemNum={12} title="Title"></BlockItem>
		</div>
	</div>
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
