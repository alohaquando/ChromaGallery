<script lang="ts">
    import Headline from '$lib/components/typography/Headline.svelte';
    import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
    import DragList from '$lib/components/item/DragList.svelte';
    import Button from '$lib/components/controls/Button.svelte';
    import { count } from '$lib/utils/countItem';
    import { collection1 } from '../../../../data';
    import { findItem } from '$lib/utils/filter';

    let itemList = findItem(collection1.items);
    let str = count(collection1.items);
</script>

<Headline class="text-decoration-line: underline  underline-offset-8 pt-8 pb-6">
    {collection1.name}
</Headline>
<Headline class="text-white  text-opacity-50">{str}</Headline>
<BodyLarge class="pt-6">
    {collection1.description}
</BodyLarge>

<Button class="mt-12 w-full" design='filled'>Add items</Button>
<Button class="mt-4 mb-6 w-full">Edit items</Button>


<DragList button="link" class="gap-4" data={itemList}></DragList>
