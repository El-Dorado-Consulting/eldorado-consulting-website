<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Button from "$lib/components/Button.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ServiceBlock from "$lib/components/ServiceBlock.svelte";
  import PersonCard from "$lib/components/PersonCard.svelte";
  import TestimonialBlock from "$lib/components/TestimonialBlock.svelte";

  // Content
  import services from "$lib/content/services.json";
  import team from "$lib/content/team.json";

  export let id: number;

  function onMessage(e) {
    console.log(e);
    id = e.detail.id;
  }
</script>

<Nav />

<!-- ____SECTION ONE____ -->
<div class="bg-white">
  <section
    class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14 sm:flex-row items-center justify-between"
  >
    <div class="flex-1">
      <h1
        class="text-4xl sm:text-4xl  max-w-2xl font-rale font-bold text-graphite-dark"
      >
        Hardware operations & process engineering specialists
      </h1>
      <h2
        class="text-xl mt-8 sm:text-xl sm:mt-8 text-graphite max-w-2xlfont-semibold"
      >
        You have the vision to execute. Let us focus on the details.
      </h2>
      <div class=" mt-8 flex justify-items-center w-64 justify-between">
        <Button href="/contact">Contact Us</Button>
        <Button href="/blog" style="secondary">Learn More</Button>
      </div>
    </div>
    <div class="flex-1 flex justify-end py-8 pl-8">
      <img class="max-w-full py-8" src="/banner-image.png" alt="" />
    </div>
  </section>
</div>

<!-- SECTION TWO -->
<div class="bg-graphite-50">
  <section
    class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14  py-10 sm:py-16"
  >
    <div class="flex items-end font-source text-white mb-4">
      <h2 class="text-4xl text-graphite-dark font-bold font-rale">Why Us</h2>
      <h3 class="text-2xl text-graphite font-rale text-bold ml-4">
        Operations are hard. Acronyms only help so much...
      </h3>
    </div>
    <div
      class="text-graphite text-xl font-medium flex flex-wrap justify-evenly font-source"
    >
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Lower maintenace cost</p>
      </div>
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Better inventory tracking</p>
      </div>
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Streamlined staff training</p>
      </div>
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Intuitive data insights</p>
      </div>
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Increased asset utilization</p>
      </div>
      <div
        class="flex items-center py-2 px-3 border-2 rounded-lg bg-white mr-6 mt-6"
      >
        <img src="/icons/cost.png" width="40px" alt="" />
        <p class="ml-3">Improved quality control</p>
      </div>
    </div>
    <div class="block w-full h-0.5 bg-gray-400 mt-12" />
    <div class="flex justify-evenly mt-8">
      <div class="flex flex-col items-center font-rale">
        <h2 class="text-7xl font-bold text-mint">2x</h2>
        <h3>Time to repair</h3>
      </div>
      <div class="flex flex-col items-center font-rale">
        <h2 class="text-7xl font-bold text-mint">2x</h2>
        <h3>Time to repair</h3>
      </div>
      <div class="flex flex-col items-center font-rale">
        <h2 class="text-7xl font-bold text-mint">2x</h2>
        <h3>Time to repair</h3>
      </div>
    </div>
  </section>
</div>

<!-- SECTON THREE -->
<div class="bg-white">
  <section class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14 my-8">
    <h2 class="text-4xl text-graphite-dark font-bold font-rale mb-4">
      Our Services
    </h2>
    {#each services as service, i}
      <ServiceBlock
        title={service.title}
        content={service.content}
        lastServiceIndex={id}
        {i}
        on:message={onMessage}
      />
    {/each}
  </section>
</div>


  <!-- SECTION FOUR -->
  <div class="bg-graphite-50">
    <section
      class="container flex flex-col mx-auto max-w-7xl px-6 md:px-14  py-10 sm:py-16"
    >
    <h2 class="text-4xl text-graphite-dark font-bold font-rale">About Us </h2>

    <div class="flex flex-wrap justify-between mt-4">
      <div class=" max-w-xl bg-mint rounded-lg p-6 text-white mt-4 flex flex-col justify-center">
        <h2 class="text-2xl">We’re a team of experts who’ve spent years building operations from the ground-up across industry-leading companies.</h2>
        <h3 class="text-lg mt-4"> We build lean operations for hardware companies looking to get the most out of their assets. Our team goes deep from day one and skips all the jargon. Sarah eats babies</h3>

      </div>

      {#each team as member}
      <PersonCard
      name={member.name}
      description={member.description}
      profileImage={member.profileImage}
      socialLinks={member.socialLinks}
      />
      {/each}
    </div>
    </section>
  </div>

<!-- ____SECTION FIVE____ -->
<div class="bg-white">
  <section
    class="
      container
      mx-auto
      max-w-7xl mt-12 px-10 flex flex-col
    "
  >
    <h2 class="font-rale font-semibold text-4xl text-graphite-dark">
      We've worked with some great teams
    </h2>
    <img class="mt-8 max-w-full" src="/team-logos.png" alt="" />
    <div class="block w-full h-0.5 bg-gray-400 mt-4" />
    <div class='my-12'>
      <TestimonialBlock/>
    </div>

  </section>
</div>
<Footer />
