<script>
  let services = [
    {
      title: "Workflow Engineering",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
      "Our approach to micromobility operations marries lean theory with reality to produce real-world results—with increases to throughput and uptime often doubling in months.",
      "We’ll work with you to get a grasp on your repair operations data, hone in on the bottlenecks and come up with agile solutions for task design, process flow, and workstations—up to the creation of industrial-volume repair lines.",
      "We can help build and work with a cross-functional team on a pilot project, and even guide the project through scaling."
      ],
    },
    {
      title: "Staff Training",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Our experience teaching hundreds of technicians across the globe has taught us to get the most out of our efforts when creating training plans and materials.",
        "We’ll show you our methods for how to train technicians faster and more consistently; get them proficient in days not months; write SOPs they’ll actually want to use; and support them with ongoing education.",
        "We can share our training knowledge with your team through on-site or virtual workshops—or we can provide more in-depth services such as templates and content development."
      ],
    },
    {
      title: "Inventory Management",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "No parts, no repairs—a painful reality that we see many operations needlessly endure.",
        "We take the pain out of parts consumption and management with a simplified workflow, leading to better compliance, consumption data and stock level accuracy.",
        "We can also help reduce inventory waste with strategies like improved refurbishment, simplified assemblies, de-kitting and quality standards."
      ],
    },
    {
      title: "Data & Analytics",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Can’t fully trust your ops data? Wish you had more insightful metrics? Let us help you get a grip on your analytics!", 
        "Our approach makes data collection simple and analysis more intuitive. We can work with your team to rethink your approach, stand up new tools, detangle your data entry and establish a fresh baseline.", 
        "We can also build ad hoc projects like simulators to study wicked problems like best warehouse location or when to use vans versus cargo bikes."
      ],
    },
    {
      title: "Software Development",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Are your software tools not keeping up with your operations? We can help you build something better—fast—with your existing databases—to help streamline the user experience.",
        "Our experience bridging the gap between technicians and coders helps us get teams aligned and clear on requirements in both directions.",
        "We can also work with your software team to prototype new tools and incorporate learnings into their roadmap."
      ],
    },
    {
      title: "Workshop Infrastructure",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "As we’ve taken operations to the next level, we’ve found ourselves needing tools and hardware that don’t exist anywhere else. In response, we’ve developed a catalog of custom-designed equipment for micromobiity, from workstations and ramps to repair stands and materials carts.",
        "Along with these custom solutions, we also have vendors across the US and EU who can provide high-quality, off-the-shelf tooling for your industrialized shop package.",
        "If there is a problem we haven’t seen before, we can perform hardware development work to provide you a bespoke solution."
      ],
    },
  ];
</script>

<div class="flex flex-row flex-wrap justify-evenly ">
  {#each services as { title, image, items }}
    <div class="  w-5/12 flex flex-col bg-white shadow-md rounded mx-1.5  mt-12">
      <img class="" src={image} alt="" width="500px" />
      <div class="p-2">
        <p class=" text-xl font-quick mb-4">{title}</p>
        {#each items as item}
          <p class=" font-dm mb-4">{item}</p>
        {/each}
      </div>
    </div>
  {/each}
</div>
