<script lang="ts">
    import Headline from '$lib/components/typography/Headline.svelte';
    import TextArea from '$lib/components/inputs/TextField.svelte';
    import ListItem from '$lib/components/item/ListItem.svelte';
    import { collection1 } from '../../../../data';
    import { modalData } from '$lib/stores/modal';

    modalData.update(modalData => ({
        ...modalData,
        modalPage: true,
        href: '/account/setting',
        title: 'Featured items',
        button: 'Save'
    }));
</script>

<div class="mt-8 w-full">
    <TextArea value={collection1.name}></TextArea>
</div>
<div class="my-8 w-full">
    <TextArea rows={2} value={collection1.description}></TextArea>
</div>

<ListItem bottomDivider={false}
          class="underline-offset-8 pt-8 pb-6"
          design="destructive"
          text="Delete collection"
          topDivider={false} />
