<script>
  import { assets } from "$app/paths";
  import MediaQuery from "$lib/components/MediaQuery.svelte";
  let arrow = `${assets}/arrow.png`
  let services = [
    {
      title: "Workflow Engineering",
      image: `${assets}/training.png`,
      paragraphs: [
        "We know how variable repair operations can be, but that won’t slow us down. Our team will custom-engineer standardized workflows that give you extra capacity when you need it while upholding the consistent quality you expect",
        "Leave throughput bottlenecks behind with El Dorado's intuitive process. Go forward with faster training and less waste.",
        "We'll teach your teams how to keep workflows lean and projects moving with hands-on guidance for any operations you want to pilot, upscale or adjust to new standards. And we're happy to come by for a quick audit or workshop. No job is too big or too small. ",
      ],
    },
    {
      title: "Staff Training",
      image: `${assets}/training.png`,
      paragraphs: [
        "Our clear, concise training materials have already been used to teach new workflows to hundreds of technicians worldwide.",
        "We'll also teach you how to build training programs for your technicians that will have them ready to go in days—not months. You'll learn best practices for writing SOPs that managers can use to get techs up to speed fast and keep them working at a high level sustainably.",
      ],
    },
    {
      title: "Inventory Management",
      image: `${assets}/training.png`,
      paragraphs: [
        "Run out of parts? Bye bye repairs, hello backlog. We've seen it time and time again.",
        "By grouping tasks into stations and putting parts at their point of use, we'll make managing parts consumption easy for your technicians—and precise usage data will make restocking simple for your managers. ",
        "Keep inventory waste under control by standardizing inspections, creating easy-to-use quality control standards and optimizing refurbishment workflows.",
      ],
    },
    {
      title: "Data & Analytics",
      image: `${assets}/training.png`,
      paragraphs: [
        "Can't trust your ops data? Wish your metrics gave you more actionable insight? We can help.",
        "One of our greatest assets is our ability to work with teams to rethink key metrics and make data capture more reliable and replicable—all with tools right off the shelf.",
        "We also offer custom-tailored analytical solutions for a wide range of challenges. We can build anything from shop floor dashboards to robust simulations and unit economics models."
      ],
    },
    {
      title: "Software Development",
      image: `${assets}/training.png`,
      paragraphs: [
        "Workloads increase year over year. Are your tools keeping up? With our software development and project management expertise, we won't let you get left behind.",
        "Adopt a new approach with confidence. We'll help you quickly retool existing databases to improve UX for ops teams and add functionality for analysts.",
        "We've worked on the shop floor, so we know what happens there. We work closely with software teams to make sure platforms include the tools needed at every layer of operations.",
      ],
    },
    {
      title: "Workshop Infrastructure",
      image: `${assets}/training.png`,
      paragraphs: [
        "Our catalog of custom workshop solutions will keep your operations lean and efficient. Get workstations, repair stands and materials carts built right for the job.",
        "Improve task times and repair quality with industrial-quality solutions sourced by our experts.",
        "Need specialized tooling? Let us know. We'll help you develop custom hardware for any task."
      ],
    },
  ];

  let sectionOne = services.slice(0,2)
  let sectionTwo = services.slice(2,4)
  let sectionThree = services.slice(4,6)

  let chunkArray = [sectionOne, sectionTwo, sectionThree]

  function rotateFoward() {
    chunkArray.unshift(chunkArray.pop());
    chunkArray = chunkArray;
  }
  function rotateBackward() {
    console.log('rotate')
    chunkArray.push(chunkArray.shift());
    chunkArray = chunkArray;
  }

  function rotateFowardTwo() {
    singleArray.unshift(singleArray.pop());
    singleArray = singleArray;
  }
  function rotateBackwardTwo() {
    console.log('rotate')
    singleArray.push(singleArray.shift());
    singleArray = singleArray;
  }

  $: current = chunkArray[0]

  let singleArray = services
  $: single = singleArray[0]


</script>

<div class="flex flex-col bg-lightGray w-full hidden">
  <h1 class = "sm:text-5xl text-3xl text-center font-rale mt-8"> Our singleArray </h1>
  <div class="flex flex-wrap justify-evenly mt-8">
  <button class="w-8 left" on:click={rotateBackward}>
    <img src={arrow} alt="">
  </button>
    {#each current as { title, image, paragraphs }}
      <div class=" flex-1 flex flex-wrap flex-col bg-white shadow-md rounded max-w-2xl mx-4 ">
        <img class=" w-auto " src={image} alt="" />
        <div class="p-4 mt-4">
          <p class=" text-2xl font-quick mb-4 underline">{title}</p>
          {#each paragraphs as paragraph}
            <p class="font-dm text-justify my-4">{paragraph}</p>
          {/each}
        </div>
      </div>
    {/each}
    <button class="w-8 right" on:click={rotateFoward}>
      <img class="transform -rotate-180" src={arrow} alt="">
    </button>
  </div>
  <h2 class=" flex-1 uppercase text-3xl text-center my-8">
    CANT FIND WHAT YOU’RE LOOKING FOR? <span class ="font-bold underline text-mustard">CONTACT US</span> TO EXPLORE MORE HANDS ON
    PROJECTS
  </h2>
</div>

<div class="flex flex-col bg-lightGray w-full">
  <h1 class = "sm:text-5xl text-3xl text-center font-rale mt-8"> Our singleArray </h1>
  <div class="flex flex-wrap justify-evenly mt-8">
  <button class="w-8 left" on:click={rotateBackwardTwo}>
    <img src={arrow} alt="">
  </button>
      <div class=" flex-1 flex flex-wrap flex-col bg-white shadow-md rounded max-w-2xl mx-4 ">
        <img class=" w-auto " src={single.image} alt="" />
        <div class="p-4 mt-4">
          <p class=" text-2xl font-quick mb-4 underline">{single.title}</p>
          {#each single.paragraphs as paragraph}
            <p class="font-dm text-justify my-4">{paragraph}</p>
          {/each}
        </div>
      </div>
    <button class="w-8 right" on:click={rotateFowardTwo}>
      <img class="transform -rotate-180" src={arrow} alt="">
    </button>
  </div>
  <h2 class=" flex-1 uppercase text-3xl text-center my-8">
    CANT FIND WHAT YOU’RE LOOKING FOR? <span class ="font-bold underline text-mustard">CONTACT US</span> TO EXPLORE MORE HANDS ON
    PROJECTS
  </h2>
</div>


