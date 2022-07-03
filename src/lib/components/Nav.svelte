<script lang="ts">
  import { slide } from 'svelte/transition';

  let jobDescription =
    "https://half-tax-a1e.notion.site/Fragile-Software-Engineer-a929c9b1d292418b91eb4d0fb1b5fa54";
  let src = "/ed-logo.png";

  let visible = false;

  function handleClick() {
    console.log("click");
    visible = !visible;
  }
</script>

<nav
  class="bg-white border-gray-200 py-4 px-4 mx-auto font-medium font-source max-w-7xl"
>
  <div class="container w-full flex mx-auto justify-between">
    <a href="/" class="flex items-center">
      <img {src} class="mr-3 h-14" alt="Fragile Logo" />
    </a>
    <button
      on:click={handleClick}
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
      <svg
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div class="hidden sm:flex justify-between items-center text-md" >
      <div>
        <ul class="flex pt-2 space-x-4">
          <li>
            <a href="/blog" class="px-4 py-transition-colors">Blog</a>
          </li>

          <li>
            <a
              href="/contact"
              class="px-3 py-1.5 bg-copper-400 text-white rounded-md hover:bg-copper-500 transition-colors ml-2"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
{#if visible}
  <div
    id="mobile-menu"
    class="block absolute z-50 white mt-4 w-screen right-1 bg-white shadow"
    transition:slide
  >
    <ul >
      <!---
      <li class="py-4 px-4 text-md border-b hover:bg-gray-50" >
        <a class="inline-block w-full h-full" href="/">About</a>
      </li>
    -->
      <li class="py-4 px-4 text-md border-b hover:bg-gray-50" >
        <a class="inline-block w-full h-full" href="/blog">Blog</a>
      </li>
      <li class="py-4 px-4 text-md border-b hover:bg-gray-50" >
        <a class="inline-block w-full h-full" href="/blog">Contact</a>
      </li>
    </ul>
  </div>
  {/if}
</nav>

