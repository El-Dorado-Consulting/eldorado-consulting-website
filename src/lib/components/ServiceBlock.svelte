<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  export let title = "";
  export let content = "";
  export let lastServiceIndex = 0;
  export let image = "";
  export let i = 0;

  $: hidden = i === lastServiceIndex ? false : true;
  console.log(hidden);

  const dispatch = createEventDispatcher();

  function toggleHide() {
    console.log("index ", i);
    dispatch("message", {
      id: i,
    });
  }
</script>

<div class="max-w-xl pl-4 pt-4 flex" class:border-l-4={!hidden} transition:fade>
  <div class="flex-1">
    <button on:click={toggleHide} class="font-rale text-2xl text-graphite-dark w-full"
      >{title}</button
    >
    {#if !hidden}
      <p class="mt-4 font-source text-graphite" transition:fade>{content}</p>
    {/if}
  </div>

  <div class="flex-1">
    {#if !hidden}
      <img src={image} alt="" />
    {/if}
  </div>
</div>

<style>
  .customBorder {
    border-left: 4px "#FFBC00" solid;
  }
</style>
