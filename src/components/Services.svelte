

<script>

let services = [
  {
    "title": "Agile Training & Process Development",
    "summary": "Get the inside scoop on what goes into successful training academies and playbooks. Learn our approach for breaking down the toughest tasks into teachable parts. See big gains in consistency, productivity and training time.",
    "imgURL": "agile-training.png"
  },
  {
    "title": "Lean Repair Workflow Design",
    "summary":
      "Repair ops hit a plateau? Looking for a better path forward? In this course, we share a fresh approach to micromobility operations that will help you break out of old habits, simplify your day-to-day and elevate your performance.",
    "imgURL": "lean-repair.png"
  },
  {
    "title": "Data Sanity for Operations & Inventory",
    "summary":
      "Can’t fully trust your ops data? Wish you had more insightful metrics? Let us help get your back of the house in order! We help you rethink your metrics, improve your data collection methods and lean out your inventory management",
    "imgURL": "data-sanity.png"
  },
  {
    "title": "Developing Your Central Ops Strategy",
    "summary":
      "Are you dealing with dozens of initiatives but none are getting the traction you’ve been hoping for? We provide key strategies for improving alignment. It’s time to get some lazer focus on the biggest levers for reaching profitability.",
    "imgURL": "ops-strategy.png"
  }
]

let slide = 0

$: currentSlide = services[slide]
$: currentURL = `./slider/${currentSlide.imgURL}`

</script>

<div class=" w-screen flex flex-col-reverse sm:flex-row">
  <div class="flex-1 flex flex-col justify-center items-center mx-2">
    <div class=" text-white max-w-md shadow-xl">
      <img src={currentURL} alt="thumbs-up" />
      <div class="bg-mint p-4">
        <h3 class="text-2xl mb-4 font-quick">{currentSlide.title}</h3>
        <p class="text-md font-dm">{currentSlide.summary}</p>
      </div>
    </div>
    <div>
      <input bind:group={slide} type="radio" id="one" name="contact" value=0 />
      <input bind:group={slide} type="radio" id="two" name="contact" value=1 />
      <input bind:group={slide} type="radio" id="three" name="contact" value=2 />
      <input bind:group={slide} type="radio" id="four" name="contact" value=3 />
    </div>
  </div>
  <div class="flex-1 flex justify-center items-center mx-2">
    <div class="max-w-xl flex flex-col items-center">
      <h2 class="text-3xl mb-4 font-rale">Our Services</h2>
      <h3 class = "text-xl font-quick mb-8">We offer dedicated modules on key operational topics</h3>
    </div>
  </div>
</div>

<style>
</style>
