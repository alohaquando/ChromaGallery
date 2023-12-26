<script lang="ts">
	let customClasses = '';
	export { customClasses as class };
	export let animation: 'pacman' | 'pacman-infinite' | 'spin' | undefined = undefined;
	let animationOption = [
		{
			type: 'pacman',
			top: 'group-hover:animate-pacmanTop',
			bottom: 'group-hover:animate-pacmanBottom'
		},
		{
			type: 'spin',
			top: 'group-hover:animate-spinLeftACW',
			bottom: 'group-hover:animate-spinLeftCW'
		},
		{
			type: 'pacman-infinite',
			top: 'animate-[pacmanTop_3s_infinite]',
			bottom: 'animate-[pacmanBottom_3s_infinite]'
		}
	];

	let topAnimation = animationOption.find((option) => option.type === animation)?.top;
	let bottomAnimation = animationOption.find((option) => option.type === animation)?.bottom;
</script>

<svg
	class="{customClasses} absolute left-0 {topAnimation}"
	fill="none"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M19.743 21.168A11.952 11.952 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0h.038l3.853 10.584 3.852 10.584Z"
		fill="url(#a)"
	/>
	<defs>
		<linearGradient gradientUnits="userSpaceOnUse" id="a" x1="9.871" x2="9.871" y1="24" y2="0">
			<stop stop-color="#fff" stop-opacity=".37" />
			<stop offset="1" stop-color="#fff" stop-opacity="0" />
		</linearGradient>
	</defs>
</svg>
<svg
	class="{customClasses} absolute left-0 {bottomAnimation}"
	fill="none"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M19.743 2.832A11.952 11.952 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12h.038l7.705-21.168Z"
		fill="url(#b)"
	/>
	<defs>
		<linearGradient gradientUnits="userSpaceOnUse" id="b" x1="9.871" x2="9.871" y1="0" y2="24">
			<stop offset=".109" stop-color="#fff" />
			<stop offset="1" stop-color="#fff" stop-opacity=".28" />
		</linearGradient>
	</defs>
</svg>
