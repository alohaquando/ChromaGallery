<script lang="ts">
	export let color: string = 'B61BFF';
	export let design: 'top' | 'top-large' | 'center' = 'top';

	let formattedColor: string;
	$: formattedColor = `#${color}`;

	let designClassesCirclePrimary: string;
	let designClassesCircleSecondary: string;
	let designClassesCirclePositioning: string;
	// noinspection JSUnreachableSwitchBranches
	switch (design) {
		case 'top': {
			designClassesCirclePositioning = 'h-full'
			designClassesCirclePrimary = 'top-[10%] transform -translate-y-1/2 left-6 right-6 h-auto aspect-square bg-gradient-to-t from-white/95';
			designClassesCircleSecondary = 'top-[10%] transform -translate-y-1/2 left-6 right-6 h-auto aspect-square bg-gradient-to-t from-transparent via-black/10 to-black/20 ';
			break;
		}
		case 'top-large': {
			designClassesCirclePositioning = 'h-full'
			designClassesCirclePrimary = ' w-[150%] h-auto aspect-square top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-white/60';
			designClassesCircleSecondary = 'w-[150%] h-auto aspect-square top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-black/30 to-black/40';
			break;
		}
		case 'center': {
			designClassesCirclePositioning = 'h-screen'
			designClassesCirclePrimary = 'w-[60%] h-auto aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-white';
			designClassesCircleSecondary = 'w-[60%] h-auto aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-black/20';
			break;
		}
	}
</script>

<!--<editor-fold desc="Background">-->
<div class="absolute top-0 left-0 w-screen h-[150vh] overflow-hidden">

	<!--<editor-fold desc="Full linear gradient">-->
	<div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-b from-white/50 -z-30" />
	<!--</editor-fold>-->

	<!--<editor-fold desc="Positioning for circles">-->
	<div class="container max-w-2xl mx-auto relative -z-30 {designClassesCirclePositioning}">
		<!--<editor-fold desc="Main circle, below color overlay">-->
		<div
			class="absolute rounded-full blur-2xl {designClassesCirclePrimary}" />
		<!--</editor-fold>-->
		<!--<editor-fold desc="Secondary circle, above color overlay">-->
		<div
			class="absolute rounded-full blur-2xl {designClassesCircleSecondary}" />
		<!--</editor-fold>-->
	</div>
	<!--</editor-fold>-->

	<!--<editor-fold desc="Color overlay">-->
	<div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full mix-blend-color-burn -z-20 "
			 style="background-color: {formattedColor}; " />
	<!--</editor-fold>-->
</div>
<!--</editor-fold>-->

