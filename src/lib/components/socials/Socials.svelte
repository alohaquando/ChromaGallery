<script lang="ts">
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import Button from '$lib/components/controls/Button.svelte';

    let customClasses = '';
	export { customClasses as class };
	export let href= '';
	export let design: 'facebook' | 'google' | 'apple';
    export let signup: boolean= true;
    
    let bg: string, text: string, icon: string, tc: string;
	switch (design) {
		case 'facebook': {
            bg = 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800';
            text = ' Facebook'
            icon = 'faFacebook'
			tc = 'text-white';
			break;
		}
		case 'google': {
            bg = 'bg-white hover:bg-neutral-200 active:bg-neutral-300'
            text = ' Google'
            icon = 'faGoogle'
			tc = 'text-black text-opacity-60';
            break;
		}
        case 'apple': {
            bg = 'bg-black hover:bg-neutral-900 active:bg-neutral-800'
            text = ' Apple'
            icon = 'faApple'
			tc = 'text-white';
            break;
		}
	}
    let txt: string;
    if (signup){
        txt = 'Sign up with'
    }
    else {
        txt = 'Continue with'
    }
</script>


<button>
    <div class="px-6 py-3 {bg} rounded-[99px] shadow justify-start items-center gap-4 inline-flex">
    <Icon type="brands" {icon} class={tc} size="2xl"></Icon>
    <Body class="grow shrink basis-0 text-center {tc} font-bold">{txt}{text}</Body>
    </div>
  </button>
  
