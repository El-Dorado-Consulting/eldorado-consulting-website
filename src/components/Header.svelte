<script>
  	import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

  function sectionHandler (section) {
   dispatch('message', {
			section: section
		});
  }
</script>

  <header class="fixed top-0 z-10 bg-mustard flex w-screen h-24 justify-between px-4 shadow-md">
    <div class="flex items-center">
      <a href="."><img class= "max-h-16 hidden sm:block" src="logo-v2.png" alt="logo" /></a>
      <a href="."><img class= "max-h-16 block sm:hidden" src="logo-v2-small.png" alt="logo" /></a>
    </div>

    <nav class ="flex items-center font-quick font-bold ">
      <button on:click={() => sectionHandler(2)} class="text-white mx-1 sm:mx-2">About</button>
      <button on:click={() => sectionHandler(3)} class="text-white mx-1 sm:mx-2">Services</button>
      <button on:click={() => sectionHandler(4)} class="text-white mx-1 sm:mx-2">Blog</button>
      <button on:click={() => sectionHandler(6)} class="text-white mx-1 sm:mx-2">Contact</button>
    </nav>
  </header>

<style>


</style>
