
<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Button from "$lib/components/Button.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />

<!-- ____SECTION ONE____ -->
<div class="bg-white">
  <section
    class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14 sm:flex-row py-10 sm:py-16 items-center justify-between"
  >
    <div class='w-2/4'>
      <h1
        class="text-4xl mt-8 sm:text-5xl sm:mt-8  max-w-2xl font-rale font-bold"
      >
        Process engineering specialists
      </h1>
      <h2
        class="text-xl mt-8 sm:text-xl sm:mt-12 text-graphite max-w-2xlfont-semibold"
      >
        You have the vision to execute. Let us focus on the details.
      </h2>
      <div class=" mt-8 flex justify-items-center w-64 justify-between">
        <Button href="/contact">Contact Us</Button>
      </div>
    </div>
    <div class="p-4 mt-8 sm:mt-0 flex items-center hidden md:block">
      <img class="max-w-full h-80" src="/mobility-banner.png" alt="" />
    </div>
  </section>
</div>

<!-- SECTION TWO -->
<div class="bg-mint">
  <section
    class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14 sm:flex-row py-10 sm:py-16 items-center justify-between"
  >
    <div class="flex-1 font-source text-white">
      <h2 class="text-3xl">About</h2>
      <h3 class="mt-4 text-xl">We’re a team of experts who’ve spent years building operations from the ground-up across industry-leading companies.</h3>
      <p class="mt-4 text-lg">Our unique blend of real-world experience and an inventive, theoretical approach has a track record of improving operational efficiency. Whether you're starting from scratch or taking your operations to the next level, El Dorado has you covered.</p>
    </div>
    <div class="flex-1">
      <div class="bg-white w-full rounded-lg flex p-6 items-center">
          <img class="w-48" src="/battista.png" alt="">
        <div class="ml-4">
          <h3 class="text-xl font-rale">Erik Battisa</h3>
          <p class="text-lg text-graphite mb-2">Resident floor sweeper. Tooling guru. Relentless driver of improvement in all domains. Six years of on-the-floor expierences</p>
          <img src="social.png" alt="">
        </div>
      </div>
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
    <h2 class="font-rale font-semibold text-3xl sm:text-4x text-graphite">
      We've worked with some great teams
    </h2>

    <img class="mt-8 max-w-full" src="/team-logos.png" alt="" />
  </section>
</div>
<Footer/>

