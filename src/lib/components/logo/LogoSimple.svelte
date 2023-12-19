<!--suppress ALL -->
<script lang="ts">
	let customClasses = '';
	export { customClasses as class };

	export let animation: 'pacman' | 'spin' | undefined = undefined;
	let animationClasses: string[] = ['', '', ''];
	switch (animation) {
		case 'pacman':
			animationClasses = ['group-hover:animate-pacman2', 'group-hover:animate-pacman1', 'group-hover:animate-disappearRight'];
			break;
		case 'spin':
			animationClasses = ['group-hover:animate-spinLeftACW', 'group-hover:animate-spinLeftCW', ''];
			break;
	}
</script>
<div class="flex relative group justify-end">
	{#if animation}
		<svg class="{customClasses} absolute left-0 {animationClasses[0]}" fill="none" viewBox="0 0 24 24"
				 xmlns="http://www.w3.org/2000/svg">
			<path
				d="M19.743 21.168A11.952 11.952 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0h.038l3.853 10.584 3.852 10.584Z"
				fill="url(#a)" />
			<defs>
				<linearGradient gradientUnits="userSpaceOnUse" id="a" x1="9.871" x2="9.871" y1="24" y2="0">
					<stop stop-color="#fff" stop-opacity=".37" />
					<stop offset="1" stop-color="#fff" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>
		<svg class="{customClasses} absolute left-0 {animationClasses[1]}" fill="none" viewBox="0 0 24 24"
				 xmlns="http://www.w3.org/2000/svg">
			<path d="M19.743 2.832A11.952 11.952 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12h.038l7.705-21.168Z"
						fill="url(#b)" />
			<defs>
				<linearGradient gradientUnits="userSpaceOnUse" id="b" x1="9.871" x2="9.871" y1="0" y2="24">
					<stop offset=".109" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".28" />
				</linearGradient>
			</defs>
		</svg>
	{/if}
	<div class="overflow-hidden flex justify-end {animationClasses[2]}">
		<svg class="{customClasses} shrink-0 " fill="none" viewBox="0 0 114 24"
				 xmlns="http://www.w3.org/2000/svg">
			{#if !animation}
				<path
					d="M19.743 21.168A11.952 11.952 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0h.038l3.853 10.584 3.852 10.584Z"
					fill="url(#a)" />
				<path d="M19.743 2.832A11.952 11.952 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12h.038l7.705-21.168Z"
							fill="url(#b)" />
			{/if}
			<path
				d="M34.13 23.468v-8.864c0-1.152-.364-2.101-1.089-2.848-.725-.746-1.664-1.12-2.816-1.12-.768 0-1.45.171-2.048.512a3.718 3.718 0 0 0-1.408 1.408c-.341.598-.512 1.28-.512 2.048l-1.184-.672c0-1.152.256-2.176.768-3.072a5.515 5.515 0 0 1 2.144-2.112c.918-.533 1.952-.8 3.104-.8 1.152 0 2.166.256 3.04.768a5.515 5.515 0 0 1 2.112 2.144c.512.918.768 1.974.768 3.168v9.44h-2.88Zm-10.753 0V.62h2.88v22.848h-2.88Z"
				fill="url(#c)" />
			<path
				d="M40.908 23.468v-15.2h2.88v15.2h-2.88Zm2.88-8.672-1.088-.48c0-1.941.448-3.488 1.344-4.64.896-1.152 2.187-1.728 3.872-1.728.768 0 1.462.139 2.08.416.62.256 1.195.694 1.728 1.312l-1.888 1.952a2.877 2.877 0 0 0-1.056-.736c-.384-.149-.832-.224-1.344-.224-1.066 0-1.94.342-2.624 1.024-.682.683-1.024 1.718-1.024 3.104Z"
				fill="url(#d)" />
			<path
				d="M60.196 23.788c-1.493 0-2.837-.352-4.032-1.056a7.923 7.923 0 0 1-2.848-2.848c-.704-1.216-1.056-2.57-1.056-4.064 0-1.472.352-2.794 1.056-3.968a7.922 7.922 0 0 1 2.848-2.848c1.195-.704 2.539-1.056 4.032-1.056 1.472 0 2.806.352 4 1.056a7.605 7.605 0 0 1 2.88 2.816c.704 1.195 1.056 2.528 1.056 4 0 1.494-.352 2.848-1.056 4.064a7.847 7.847 0 0 1-2.88 2.848c-1.194.704-2.528 1.056-4 1.056Zm0-2.784c.96 0 1.814-.224 2.56-.672a4.818 4.818 0 0 0 1.76-1.824c.427-.789.64-1.685.64-2.688 0-.981-.224-1.856-.672-2.624a4.586 4.586 0 0 0-1.76-1.792c-.725-.448-1.568-.672-2.528-.672s-1.813.224-2.56.672a4.586 4.586 0 0 0-1.76 1.792c-.426.768-.64 1.643-.64 2.624 0 1.003.214 1.899.64 2.688a4.818 4.818 0 0 0 1.76 1.824c.747.448 1.6.672 2.56.672Z"
				fill="url(#e)" />
			<path
				d="M71.377 23.468v-15.2h2.88v15.2h-2.88Zm10.272 0v-9.184c0-1.13-.352-2.016-1.056-2.656-.683-.661-1.547-.992-2.592-.992-.704 0-1.333.15-1.888.448a3.594 3.594 0 0 0-1.344 1.248c-.341.534-.512 1.174-.512 1.92l-1.184-.576c0-1.152.246-2.154.736-3.008a5.313 5.313 0 0 1 2.08-1.984c.875-.49 1.856-.736 2.944-.736 1.067 0 2.027.235 2.88.704a5.093 5.093 0 0 1 2.048 1.984c.512.854.768 1.867.768 3.04v9.792h-2.88Zm10.272 0v-9.184c0-1.13-.352-2.016-1.056-2.656-.682-.661-1.536-.992-2.56-.992-.704 0-1.344.15-1.92.448a3.594 3.594 0 0 0-1.344 1.248c-.341.534-.512 1.174-.512 1.92l-1.632-.576c.064-1.173.373-2.176.928-3.008a5.974 5.974 0 0 1 2.208-1.984 6.029 6.029 0 0 1 2.944-.736c1.11 0 2.102.235 2.976.704a5.313 5.313 0 0 1 2.08 1.984c.534.854.8 1.878.8 3.072v9.76h-2.912Z"
				fill="url(#f)" />
			<path
				d="M105.216 23.788c-1.386 0-2.645-.341-3.776-1.024a7.67 7.67 0 0 1-2.688-2.848c-.64-1.194-.96-2.538-.96-4.032 0-1.493.32-2.837.96-4.032.662-1.194 1.547-2.144 2.656-2.848 1.131-.704 2.4-1.056 3.808-1.056 1.152 0 2.176.246 3.072.736a5.652 5.652 0 0 1 2.208 1.984c.555.832.864 1.803.928 2.912v4.576c-.064 1.088-.373 2.059-.928 2.912a5.657 5.657 0 0 1-2.176 2.016c-.896.47-1.93.704-3.104.704Zm.48-2.72c1.43 0 2.582-.48 3.456-1.44.875-.981 1.312-2.229 1.312-3.744 0-1.045-.202-1.952-.608-2.72a4.18 4.18 0 0 0-1.664-1.824c-.725-.448-1.568-.672-2.528-.672s-1.813.224-2.56.672a4.84 4.84 0 0 0-1.728 1.856c-.405.768-.608 1.654-.608 2.656 0 1.024.203 1.931.608 2.72a4.825 4.825 0 0 0 1.76 1.824c.747.448 1.6.672 2.56.672Zm4.576 2.4v-4.096l.544-3.712-.544-3.68V8.268h2.912v15.2h-2.912Z"
				fill="url(#g)" />
			<defs>
				<linearGradient gradientUnits="userSpaceOnUse" id="a" x1="9.871" x2="9.871" y1="24" y2="0">
					<stop stop-color="#fff" stop-opacity=".37" />
					<stop offset="1" stop-color="#fff" stop-opacity="0" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="b" x1="9.871" x2="9.871" y1="0" y2="24">
					<stop offset=".109" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".28" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="c" x1="68.265" x2="68.265" y1="1.468" y2="23.468">
					<stop stop-color="#fff" />
					<stop offset=".219" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".55" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="d" x1="68.265" x2="68.265" y1="1.468" y2="23.468">
					<stop stop-color="#fff" />
					<stop offset=".219" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".55" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="e" x1="68.265" x2="68.265" y1="1.468" y2="23.468">
					<stop stop-color="#fff" />
					<stop offset=".219" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".55" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="f" x1="68.265" x2="68.265" y1="1.468" y2="23.468">
					<stop stop-color="#fff" />
					<stop offset=".219" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".55" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="g" x1="68.265" x2="68.265" y1="1.468" y2="23.468">
					<stop stop-color="#fff" />
					<stop offset=".219" stop-color="#fff" />
					<stop offset="1" stop-color="#fff" stop-opacity=".55" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</div>