<script>
	import Body from '$lib/components/typography/Body.svelte';

	export let link;
	export let text = 'Text';
	const Size = {
		Large: 'LARGE',
		Medium: 'MEDIUM',
		Small: 'SMALL'
	};
	export let size = Size.Small;
</script>

<a href="{link}" class="relative max-w-fit before:content-['']
    {size === Size.Small ? 'before:-bottom-0 before:h-px' : ''}
    {size === Size.Medium ? 'before:-bottom-0.5 before:h-1' : ''}
    {size === Size.Large ? 'before:-bottom-1 before:h-1.5' : ''}
    before:absolute before:w-full before:rounded-sm before:bg-white  before:left-0 before:origin-right before:scale-x-0 before:ease-in-out before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"

>
	<Body>{text}</Body>
</a>