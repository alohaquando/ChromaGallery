<script lang="ts">
	import { currentBg } from '$lib/stores/background';

	export let hue: number = 30;
	export let saturation: number = 60;
	export let lightness: number = 60;

	export let design: 'top' | 'top-large' | 'center' | 'hidden' | string = 'top';

	export let randomized: boolean = false;

	if (randomized) {
		setInterval(() => {
			hue = Math.floor(Math.random() * 360);
			saturation = Math.floor(Math.random() * (101 - 60) + 60);
			lightness = Math.floor(Math.random() * (91 - 60) + 60);
			currentBg.update((data) => ({
				...data,
				hue,
				saturation,
				lightness
			}));
		}, 5000);
	}

	let designClassesCirclePrimary: string;
	let designClassesCircleSecondary: string;
	let designClassesCirclePositioning: string;
	// noinspection JSUnreachableSwitchBranches
	$: switch (design) {
		case 'top': {
			designClassesCirclePositioning = 'h-full';
			designClassesCirclePrimary =
				'top-[10%] transform -translate-y-1/2 translate-z-0 left-6 right-6 h-auto aspect-square bg-gradient-to-t from-white/95';
			designClassesCircleSecondary =
				'top-[10%] transform -translate-y-1/2 translate-z-0 left-6 right-6 h-auto aspect-square bg-gradient-to-t from-transparent via-black/30 to-black/40 ';
			break;
		}
		case 'top-large': {
			designClassesCirclePositioning = 'h-full';
			designClassesCirclePrimary =
				' w-[150%] h-auto aspect-square top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-0 bg-gradient-to-t from-white/60';
			designClassesCircleSecondary =
				'w-[150%] h-auto aspect-square top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  translate-z-0 bg-gradient-to-t from-transparent via-black/30 to-black/40';
			break;
		}
		case 'center': {
			designClassesCirclePositioning = 'h-screen';
			designClassesCirclePrimary =
				'w-[80%] h-auto aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-z-0 bg-gradient-to-t from-white';
			designClassesCircleSecondary =
				'w-[80%] h-auto aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  translate-z-0 bg-gradient-to-t from-transparent via-black/20 to-black/30  ';
			break;
		}
		case 'hidden': {
			designClassesCirclePositioning = 'opacity-0';
			designClassesCirclePrimary = 'opacity-0';
			designClassesCircleSecondary = 'opacity-0';
		}
	}

	let customClass = '';
	export { customClass as class };
</script>

<!--<editor-fold desc="Background">-->
<div
	class="{customClass} absolute top-0 left-0 w-screen h-[150vh] overflow-hidden select-none pointer-events-none"
>
	<!--<editor-fold desc="Full linear gradient">-->
	<div
		class="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-b from-white/50 -z-30"
	/>
	<!--</editor-fold>-->

	<!--<editor-fold desc="Positioning for circles">-->
	<div
		class="container max-w-2xl mx-auto relative -z-30 transition duration-500 {designClassesCirclePositioning}"
	>
		<!--<editor-fold desc="Main circle, below color overlay">-->
		<div
			class="absolute rounded-full blur-2xl blur-fix transition duration-500 {designClassesCirclePrimary}"
		/>
		<!--</editor-fold>-->
		<!--<editor-fold desc="Secondary circle, above color overlay">-->
		<div class="absolute rounded-full blur-2xl {designClassesCircleSecondary}" />
		<!--</editor-fold>-->
	</div>
	<!--</editor-fold>-->

	<!--<editor-fold desc="Color overlay">-->
	<div
		class="absolute top-0 bottom-0 left-0 right-0 w-full h-full mix-blend-color-burn -z-20 transition duration-[3000ms]"
		style="background-color: hsl({hue},{saturation}%,{lightness}%); "
	/>
	<!--</editor-fold>-->

	<!--<editor-fold desc="Bottom fade to black">-->
	<div
		class="absolute -z-40 bottom-0 left-0 right-0 w-full h-24 bg-gradient-to-t from-black translate-y-0"
	/>
	<!--</editor-fold>-->
</div>
<!--</editor-fold>-->

<!--Example-->
<!--<BG randomized/>-->
