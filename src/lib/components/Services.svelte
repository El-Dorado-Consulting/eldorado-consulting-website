<script>
  import { assets } from "$app/paths";
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
  ];
</script>

<div class="flex flex-col bg-lightGray p-4">
  <h1 class = "text-5xl text-center font-rale mt-8 " > Our Services </h1>
  <div class="flex flex-row justify-evenly">
    {#each services as { title, image, paragraphs }}
      <div class="flex flex-col bg-white shadow-md rounded mx-8 my-12">
        <img class="" src={image} alt="" width="500px" />
        <div class="p-2">
          <p class=" text-2xl font-quick mb-4 underline">{title}</p>
          {#each paragraphs as paragraph}
            <p class="font-dm text-justify my-2">{paragraph}</p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <h2 class=" flex-1 uppercase text-2xl text-center">
    CANT FIND WHAT YOU’RE LOOKING FOR? CONTACT US TO EXPLORE MORE HANDS ON
    PROJECTS
  </h2>
</div>
