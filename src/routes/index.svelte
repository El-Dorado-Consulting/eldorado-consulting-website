
<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Button from "$lib/components/Button.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />

<!-- ____SECTION ONE____ -->
<div class="bg-white">
  <section
    class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14 sm:flex-row py-10 sm:py-16"
  >
    <div>
      <h1
        class="font-semibold text-4xl mt-8 sm:text-5xl sm:mt-8  max-w-2xl font-rale font-bold"
      >
        Process engineering specialists
      </h1>
      <h2
        class="text-lg mt-8 sm:text-xl sm:mt-12 text-graphite max-w-2xl font-inter font-bold"
      >
        You have the vision to execute. Let us focus on the details.
      </h2>
      <div class=" mt-8 flex justify-items-center w-64 justify-between">
        <Button href="/contact">Contact Us</Button>
      </div>
    </div>
    <div class="p-4 mt-8 sm:mt-0 flex items-center hidden md:block">
      <img class="max-w-full" src="/asset-timeline.png" alt="" />
    </div>
  </section>
</div>

<!-- ____SECTION FOUR____ -->

<div class="bg-white">
  <section
    class="
      container
      mx-auto
      max-w-4xl lg:max-w-5xl xl:max-w-6xl px-10 flex flex-col items-center py-36 sm:py-16 lg:my-24 px-10
    "
  >
    <h2 class="font-lexend font-semibold text-3xl sm:text-4xl text-purple-900">
      Easily integrate the tools you’re already using
    </h2>
    <h3 class="text-purple-400 mt-4 text-base sm:text-lg">
      Our existing integrations and robust API allow for fast setup and
      consistent data across your software.
    </h3>
    <img class="mt-8 max-w-full" src="/integration-logos.png" alt="" />
  </section>
</div>
<Footer/>

