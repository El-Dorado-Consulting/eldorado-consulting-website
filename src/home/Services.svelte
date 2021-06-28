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
    <div class=" text-white w-72 shadow-lg">
      <img src={slides.one.sliderUrl} alt="thumbs-up" />
      <div class="bg-mint p-2">
        <h3 class="text-2xl mb-2">{slides.one.sliderTitle}</h3>
        <p class="text-sm">{slides.one.sliderBlurb}</p>
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
    <div class="text-center">
      <h2 class="text-3xl mb-4">Our Services</h2>
      <h3>WE OFFER DEDICATED MODULES ON KEY OPERATIONAL TOPICS</h3>
    </div>
  </div>
</div>

<style>
</style>
