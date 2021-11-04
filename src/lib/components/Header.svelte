<script>
    import {assets } from '$app/paths';
    let largeLogo = `${assets}/logo-v3.png`
    let smallLogo = `${assets}/logo-v3-small.png`
  	import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

  function sectionHandler (section) {
   dispatch('message', {
			section: section
		});
  }
</script>

  <header class="fixed top-0 z-10 bg-white flex w-screen max-h-20 h-16 justify-between px-4 shadow-md">
    <div class="flex items-center">
      <a href="../"><img class= "max-h-16 hidden sm:block" src={largeLogo} alt="logo" /></a>
      <a href="../"><img class= "h-12 block sm:hidden" src={smallLogo} alt="logo" /></a>
    </div>

    <nav class ="flex items-center font-quick mr-2 sm:mr-8 uppercase text-darkGray ">
      <button on:click={() => sectionHandler(-1.3)} class=" mx-2 sm:mx-8 sm:text-base text-sm uppercase font-bold hover:text-black">About</button>
      <button on:click={() => sectionHandler(-.3)} class=" mx-2 sm:mx-8 sm:text-base text-sm uppercase font-bold hover:text-black">Services</button>
      <button on:click={() => sectionHandler(1)} class=" mx-2 sm:mx-8 sm:text-base text-sm uppercase font-bold hover:text-black">Blog</button>
      <button on:click={() => sectionHandler(3)} class=" mx-2 sm:mx-8 sm:text-base text-sm uppercase font-bold hover:text-black">Contact</button>
    </nav>
  </header>

