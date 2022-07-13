<script>
  export let testimonial = `“This is not a process change—this is a change of religion!”`;
  export let name = "Jan Just ";
  export let role = "Head of Hardware - New Mobility";
  export let profileImage = "/jan.png";
</script>

<div class="flex items-center">
  <div class="mx-8">
    <img width=150 src={profileImage} alt="" />
  </div>
  <div class="flex flex-col justify-center font-source text-graphite">
    <h1 class="text-2xl sm:text-3xl text-graphite-dark font-rale font-semibold">{testimonial}</h1>
    <h2 class=" mt-4 text-xl">{name}</h2>
    <h3>{role}</h3>
  </div>
</div>
