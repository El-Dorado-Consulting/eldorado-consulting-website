<script>
  let slides = {
    one: {
      sliderTitle: "Agile Training & Process Development",
      sliderBlurb:
        "Get the inside scoop on what goes into successful training academies and playbooks. Learn our approach for breaking down the toughest tasks into teachable parts. See big gains in consistency, productivity and training time.",
      sliderUrl: "./slider/slider-training.png",
    },
    two: {
      sliderTitle: "Agile Training & Process Development",
      sliderBlurb:
        "Get the inside scoop on what goes into successful training academies and playbooks. Learn our approach for breaking down the toughest tasks into teachable parts. See big gains in consistency, productivity and training time.",
      sliderUrl: "./slider/slider-training.png",
    },
    three: {
      sliderTitle: "Agile Training & Process Development",
      sliderBlurb:
        "Get the inside scoop on what goes into successful training academies and playbooks. Learn our approach for breaking down the toughest tasks into teachable parts. See big gains in consistency, productivity and training time.",
      sliderUrl: "./slider/slider-training.png",
    },
    four: {
      sliderTitle: "Agile Training & Process Development",
      sliderBlurb:
        "Get the inside scoop on what goes into successful training academies and playbooks. Learn our approach for breaking down the toughest tasks into teachable parts. See big gains in consistency, productivity and training time.",
      sliderUrl: "./slider/slider-training.png",
    },
  };
</script>

<div class=" w-screen flex flex-col-reverse sm:flex-row">
  <div class="flex-1 flex flex-col justify-center items-center mx-2">
    <div class=" text-white max-w-md shadow-xl">
      <img src={slides.one.sliderUrl} alt="thumbs-up" />
      <div class="bg-mint p-4">
        <h3 class="text-2xl mb-4 font-quick">{slides.one.sliderTitle}</h3>
        <p class="text-md font-dm">{slides.one.sliderBlurb}</p>
      </div>
    </div>
    <div>
      <input type="radio" id="contactChoice1" name="contact" value="email" />
      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <input type="radio" id="contactChoice3" name="contact" value="mail" />
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
