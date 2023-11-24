<script>
	export let id = '';
	export let name = '';
	export let value = '';
</script>

<div class="w-5 h-5 relative flex">
	<input type="radio" {id} {name} {value} class="hidden" />
	<label for={id} class="h-full w-full bg-white rounded-full cursor-pointer group-checked"></label>
</div>

<label for={id}>
	<input type="radio" {id} {name} {value} class="hidden peer" />
	<div class="w-5 h-5 relative flex bg-white peer-checked:bg-red-600"></div>
</label>
