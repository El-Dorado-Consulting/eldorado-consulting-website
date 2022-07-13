<script>
  import { slide, fade } from "svelte/transition";
  import { flip } from 'svelte/animate';

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

<div class="w-full mt-6 flex items-center" transition:fade >
  {#if !hidden}
    <div class=" block h-72 border-l-4 border-mustard" />
  {/if}

  <div class="w-full max-w-lg ml-4">
    <button on:click={toggleHide} class="font-rale text-2xl text-graphite-dark"
      >{title}</button
    >
    {#if !hidden}
      <p  in:slide out:fade={{duration:400}} class="mt-4 font-source text-graphite"> {content}</p>
    {/if}
  </div>

  <div class="w-full flex justify-center">
    {#if !hidden}
      <img class="max-w-md" src={image} transition:fade alt="" />
    {/if}
  </div>
</div>

<style>
  .customBorder {
    border-left: 4px "#FFBC00" solid;
  }
</style>
