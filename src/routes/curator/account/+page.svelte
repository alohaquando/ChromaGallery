<script lang="ts">
	import Bg from '$lib/components/backgrounds/BG.svelte';
	import SiteSwitcher from '$lib/components/navigation/SiteSwitcher.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Button from '$lib/components/controls/Button.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';

	export let data;
</script>

<PageTitle>{data.session?.displayName}</PageTitle>

<div class="flex flex-col items-center justify-center">
	<Button class="mt-8 mb-12 mx-auto" href="/account/setting" icon="faCog">Account settings</Button>
</div>

<SiteSwitcher toggled={true} type="default"></SiteSwitcher>
