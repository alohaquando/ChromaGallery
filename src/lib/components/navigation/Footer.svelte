<script>
	import Fab from '$lib/components/controls/Fab.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Divider from '$lib/components/layouts/Divider.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import Link from '$lib/components/links/Link.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
</script>

<div class="py-16 w-full justify-start items-start gap-8 inline-flex flex-col">
	<Fab icon="faArrowUp" size='lg'>Back to top</Fab>
	<Divider></Divider>
	<Title>Get in contact</Title>
	<div class="inline-flex justify-between w-full">
		<Fab color="blue" href="" icon="faFacebook" type="brands"></Fab>
		<Fab href="" icon="faInstagram" type="brands"></Fab>
		<Fab href="" icon="faXTwitter" type="brands"></Fab>
		<Fab href="" icon="faYoutube" type="brands"></Fab>
	</div>
	<Divider></Divider>
	<Title>Account</Title>
	<Body>Manage your bookmarks and lists of your favourite piece of art with an that online museum
	account
	</Body>
	<Button href="">Become a member</Button>
	<Divider></Divider>
	<div class="w-full flex justify-between items-center">
		<div>
			<Link href="">Privacy</Link>
			<Link class="ml-5" href="">Terms</Link>
		</div>
		<span class="text-white/50 items-center flex"><Icon icon="faCopyright"></Icon><Body class="text-white/50">2023 Chroma Gallery</Body></span>
	</div>
</div>