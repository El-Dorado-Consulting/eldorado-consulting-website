<script>
  let services = [
    {
      title: "On-Site & Remote Training Modules",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
    {
      title: "Maintence & Field Operations Optimization",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
    {
      title: "Vehicle and Tool Development",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
    {
      title: "Internal Software Tools Development",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
    {
      title: "Operation Stragety and Team Alignment",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
    {
      title: "Data Analytics and Fleet Optimization",
      image:
        "https://ellarr.com/wp-content/uploads/2017/04/onsite-training.jpg",
      items: [
        "Agile Training & Process Development (3 days)",
        "Lean Repair Workflow & Process Engineering (2 days)",
        "Data Sanity for Operations & Inventory (2 days)",
        "Developing Your Central Ops Strategy (3 days)",
      ],
    },
  ];
</script>

<div class="flex flex-row flex-wrap justify-evenly ">
  {#each services as { title, image, items }}
    <div class="  min-w-min flex flex-col bg-white shadow-md rounded mx-1.5  mt-12">
      <img class="" src={image} alt="" width="500px" />
      <div class="p-2">
        <p class=" text-xl font-quick mb-4">{title}</p>
        {#each items as item}
          <li class=" font-dm">
            <ul>{item}</ul>
          </li>
        {/each}
      </div>
    </div>
  {/each}
</div>
