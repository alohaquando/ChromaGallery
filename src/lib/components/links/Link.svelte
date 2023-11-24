<script>
	import Body from '$lib/components/typography/Body.svelte';
	let customClass = '';
	export { customClass as class };
	export let link = '';
	const Size = {
		Large: 'lg',
		Medium: 'md',
		Small: 'sm'
	};
	export let linkSize = Size.Small;
</script>

<a
	href={link}
	class="relative max-w-fit before:content-['']
    {linkSize === Size.Small ? 'before:-bottom-0 before:h-px' : ''}
    {linkSize === Size.Medium ? 'before:-bottom-0.5 before:h-1' : ''}
    {linkSize === Size.Large ? 'before:-bottom-1 before:h-1.5' : ''}
    before:absolute before:w-full before:rounded-sm before:bg-white before:left-0 before:origin-right before:scale-x-0 before:ease-in-out before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
>
	<span><slot /></span>
</a>
