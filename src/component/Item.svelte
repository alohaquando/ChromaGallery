<script>
	export let index;
	export let item;
	export let editItem;
	export let removeItem;
</script>

<div class="flex border rounded mx-5 my-3 justify-between border-red-500">
	<div class="bg-red-500 w-[200px] text-white px-5">
		{index + 1}.{item}
	</div>
	<div class="flex px-5 justify-between w-[15%]">
		<button
			class=" text-green-500 rounded px-1 hover:bg-red-400"
			on:click={() => {
				editItem(index);
			}}
		>
			edit
		</button>
		<button
			class=" text-red-500 rounded px-1 hover:bg-red-400"
			on:click={() => {
				removeItem(index);
			}}
		>
			Delete
		</button>
	</div>
</div>
