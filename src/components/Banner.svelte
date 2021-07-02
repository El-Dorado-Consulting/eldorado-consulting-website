<script>
  	import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

  function sectionHandler () {
   dispatch('message', {
			section: 6
		});
  }

</script>

<section class = " h-screen flex flex-col items-center justify-between py-40">
  <div class="spacer"></div>
  <div class="">
    <div class="bg-white text-center max-w-2xl p-6 sm:shadow-md rounded">
      <h1 class = "text-2xl sm:text-4xl mb-6 font-rale">MICROMOBILITY & PROCESS ENGINEERING SPECIALISTS</h1>
      <h2 class="text-base sm:text-xl font-quick">You have the vision to execute. Let us focus on the details</h2>
    </div>
  </div>
  <div class="">
    <button on:click={sectionHandler} class="bg-mint text-white px-8 py-4 font-rale shadow-md rounded ">Connect With Us</button>
  </div> 
</section>

<style>
  
</style>
