<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  export let title = ''
  export let content = ''
  export let lastServiceIndex = 0
  export let i = 0
   
  $: hidden = (i === lastServiceIndex) ? false : true
  console.log(hidden)
  
  const dispatch = createEventDispatcher();

  function toggleHide (){
    console.log('index ', i)
    dispatch('message', {
      id:i
    });
  }

</script>

<div class="max-w-xl pl-4 pt-4 border-l-4 "class:border-mustard={!hidden} transition:fade>
<button 
  on:click={toggleHide}
  class="font-rale text-2xl text-graphite-dark">{title}</button>
  <p class="mt-4 font-source text-graphite" transition:fade>{content}</p>




</div>