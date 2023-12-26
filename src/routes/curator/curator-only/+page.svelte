<script lang="ts">
	import Fab from '$lib/components/controls/Fab.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle.svelte';

	enum CuratorOnlyCases {
		NOT_CURATOR,
		NOT_SIGNED_IN
	}

	export let blockingCase: CuratorOnlyCases;
</script>

<!--<Bg randomized/>-->

<!--is curator-->
<div>
	<PageTitle class="flex flex-col items-center justify-center">Curators only</PageTitle>

	<div class="flex flex-col items-center justify-center mt-20 gap-4">
		<Title class="text-center">These pages are only <br /> accessible by a curator account</Title>
	</div>

	<div class="flex justify-center mt-32">
		<div class="flex gap-9">
			<!--	TODO: Use correct case -->
			{#if blockingCase === CuratorOnlyCases.NOT_CURATOR}
				<Fab class="-mt-20" href="" icon="faCog" size="lg">Set Curator<br />Account</Fab>
			{:else if blockingCase === CuratorOnlyCases.NOT_SIGNED_IN}
				<Fab class="-mt-20" href="" icon="faUserCircle" size="lg">Sign me<br />in</Fab>
				<Fab href="" icon="faSparkles" size="lg">Become a<br />member</Fab>
			{:else}
				<Fab class="-mt-20" href="/" icon="faHome" size="lg">Go home</Fab>
			{/if}
		</div>
	</div>

	<!--	<SiteSwitcher class="mt-28"></SiteSwitcher>-->
</div>
